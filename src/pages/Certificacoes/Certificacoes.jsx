import styles from './Certificacoes.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'

const CERTS = [
  { title:'ISO 9001', desc:'Sistema de Gestão da Qualidade certificado e auditado por organismo acreditado internacionalmente.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg> },
  { title:'NR 11 / NR 12', desc:'Conformidade absoluta nas normas de transporte, movimentação e segurança em máquinas.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title:'Seguros Completos', desc:'Todas as operações cobertas por seguros RCTR-C e responsabilidade civil da carga.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
]

const ITEMS = [
  { t:'Auditorias anuais independentes', d:'Revisão completa dos processos por auditores externos credenciados.' },
  { t:'Operadores com habilitação atualizada', d:'Cursos de reciclagem obrigatórios e registros NR-11 sempre válidos.' },
  { t:'Laudos técnicos disponíveis', d:'Documentação completa entregue ao contratante antes de cada operação.' },
  { t:'Cobertura de seguros em 100% das operações', d:'RCTR-C e responsabilidade civil ativa em todas as mobilizações.' },
  { t:'Memorial de cálculo de rigging', d:'Engenheiro responsável assina cada içamento de equipamento pesado.' },
]

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

export default function Certificacoes() {
  const ref = useReveal([])
  return (
    <div ref={ref}>
      <PageHero eyebrow="Garantia de qualidade" title={<>Certificações<br/>&amp; Conformidades</>} subtitle="Cumprimento rigoroso das principais normas nacionais e internacionais para máxima segurança operacional." crumb="Certificações" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.certsGrid}>
            {CERTS.map((c) => (
              <div key={c.title} className={`${styles.certCard} reveal`}>
                <div className={styles.certIco}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <SectionHeader eyebrow="Por que isso importa" title={<>Certificações como<br/>compromisso com você</>} />
              <p className={styles.lead}>As certificações do Grupo Maxpesa são o resultado de anos de trabalho sistemático para garantir que cada operação seja executada com o mais alto padrão de qualidade e segurança.</p>
              <p className={styles.body}>Para o contratante, isso representa previsibilidade, redução de riscos e um parceiro que sabe exatamente o que está fazendo.</p>
              <Button to="/contato">Solicitar proposta técnica</Button>
            </div>
            <div className={`${styles.checkList} reveal`}>
              {ITEMS.map((item) => (
                <div key={item.t} className={styles.checkItem}>
                  <div className={styles.checkIco}><Check /></div>
                  <div><strong>{item.t}</strong><span>{item.d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section}`} style={{textAlign:'center'}}>
        <div className="container">
          <SectionHeader center eyebrow="Documentação disponível" title={<>Solicite nosso dossiê<br/>de certificações</>} subtitle="Enviamos toda a documentação técnica para análise prévia antes da contratação." />
          <Button to="/contato" size="lg">Solicitar documentação</Button>
        </div>
      </section>
    </div>
  )
}