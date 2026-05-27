import styles from './Timeline.module.css'
export default function Timeline({ items }) {
  return (
    <div className={`${styles.timeline} reveal`}>
      {items.map((item) => (
        <div key={item.year} className={styles.item}>
          <div className={styles.dot} />
          <div className={styles.year}>{item.year}</div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.desc}>{item.desc}</div>
        </div>
      ))}
    </div>
  )
}