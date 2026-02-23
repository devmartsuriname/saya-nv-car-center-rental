import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import PublicLayout from '@/apps/public/layouts/PublicLayout'
import HomeOne from '@/apps/public/pages/home-one/HomeOne'

const AdminApp = lazy(() => import('@/apps/admin/AdminApp'))

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
    </Routes>
  )
}

function App() {
  return <AppContent />
}

export default App
