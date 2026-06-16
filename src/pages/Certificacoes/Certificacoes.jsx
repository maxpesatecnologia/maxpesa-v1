import { useRef, useEffect } from 'react'
import styles from './Certificacoes.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import imgIso9001      from '../../assets/iso_9001.png'
import imgIso14001     from '../../assets/iso_14001.png'
import imgIso45001     from '../../assets/iso_45001.png'
import imgOnuMulheres  from '../../assets/onu_mulheres.png'
import imgPactoGlobal  from '../../assets/pacto_global.png'
import imgInstEthos    from '../../assets/inst_ethos.png'

// ─── Para adicionar os PDFs das certificações ISO ──────────────────────────────
// 1. Coloque o arquivo em /public/docs/  (ex: public/docs/iso-9001.pdf)
// 2. Adicione o campo `pdf` na entrada correspondente do array CERTS abaixo
//    Exemplo:  { title:'ISO 9001', ..., pdf: '/docs/iso-9001.pdf' }
// 3. O card será renderizado automaticamente como link com ícone de download.
// ──────────────────────────────────────────────────────────────────────────────

const CERTS = [
  { title:'ISO 9001',        desc:'Sistema de Gestão da Qualidade certificado e auditado por organismo acreditado internacionalmente.',                        img: imgIso9001,     pdf: '/docs/ISO-9001-MAXPESA.pdf'  },
  { title:'ISO 14001',       desc:'Conformidade com as normas de gestão ambiental, movimentação e segurança em máquinas.',                                     img: imgIso14001,    pdf: '/docs/ISO-14001-MAXPESA.pdf' },
  { title:'ISO 45001',       desc:'Sistema de Gestão de Saúde e Segurança Ocupacional aplicado em 100% das operações.',                                        img: imgIso45001,    pdf: '/docs/ISO-45001-MAXPESA.pdf' },
  { title:'ONU Mulheres',    desc:'Signatários dos Princípios de Empoderamento das Mulheres, promovendo equidade no ambiente de trabalho.',                     img: imgOnuMulheres                                           },
  { title:'Global Compact',  desc:'Adesão ao Pacto Global da ONU, comprometendo-se com os dez princípios de sustentabilidade e direitos humanos.',             img: imgPactoGlobal                                           },
  { title:'Instituto Ethos', desc:'Associados ao Instituto Ethos, referência em práticas de responsabilidade social empresarial no Brasil.',                    img: imgInstEthos                                             },
]

const ITEMS = [
  { t:'Auditorias anuais independentes',         d:'Revisão completa dos processos por auditores externos credenciados.' },
  { t:'Operadores com habilitação atualizada',   d:'Cursos de reciclagem obrigatórios e registros NR-11 sempre válidos.' },
  { t:'Laudos técnicos disponíveis',             d:'Documentação completa entregue ao contratante antes de cada operação.' },
  { t:'Cobertura de seguros em 100% das operações', d:'RCTR-C e responsabilidade civil ativa em todas as mobilizações.' },
  { t:'Memorial de cálculo de rigging',          d:'Engenheiro responsável assina cada içamento de equipamento pesado.' },
]

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

function CertCardInner({ c }) {
  return (
    <div className={styles.certCard}>
      {c.pdf && (
        <div className={styles.certDownload} title="Baixar certificado PDF">
          <DownloadIcon />
        </div>
      )}
      <div className={styles.certImg}>
        <img src={c.img} alt={c.title} />
      </div>
      <h3>{c.title}</h3>
      <p>{c.desc}</p>
    </div>
  )
}

export default function Certificacoes() {
  const ref = useReveal([])
  const whyLinesRef = useRef(null)

  useEffect(() => {
    const el = whyLinesRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? el.classList.add(styles.whyVisible)
          : el.classList.remove(styles.whyVisible)
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <PageHero eyebrow="Garantia de qualidade" title={<>Certificações<br/>&amp; Conformidades</>} subtitle="Cumprimento rigoroso das principais normas nacionais e internacionais para máxima segurança operacional." crumb="Certificações" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.certsGrid}>
            {CERTS.map((c) =>
              c.pdf ? (
                <a key={c.title} href={c.pdf} target="_blank" rel="noopener noreferrer" className={`${styles.certCardLink} reveal`}>
                  <CertCardInner c={c} />
                </a>
              ) : (
                <div key={c.title} className="reveal">
                  <CertCardInner c={c} />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt} ${styles.whySec}`}>
        <div ref={whyLinesRef} className={styles.whyLines} aria-hidden="true">
          <svg viewBox="0 0 1440 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path pathLength="1" className={styles.wLine} style={{'--d':'0s','--dur':'1.8s','--pulse-d':'0s','--pulse-dur':'3.6s'}}
              d="M -60 550 C -60 200 820 -60 1480 -30"
              stroke="#E6282B" strokeWidth="3.8" strokeOpacity="0.38" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.18s','--dur':'1.9s','--pulse-d':'0.7s','--pulse-dur':'4.2s'}}
              d="M -60 420 C -60 120 740 -60 1480 -55"
              stroke="#E6282B" strokeWidth="3.0" strokeOpacity="0.26" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.36s','--dur':'2.0s','--pulse-d':'1.4s','--pulse-dur':'3.9s'}}
              d="M -60 650 C -60 260 900 -60 1480 -10"
              stroke="#E6282B" strokeWidth="2.4" strokeOpacity="0.19" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.54s','--dur':'2.1s','--pulse-d':'0.4s','--pulse-dur':'4.6s'}}
              d="M -60 750 C -60 330 980 -60 1480 14"
              stroke="#E6282B" strokeWidth="1.8" strokeOpacity="0.13" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.72s','--dur':'2.2s','--pulse-d':'1.1s','--pulse-dur':'5.0s'}}
              d="M -60 320 C -60 70 660 -60 1480 -68"
              stroke="#E6282B" strokeWidth="1.3" strokeOpacity="0.09" fill="none" />
          </svg>
        </div>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <div className={styles.grid}>
            <div>
              <div className="reveal"><SectionHeader eyebrow="Por que isso importa" title={<>Certificações como<br/>compromisso com você</>} /></div>
              <p className={`${styles.lead} reveal`}>As certificações do Grupo Maxpesa são o resultado de anos de trabalho sistemático para garantir que cada operação seja executada com o mais alto padrão de qualidade e segurança.</p>
              <p className={`${styles.body} reveal`}>Para o contratante, isso representa previsibilidade, redução de riscos e um parceiro que sabe exatamente o que está fazendo.</p>
              <div className="reveal"><Button to="/contato">Solicitar proposta técnica</Button></div>
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

      <section className={styles.section} style={{textAlign:'center'}}>
        <div className="container">
          <div className="reveal"><SectionHeader center eyebrow="Documentação disponível" title={<>Solicite nosso dossiê<br/>de certificações</>} subtitle="Enviamos toda a documentação técnica para análise prévia antes da contratação." /></div>
          <div className="reveal"><Button to="/contato" size="lg">Solicitar documentação</Button></div>
        </div>
      </section>
    </div>
  )
}
