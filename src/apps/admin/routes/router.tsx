import { Navigate, Route, Routes, type RouteProps } from 'react-router-dom'
import { Suspense } from 'react'
import AdminLayout from '@/apps/admin/layouts/AdminLayout'
import AuthLayout from '@/apps/admin/layouts/AuthLayout'
import ErrorBoundary from '@/apps/admin/components/ErrorBoundary'
import LoadingFallback from '@/apps/admin/components/LoadingFallback'
import { appRoutes, authRoutes } from '@/apps/admin/routes/index'
import { useAuthContext } from '@/apps/admin/context/useAuthContext'

const AppRouter = (props: RouteProps) => {
  const { isAuthenticated } = useAuthContext()
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {(authRoutes || []).map((route, idx) => (
            <Route key={idx + route.name} path={route.path} element={<AuthLayout {...props}>{route.element}</AuthLayout>} />
          ))}

          {(appRoutes || []).map((route, idx) => (
            <Route
              key={idx + route.name}
              path={route.path}
              element={
                isAuthenticated ? (
                  <AdminLayout {...props}>{route.element}</AdminLayout>
                ) : (
                  <Navigate
                    to={{
                      pathname: '/auth/sign-in',
                      search: 'redirectTo=' + route.path,
                    }}
                  />
                )
              }
            />
          ))}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default AppRouter
