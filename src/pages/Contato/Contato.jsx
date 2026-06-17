import styles from './Contato.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../context/LanguageContext'
import PageHero from '../../components/PageHero/PageHero'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contato() {
  const { t } = useLang()
  const ref = useReveal([])
  return (
    <div ref={ref}>
      <PageHero eyebrow={t.contato.heroEyebrow} title={<>Solicite um<br/>Orçamento</>} subtitle={t.contato.heroSub} crumb={t.contato.heroCrumb} />
      <section className={styles.section}>
        <div className="container"><ContactForm /></div>
      </section>
    </div>
  )
}