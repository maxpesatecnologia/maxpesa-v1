import styles from './FeatList.module.css'
const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)
export default function FeatList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i}><Check />{item}</li>
      ))}
    </ul>
  )
}