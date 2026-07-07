import { useOutlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Topbar    from '../Topbar/Topbar'
import Header    from '../Header/Header'
import Footer    from '../Footer/Footer'
import WppButton from '../WppButton/WppButton'
import { LanguageProvider } from '../../context/LanguageContext'

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.key])
  return (
    <LanguageProvider>
      <Topbar />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WppButton />
    </LanguageProvider>
  )
}
