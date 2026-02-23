import ErrorBoundary from '@/apps/admin/components/ErrorBoundary'
import FallbackLoading from '@/apps/admin/components/FallbackLoading'
import { ChildrenType } from '@/types/component-props'
import { Suspense } from 'react'

const AuthLayout = ({ children }: ChildrenType) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<FallbackLoading />}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default AuthLayout
