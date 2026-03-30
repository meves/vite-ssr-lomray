import type { TRouteObject } from '@lomray/vite-ssr-boost/interfaces/route-object'

import FeedPage from '@pages/FeedPage/index'
import PostPage from '@pages/PostPage/index'
import { ViewerSSRPage } from '@pages/ViewerSSRPage'
import { ViewerCSRPage } from '@pages/ViewerCSRPage'

import { getViewer } from '@entities/Viewer'
import { getPing } from '@entities/SSR'
import { ErrorComponent } from '@shared/ui'

const routes: TRouteObject[] = [
  {
    path: '/',
    lazy: () => import('@pages/HomePage/ui/HomePage')
  },
  {
    path: '/feed',
    Component: FeedPage,    
    onlyClient: true
  },
  {
    path: '/post',
    Component: PostPage
  },
  {
    path: '/ssr',
    lazy: () => import('@pages/SsrPage/ui/SsrPage'),
    loader: getPing,
    HydrateFallback: () => null
  },
  {
    path: '/viewer-ssr',
    Component: ViewerSSRPage,
    loader: getViewer,
    HydrateFallback: () => <h2>Viewer SSR Page</h2>,
    errorElement: <ErrorComponent/>
  },
  {
    path: '/viewer-csr',
    Component: ViewerCSRPage,
    onlyClient: true
  },
  {
    path: '/.well-known/*',
    lazy: () => import('@pages/EmptyPage/ui/EmptyPage')
  }
]

export default routes