import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import SsrBoost from '@lomray/vite-ssr-boost/plugin'
import * as path from 'node:path'

// https://vite.dev/config/
export default defineConfig(({command, mode}) => ({
  root: __dirname,
  publicDir: 'public',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared/ui': path.resolve(__dirname, 'src/shared/ui'),
      '@shared/api': path.resolve(__dirname, 'src/shared/api'),
      '@shared/contexts': path.resolve(__dirname, 'src/shared/contexts'),
      '@entities': path.resolve(__dirname, 'src/entities')
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/app/entries/main.tsx'),
        html: path.resolve(__dirname, 'index.html')
      },
    },
  },
  plugins: [
    react(),
    SsrBoost({
      indexFile: 'index.html',
      serverFile: 'src/app/entries/server.ts',
      clientFile: 'src/app/entries/client.ts',
      routesPath: 'src/app/router/routes.tsx',
      tsconfigAliases: true,      
    }),
  ],
  server: {
    port: 3000,
    host: '127.0.0.1',
    open: true,
    strictPort: true
  },
}))
