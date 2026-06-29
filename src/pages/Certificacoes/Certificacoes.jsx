import { useRef, useEffect } from 'react'
import styles from './Certificacoes.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../context/LanguageContext'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import imgIso9001      from '../../assets/iso_9001.png'
import imgIso14001     from '../../assets/iso_14001.png'
import imgIso45001     from '../../assets/iso_45001.png'
import imgOnuMulheres  from '../../assets/onu_mulheres.png'
import imgPactoGlobal  from '../../assets/pacto_global.png'
import imgInstEthos    from '../../assets/inst_ethos.png'

const AWARDS_STATIC = [
  { title: 'Prêmio Destaque Setorial',       year: '2023', pdf: '/docs/PREMIO-DESTAQUE-2023.pdf'  },
  { title: 'Top Employer Brasil',             year: '2022', pdf: '/docs/TOP-EMPLOYER-2022.pdf'     },
  { title: 'Prêmio ESG & Sustentabilidade',  year: '2023', pdf: '/docs/PREMIO-ESG-2023.pdf'       },
  { title: 'Excelência Operacional',          year: '2024', pdf: '/docs/EXCELENCIA-OP-2024.pdf'    },
]

const AWARD_ICONS = [
  /* trophy */ (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h3"/><path d="M18 9h2a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-3"/>
      <path d="M4 22h16"/><path d="M12 17v5"/><path d="M8 17a5 5 0 0 0 8 0V3H8v14z"/>
    </svg>
  ),
  /* star */ (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  /* leaf/ESG */ (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  /* shield check */ (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  ),
]

const CERT_STATIC = [
  { title:'ISO 9001',        img: imgIso9001,     pdf: '/docs/ISO-9001-MAXPESA.pdf'  },
  { title:'ISO 14001',       img: imgIso14001,    pdf: '/docs/ISO-14001-MAXPESA.pdf' },
  { title:'ISO 45001',       img: imgIso45001,    pdf: '/docs/ISO-45001-MAXPESA.pdf' },
  { title:'ISO 37001',       img: imgIso45001,    pdf: '/docs/ISO-37001-MAXPESA.pdf' },
  { title:'ONU Mulheres',    img: imgOnuMulheres                                     },
  { title:'Global Compact',  img: imgPactoGlobal                                     },
  { title:'Instituto Ethos', img: imgInstEthos                                       },
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

function AwardCardInner({ c, icon, downloadTitle }) {
  return (
    <div className={styles.certCard}>
      {c.pdf && (
        <div className={styles.certDownload} title={downloadTitle}>
          <DownloadIcon />
        </div>
      )}
      <div className={styles.certImg}>
        <div className={styles.awardIconWrap}>{icon}</div>
      </div>
      <h3>{c.title}</h3>
      <p className={styles.awardYear}>{c.year}</p>
      <p>{c.desc}</p>
    </div>
  )
}

function CertCardInner({ c, downloadTitle }) {
  return (
    <div className={styles.certCard}>
      {c.pdf && (
        <div className={styles.certDownload} title={downloadTitle}>
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
  const { t } = useLang()
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

  const certs  = CERT_STATIC.map((c, i) => ({ ...c, desc: t.certificacoes.certDescs[i] }))
  const awards = AWARDS_STATIC.map((c, i) => ({ ...c, desc: t.certificacoes.awardsDescs[i] }))

  return (
    <div ref={ref}>
      <PageHero eyebrow={t.certificacoes.heroEyebrow} title={<>{t.certificacoes.heroTitle[0]}<br/>{t.certificacoes.heroTitle[1]}</>} subtitle={t.certificacoes.heroSub} crumb={t.certificacoes.heroCrumb} />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.certsGrid}>
            {certs.map((c) =>
              c.pdf ? (
                <a key={c.title} href={c.pdf} target="_blank" rel="noopener noreferrer" className={`${styles.certCardLink} reveal`}>
                  <CertCardInner c={c} downloadTitle={t.certificacoes.downloadTitle} />
                </a>
              ) : (
                <div key={c.title} className="reveal">
                  <CertCardInner c={c} downloadTitle={t.certificacoes.downloadTitle} />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.awardsSec}`}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow={t.certificacoes.awardsEyebrow}
              title={<>{t.certificacoes.awardsTitle[0]}<br/>{t.certificacoes.awardsTitle[1]}</>}
            />
          </div>
          <div className={styles.certsGrid}>
            {awards.map((c, i) =>
              c.pdf ? (
                <a key={c.title} href={c.pdf} target="_blank" rel="noopener noreferrer" className={`${styles.certCardLink} reveal`}>
                  <AwardCardInner c={c} icon={AWARD_ICONS[i]} downloadTitle={t.certificacoes.downloadTitle} />
                </a>
              ) : (
                <div key={c.title} className="reveal">
                  <AwardCardInner c={c} icon={AWARD_ICONS[i]} downloadTitle={t.certificacoes.downloadTitle} />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt} ${styles.whySec}`}>
        <div ref={whyLinesRef} className={styles.whyLines} aria-hidden="true">
          <svg viewBox="0 0 1440 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path pathLength="1" className={styles.wLine} style={{'--d':'0s','--dur':'1.8s','--pulse-d':'0s','--pulse-dur':'3.6s'}} d="M -60 550 C -60 200 820 -60 1480 -30" stroke="#E6282B" strokeWidth="3.8" strokeOpacity="0.38" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.18s','--dur':'1.9s','--pulse-d':'0.7s','--pulse-dur':'4.2s'}} d="M -60 420 C -60 120 740 -60 1480 -55" stroke="#E6282B" strokeWidth="3.0" strokeOpacity="0.26" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.36s','--dur':'2.0s','--pulse-d':'1.4s','--pulse-dur':'3.9s'}} d="M -60 650 C -60 260 900 -60 1480 -10" stroke="#E6282B" strokeWidth="2.4" strokeOpacity="0.19" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.54s','--dur':'2.1s','--pulse-d':'0.4s','--pulse-dur':'4.6s'}} d="M -60 750 C -60 330 980 -60 1480 14" stroke="#E6282B" strokeWidth="1.8" strokeOpacity="0.13" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.72s','--dur':'2.2s','--pulse-d':'1.1s','--pulse-dur':'5.0s'}} d="M -60 320 C -60 70 660 -60 1480 -68" stroke="#E6282B" strokeWidth="1.3" strokeOpacity="0.09" fill="none" />
          </svg>
        </div>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <div className={styles.grid}>
            <div>
              <div className="reveal"><SectionHeader eyebrow={t.certificacoes.whyEyebrow} title={<>{t.certificacoes.whyTitle[0]}<br/>{t.certificacoes.whyTitle[1]}</>} /></div>
              <p className={`${styles.lead} reveal`}>{t.certificacoes.whyLead}</p>
              <p className={`${styles.body} reveal`}>{t.certificacoes.whyBody}</p>
              <div className="reveal"><Button to="/contato">{t.certificacoes.whyBtn}</Button></div>
            </div>
            <div className={`${styles.checkList} reveal`}>
              {t.certificacoes.items.map((item, i) => (
                <div key={i} className={styles.checkItem}>
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
          <div className="reveal"><SectionHeader center eyebrow={t.certificacoes.docEyebrow} title={<>{t.certificacoes.docTitle[0]}<br/>{t.certificacoes.docTitle[1]}</>} subtitle={t.certificacoes.docSub} /></div>
          <div className="reveal"><Button to="/contato" size="lg">{t.certificacoes.docBtn}</Button></div>
        </div>
      </section>
    </div>
  )
}
