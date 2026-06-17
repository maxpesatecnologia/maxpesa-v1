import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/maxpesa_logo_png.png'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import { useLang } from '../../context/LanguageContext'

const SERVICE_PATHS = [
  '/servicos#movimentacao-vertical',
  '/servicos#movimentacao-cargas',
  '/servicos#locacao',
  '/servicos#linha-amarela',
  '/servicos#transporte',
]

export default function Header() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Grupo Maxpesa" className={styles.logoImg} />
          <Link to="/" className={styles.logoLink} aria-label="Grupo Maxpesa" onClick={() => setMenuOpen(false)} />
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.list}>
            <li>
              <NavLink to="/" end className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.home}
              </NavLink>
            </li>
            <li>
              <NavLink to="/empresa" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.company}
              </NavLink>
            </li>

            {/* Dropdown */}
            <li
              className={styles.drop}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <NavLink
                to="/servicos"
                className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault()
                    setDropOpen((v) => !v)
                  } else {
                    setMenuOpen(false)
                  }
                }}
              >
                {t.nav.services}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`${styles.arrow} ${dropOpen ? styles.arrowOpen : ''}`}>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </NavLink>
              <ul className={`${styles.dropMenu} ${dropOpen ? styles.dropVisible : ''}`}>
                {t.serviceItems.map((label, i) => (
                  <li key={i}>
                    <Link to={SERVICE_PATHS[i]} onClick={() => { setMenuOpen(false); setDropOpen(false) }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/frota" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.fleet}
              </NavLink>
            </li>
            <li>
              <NavLink to="/esg" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.esg}
              </NavLink>
            </li>
            <li>
              <NavLink to="/certificacoes" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.certifications}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.blog}
              </NavLink>
            </li>
            <li>
              <a href="https://canalconfidencial.com.br/maxpesa/" target="_blank" rel="noopener noreferrer"
                className={styles.a} onClick={() => setMenuOpen(false)}>
                {t.nav.report}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
                  <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </li>
            <li>
              <NavLink to="/trabalhe-conosco" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.careers}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className={`${styles.a} ${styles.cta}`}
                onClick={() => setMenuOpen(false)}>
                {t.nav.quote}
              </NavLink>
            </li>
            <li className={styles.langItem}>
              <LangSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
