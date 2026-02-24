import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import PublicLayout from '@/apps/public/layouts/PublicLayout'
import HomeOne from '@/apps/public/pages/home-one/HomeOne'

const AdminApp = lazy(() => import('@/apps/admin/AdminApp'))

// Inner pages - lazy loaded
const InnerLayout = lazy(() => import('@/apps/public/pages/inner-layout/InnerLayout'))
const About = lazy(() => import('@/apps/public/pages/about/About'))
const Service = lazy(() => import('@/apps/public/pages/service/Service'))
const Drivers = lazy(() => import('@/apps/public/pages/drivers/Drivers'))
const DriverDetails = lazy(() => import('@/apps/public/pages/driver-details/DriverDetails'))
const Blog = lazy(() => import('@/apps/public/pages/blog/Blog'))
const BlogDetails = lazy(() => import('@/apps/public/pages/blog-details/BlogDetails'))
const BlogStandard = lazy(() => import('@/apps/public/pages/blog-standard/BlogStandard'))
const BlogLeftSidebar = lazy(() => import('@/apps/public/pages/blog-left-sidebar/BlogLeftSidebar'))
const BlogRightSidebar = lazy(() => import('@/apps/public/pages/blog-right-sidebar/BlogRightSidebar'))
const Contact = lazy(() => import('@/apps/public/pages/contact/Contact'))
const Cars = lazy(() => import('@/apps/public/pages/cars/Cars'))
const CarListVOne = lazy(() => import('@/apps/public/pages/car-list-v-one/CarListVOne'))
const CarListVTwo = lazy(() => import('@/apps/public/pages/car-list-v-two/CarListVTwo'))
const CarListVThree = lazy(() => import('@/apps/public/pages/car-list-v-three/CarListVThree'))
const CarListingSingle = lazy(() => import('@/apps/public/pages/listing-single/CarListingSingle'))

const AppContent = () => {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  if (isAdmin) {
    return (
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>}>
        <AdminApp />
      </Suspense>
    )
  }

  return (
    <Routes>
      <Route path="/" element={
        <PublicLayout>
          <HomeOne />
        </PublicLayout>
      } />
      <Route path="/inner" element={
        <PublicLayout>
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>}>
            <InnerLayout />
          </Suspense>
        </PublicLayout>
      }>
        <Route path="about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<div>Loading...</div>}><Service /></Suspense>} />
        <Route path="drivers" element={<Suspense fallback={<div>Loading...</div>}><Drivers /></Suspense>} />
        <Route path="driver-details" element={<Suspense fallback={<div>Loading...</div>}><DriverDetails /></Suspense>} />
        <Route path="blog" element={<Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>} />
        <Route path="blog-details" element={<Suspense fallback={<div>Loading...</div>}><BlogDetails /></Suspense>} />
        <Route path="blog-standard" element={<Suspense fallback={<div>Loading...</div>}><BlogStandard /></Suspense>} />
        <Route path="blog-left-sidebar" element={<Suspense fallback={<div>Loading...</div>}><BlogLeftSidebar /></Suspense>} />
        <Route path="blog-right-sidebar" element={<Suspense fallback={<div>Loading...</div>}><BlogRightSidebar /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
        <Route path="cars" element={<Suspense fallback={<div>Loading...</div>}><Cars /></Suspense>} />
        <Route path="car-list-v-1" element={<Suspense fallback={<div>Loading...</div>}><CarListVOne /></Suspense>} />
        <Route path="car-list-v-2" element={<Suspense fallback={<div>Loading...</div>}><CarListVTwo /></Suspense>} />
        <Route path="car-list-v-3" element={<Suspense fallback={<div>Loading...</div>}><CarListVThree /></Suspense>} />
        <Route path="listing-single" element={<Suspense fallback={<div>Loading...</div>}><CarListingSingle /></Suspense>} />
      </Route>
    </Routes>
  )
}

function App() {
  return <AppContent />
}

export default App
