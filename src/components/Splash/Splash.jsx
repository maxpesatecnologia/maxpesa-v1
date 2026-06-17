import { useState, useEffect } from 'react'
import styles from './Splash.module.css'
import logo from '../../assets/logo_branca.png'

export default function Splash({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 4050)
    return () => clearTimeout(t)
  }, [onDone])

  if (!visible) return null

  return (
    <div className={styles.splash}>
      <img src={logo} alt="Grupo Maxpesa" className={styles.logo} />
    </div>
  )
}
