import styles from './ImgFrame.module.css'
export default function ImgFrame({ src, alt, badge }) {
  return (
    <div className={styles.frame}>
      <img src={src} alt={alt} />
      {badge && (
        <div className={styles.badge}>
          {badge.icon}
          <span>{badge.text}<strong>{badge.strong}</strong></span>
        </div>
      )}
    </div>
  )
}