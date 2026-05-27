import styles from './PageHero.module.css'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Eyebrow from '../Eyebrow/Eyebrow'
export default function PageHero({ eyebrow, title, subtitle, crumb }) {
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {crumb && <Breadcrumb label={crumb} />}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  )
}