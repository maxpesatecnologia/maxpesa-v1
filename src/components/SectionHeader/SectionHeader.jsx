import styles from './SectionHeader.module.css'
import Eyebrow from '../Eyebrow/Eyebrow'
export default function SectionHeader({ eyebrow, title, subtitle, center = false, dark = false }) {
  return (
    <div className={`${styles.header} ${center ? styles.center : ''} ${dark ? styles.dark : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </div>
  )
}