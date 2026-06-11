import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/maxpesa_logo_png.png'

const SERVICES = [
  { to: '/servicos#movimentacao-vertical', label: 'Movimentação Horizontal e Vertical de Cargas' },
  { to: '/servicos#movimentacao-cargas',   label: 'Movimentação de Cargas' },
  { to: '/servicos#locacao',               label: 'Locação de Equipamentos' },
  { to: '/servicos#linha-amarela',         label: 'Linha Amarela (Retroescavadeira)' },
  { to: '/servicos#transporte',            label: 'Transporte de Cargas Especiais' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [dropOpen, setDropOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha menu ao redimensionar para desktop
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
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/empresa" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                A Empresa
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
                Serviços
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`${styles.arrow} ${dropOpen ? styles.arrowOpen : ''}`}>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </NavLink>
              <ul className={`${styles.dropMenu} ${dropOpen ? styles.dropVisible : ''}`}>
                {SERVICES.map((s) => (
                  <li key={s.to}>
                    <Link to={s.to} onClick={() => { setMenuOpen(false); setDropOpen(false) }}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/esg" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                ESG
              </NavLink>
            </li>
            <li>
              <NavLink to="/certificacoes" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                Certificações
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                Blog
              </NavLink>
            </li>
            <li>
              <a href="https://canalconfidencial.com.br/maxpesa/" target="_blank" rel="noopener noreferrer"
                className={styles.a} onClick={() => setMenuOpen(false)}>
                Denúncia
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
                  <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </li>
            <li>
              <NavLink to="/trabalhe-conosco" className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}>
                Trabalhe Conosco
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className={`${styles.a} ${styles.cta}`}
                onClick={() => setMenuOpen(false)}>
                Orçamento
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
