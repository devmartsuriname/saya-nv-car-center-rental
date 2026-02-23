import '@/apps/admin/assets/scss/style.scss'
import AnimationStar from '@/apps/admin/components/AnimationStar'
import ErrorBoundary from '@/apps/admin/components/ErrorBoundary'
import LoadingFallback from '@/apps/admin/components/LoadingFallback'
import Footer from '@/apps/admin/components/layout/Footer'
import { ChildrenType } from '@/shared/types/component-props'
import { lazy, Suspense } from 'react'
import { Container } from 'react-bootstrap'

const TopNavigationBar = lazy(() => import('@/apps/admin/components/layout/TopNavigationBar/page'))
const VerticalNavigationBar = lazy(() => import('@/apps/admin/components/layout/VerticalNavigationBar/page'))

const AdminLayout = ({ children }: ChildrenType) => {
  return (
    <div className="admin-scope wrapper">
      <Suspense fallback={<LoadingFallback />}>
        <TopNavigationBar />
      </Suspense>
      <Suspense fallback={<div />}>
        <VerticalNavigationBar />
      </Suspense>
      <AnimationStar />
      <div className="page-content">
        <Container fluid>
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              {children}
            </Suspense>
          </ErrorBoundary>
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout
