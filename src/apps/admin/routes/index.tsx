import { lazy } from 'react'
import { Navigate, type RouteProps } from 'react-router-dom'

const Dashboards = lazy(() => import('@/apps/admin/app/dashboards/page'))

// Auth Routes
const AuthSignIn = lazy(() => import('@/apps/admin/app/(other)/auth/sign-in/page'))
const AuthSignUp = lazy(() => import('@/apps/admin/app/(other)/auth/sign-up/page'))
const ResetPassword = lazy(() => import('@/apps/admin/app/(other)/auth/reset-password/page'))
const LockScreen = lazy(() => import('@/apps/admin/app/(other)/auth/lock-screen/page'))
const Error404 = lazy(() => import('@/apps/admin/app/(other)/error-pages/pages-404/page'))

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

export const authRoutes: RoutesProps[] = [
  {
    name: 'Sign In',
    path: '/admin/auth/sign-in',
    element: <AuthSignIn />,
  },
  {
    name: 'Sign Up',
    path: '/admin/auth/sign-up',
    element: <AuthSignUp />,
  },
  {
    name: 'Reset Password',
    path: '/admin/auth/reset-password',
    element: <ResetPassword />,
  },
  {
    name: 'Lock Screen',
    path: '/admin/auth/lock-screen',
    element: <LockScreen />,
  },
  {
    name: '404 Error',
    path: '/admin/error-pages/pages-404',
    element: <Error404 />,
  },
]

export const appRoutes: RoutesProps[] = [
  {
    path: '/admin',
    name: 'root',
    element: <Navigate to="/admin/dashboards" />,
  },
  {
    path: '/admin/dashboards',
    name: 'Dashboards',
    element: <Dashboards />,
  },
]
