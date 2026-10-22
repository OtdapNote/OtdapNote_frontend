import { createBrowserRouter } from 'react-router'
import { HomePage } from '../../pages/home'
import { NotFoundPage } from '../../pages/not-found'
import { ROUTES } from '../../shared/config'

// 라우터는 React 트리 밖에서 한 번만 만든다 (React Router 공식 문서)
export const router = createBrowserRouter([
  { path: ROUTES.home, Component: HomePage },
  { path: '*', Component: NotFoundPage },
])