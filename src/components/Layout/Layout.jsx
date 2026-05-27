import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Topbar    from '../Topbar/Topbar'
import Header    from '../Header/Header'
import Footer    from '../Footer/Footer'
import WppButton from '../WppButton/WppButton'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <>
      <Topbar />
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WppButton />
    </>
  )
}
