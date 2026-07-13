import { useState, useEffect, useRef } from 'react'
import styles from './LangSwitcher.module.css'
import { useLang, LANGS } from '../../context/LanguageContext'

export default function LangSwitcher() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={t.ui.langSwitcher}
      >
        <span className={styles.flag}>{t.flag}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}>
        {Object.entries(LANGS).map(([code, l]) => (
          <button
            key={code}
            className={`${styles.option} ${lang === code ? styles.optionActive : ''}`}
            onClick={() => { setLang(code); setOpen(false) }}
          >
            <span className={styles.optFlag}>{l.flag}</span>
            <span className={styles.optName}>{l.name}</span>
            <span className={styles.optShort}>{l.short}</span>
            {lang === code && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.check}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
