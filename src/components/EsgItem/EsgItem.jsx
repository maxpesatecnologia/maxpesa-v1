import styles from './EsgItem.module.css'
export default function EsgItem({ icon, title, desc }) {
  return (
    <div className={styles.item}>
      <div className={styles.ico}>{icon}</div>
      <div><h4>{title}</h4><p>{desc}</p></div>
    </div>
  )
}