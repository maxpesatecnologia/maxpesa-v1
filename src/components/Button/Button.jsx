import { Link } from 'react-router-dom'
import styles from './Button.module.css'
export default function Button({ to, href, variant = 'red', size = '', children, onClick, type = 'button' }) {
  const cls = [styles.btn, styles[variant], size ? styles[size] : ''].filter(Boolean).join(' ')
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}