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
  '/servicos#empilhadeiras-plataformas',
]

// Below this width the desktop nav (Início/Empresa/Serviços/Frota/ESG/Certificações
// + CTA + lang switcher) cannot fit even the longest language (German) without
// overflowing the header — verified against all 5 languages' actual rendered
// widths, with a safety margin for future copy changes. Blog, Trabalhe Conosco
// and Denúncia moved to the Topbar so the desktop nav only needs to hide behind
// the hamburger on phones/small tablets, not on regular desktop/laptop widths.
const NAV_BREAKPOINT = 768

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
    const onResize = () => {
      if (window.innerWidth > NAV_BREAKPOINT) {
        setMenuOpen(false)
        setDropOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

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

        {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />}

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
              onMouseEnter={() => { if (window.innerWidth > NAV_BREAKPOINT) setDropOpen(true) }}
              onMouseLeave={() => { if (window.innerWidth > NAV_BREAKPOINT) setDropOpen(false) }}
            >
              <NavLink
                to="/servicos"
                className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={(e) => {
                  if (window.innerWidth <= NAV_BREAKPOINT) {
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
                <li className={styles.dropSectionLabel}>{t.nav.locacaoLabel}</li>
                {t.serviceItems.map((label, i) => (
                  <li key={i}>
                    <Link to={SERVICE_PATHS[i]} onClick={() => { setMenuOpen(false); setDropOpen(false) }}>
                      {label}
                    </Link>
                  </li>
                ))}
                <li className={styles.dropDivider} aria-hidden="true" />
                <li>
                  <Link
                    to="/vendas"
                    className={styles.dropSaleLink}
                    onClick={() => { setMenuOpen(false); setDropOpen(false) }}
                  >
                    {t.nav.equipSales}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </li>
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
