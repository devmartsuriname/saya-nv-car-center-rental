import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from '@/apps/public/layouts/PublicLayout'
import HomeOne from '@/apps/public/pages/home-one/HomeOne'
import AppProvidersWrapper from '@/apps/admin/components/wrapper/AppProvidersWrapper'
import configureFakeBackend from '@/apps/admin/helpers/fake-backend'
import AppRouter from '@/apps/admin/routes/router'

configureFakeBackend()

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={
        <PublicLayout>
          <HomeOne />
        </PublicLayout>
      } />

      {/* Admin routes */}
      <Route path="/admin/*" element={
        <AppProvidersWrapper>
          <AppRouter />
        </AppProvidersWrapper>
      } />
    </Routes>
  )
}

export default App
