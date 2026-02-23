import Footer from '@/apps/admin/components/layout/Footer'
import Cards from './components/Cards'
import Chart from './components/Chart'
import User from './components/User'

import PageTitle from '@/apps/admin/components/PageTitle'

const page = () => {
  return (
    <>
      <PageTitle subName="Darkone" title="Dashboard" />
      <Cards />
      <Chart />
      <User />
      <Footer />
    </>
  )
}

export default page
