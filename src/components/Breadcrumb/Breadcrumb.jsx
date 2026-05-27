import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'
export default function Breadcrumb({ label }) {
  return (
    <nav className={styles.bc} aria-label="Breadcrumb">
      <Link to="/">Início</Link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      <span>{label}</span>
    </nav>
  )
}