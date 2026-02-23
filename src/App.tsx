import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import PublicLayout from '@/apps/public/layouts/PublicLayout'
import HomeOne from '@/apps/public/pages/home-one/HomeOne'
import AppProvidersWrapper from '@/apps/admin/components/wrapper/AppProvidersWrapper'
import configureFakeBackend from '@/apps/admin/helpers/fake-backend'
import AppRouter from '@/apps/admin/routes/router'

configureFakeBackend()

const AppContent = () => {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  if (isAdmin) {
    return (
      <AppProvidersWrapper>
        <AppRouter />
      </AppProvidersWrapper>
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
