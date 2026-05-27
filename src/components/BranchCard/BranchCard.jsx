import styles from './BranchCard.module.css'
export default function BranchCard({ state, city, address, phone, sede = false }) {
  return (
    <div className={`${styles.card} reveal`}>
      <div className={styles.tag}>{sede ? 'Sede' : 'Filial'}</div>
      <h4>{city} — {state}</h4>
      <p>{address}<br />{phone}</p>
    </div>
  )
}