import styles from './Eyebrow.module.css'
export default function Eyebrow({ children }) {
  return (
    <span className={styles.eyebrow}>
      <span className={styles.dot} />
      {children}
    </span>
  )
}