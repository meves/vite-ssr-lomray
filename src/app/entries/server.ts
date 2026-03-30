import entryServer from '@lomray/vite-ssr-boost/node/entry';
import App from '@app/App'
import routes from '@app/router/routes'
import { requestContext } from'@shared/contexts/requestContext'

export default entryServer(App, routes, {
  abortDelay: 15000,
  init: async ({ config }) => ({
    onServerCreated: (app) => {
      void app;
      void config;
    },
    onServerStarted: (_, __, server) => {
      void server;
    },
    onRequest: async (req) => {
      requestContext.enterWith({headers: {...req.headers}})
      
      return {
        appProps: {
          url: req.url
        },      
      }
    },
    onRouterReady: () => ({
      // Disable streaming: ensures full HTML shell (including footer scripts)
      // is sent deterministically, which is required for proper hydration data.
      isStream: true,
    }),
    onShellReady: ({ context }) => {
      // Workaround: ensure HTML footer is appended before the response ends.
      // In some setups the framework may end the response before the footer write.
      const res = context.res;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyRes = res as any;

      if (anyRes.__footerPatched) {
        return;
      }

      anyRes.__footerPatched = true;

      const originalEnd = res.end.bind(res);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res.end = ((...args: any[]) => {
        try {
          if (!anyRes.__footerWritten) {
            anyRes.__footerWritten = true;
            res.write(context.html.footer);
          }
        } catch {
          // ignore
        }

        return originalEnd(...args);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any;
    },
    onResponse: ({ html }) => html,
    onError: ({ error }) => {
      console.error(error);
    },
    getState: () => ({
      app: {
        hydratedAt: Date.now(),
      },
    }),
    routerOptions: {
      basename: '/',
    }
  }),
});
