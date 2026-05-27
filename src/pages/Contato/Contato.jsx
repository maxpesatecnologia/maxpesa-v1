import styles from './Contato.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contato() {
  const ref = useReveal([])
  return (
    <div ref={ref}>
      <PageHero eyebrow="Fale conosco" title={<>Solicite um<br/>Orçamento</>} subtitle="Nossa equipe comercial responde com proposta técnica em até 2 horas úteis." crumb="Contato" />
      <section className={styles.section}>
        <div className="container"><ContactForm /></div>
      </section>
    </div>
  )
}