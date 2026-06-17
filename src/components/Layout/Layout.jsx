import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Topbar    from '../Topbar/Topbar'
import Header    from '../Header/Header'
import Footer    from '../Footer/Footer'
import WppButton from '../WppButton/WppButton'
import { LanguageProvider } from '../../context/LanguageContext'

export default function Layout() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.key])
  return (
    <LanguageProvider>
      <Topbar />
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WppButton />
    </LanguageProvider>
  )
}
