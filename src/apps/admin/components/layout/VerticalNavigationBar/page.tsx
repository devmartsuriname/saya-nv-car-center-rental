import { getMenuItems } from '@/apps/admin/helpers/Manu'
import SimplebarReactClient from '@/apps/admin/components/wrapper/SimplebarReactClient'
import LogoBox from '@/apps/admin/components/wrapper/LogoBox'
import AppMenu from './components/AppMenu'

const page = () => {
  const menuItems = getMenuItems()
  return (
    <div className="app-sidebar">
      <LogoBox />
      <SimplebarReactClient className="scrollbar" data-simplebar>
        <AppMenu menuItems={menuItems} />
      </SimplebarReactClient>
    </div>
  )
}

export default page
