import entryClient from '@lomray/vite-ssr-boost/browser/entry';
import { createBrowserRouter } from 'react-router';
import App from '@app/App'
import routes from '@app/router/routes'

void entryClient(App, routes, {
  init: async ({ isSSRMode, router }) => {
    return {
      isSSRMode,
      currentUrl: router.state.location.pathname,
    };
  },
  routerOptions: {
    basename: '/',
    // Use loader/action data produced on the server during SSR.
    hydrationData: (window as any).__staticRouterHydrationData,
  },
  createRouter: createBrowserRouter,
  rootId: 'root',
});