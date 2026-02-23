import AppProvidersWrapper from '@/apps/admin/components/wrapper/AppProvidersWrapper'
import configureFakeBackend from '@/apps/admin/helpers/fake-backend'
import AppRouter from '@/apps/admin/routes/router'

configureFakeBackend()

const AdminApp = () => {
  return (
    <AppProvidersWrapper>
      <AppRouter />
    </AppProvidersWrapper>
  )
}

export default AdminApp
