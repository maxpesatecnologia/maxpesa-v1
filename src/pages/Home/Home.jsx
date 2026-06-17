import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useCounter } from '../../hooks/useCounter'
import { useLang } from '../../context/LanguageContext'
import Eyebrow from '../../components/Eyebrow/Eyebrow'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import imgGuindaste    from '../../assets/guindaste3.jpeg'
import imgRemocao      from '../../assets/remocaoindustrial.png'
import imgMunck        from '../../assets/munck.jpg'
import imgLinhaAmarela from '../../assets/linhamarela.png'
import imgLinhadeEixo from '../../assets/caminhao_linha_de_eixo.png'
import logoPetrobras   from '../../assets/petrobras_logo.png'
import logoVale        from '../../assets/vale_logo.png'
import logoLight       from '../../assets/light_logo.png'
import logoEnel        from '../../assets/enel_logo.png'
import logoRoche       from '../../assets/roche_logo.png'
import logoBayer       from '../../assets/bayer_logo.png'
import logoNts         from '../../assets/nts_logo.png'
import logoHyundai     from '../../assets/hyundai_logo.png'
import logoCraft       from '../../assets/craft_logo.png'
import logoRio         from '../../assets/rio_logo.png'
import logoGe          from '../../assets/ge_logo.png'
import logoFurnas      from '../../assets/furnas_logo.png'
import logoEngelmig    from '../../assets/engelmig_logo.png'
import logoCemig       from '../../assets/cemig_logo.png'
import logoEngie       from '../../assets/engie_logo.png'
import logoAirLiquide  from '../../assets/air_liquide_logo.png'

const SERVICE_IMGS  = [imgGuindaste, imgRemocao, imgMunck, imgLinhaAmarela, imgLinhadeEixo]
const SERVICE_PATHS = ['/servicos#movimentacao-vertical','/servicos#movimentacao-cargas','/servicos#locacao','/servicos#linha-amarela','/servicos#transporte']

const CLIENTS = [
  { name: 'Petrobras',                      logo: logoPetrobras  },
  { name: 'Vale',                           logo: logoVale       },
  { name: 'Light',                          logo: logoLight      },
  { name: 'Enel',                           logo: logoEnel       },
  { name: 'Roche',                          logo: logoRoche      },
  { name: 'Bayer',                          logo: logoBayer      },
  { name: 'NTS',                            logo: logoNts        },
  { name: 'Hyundai',                        logo: logoHyundai    },
  { name: 'Craft Engenharia & Arquitetura', logo: logoCraft      },
  { name: 'Rio Prefeitura',                 logo: logoRio        },
  { name: 'GE',                             logo: logoGe         },
  { name: 'Furnas',                         logo: logoFurnas     },
  { name: 'Engelmig',                       logo: logoEngelmig   },
  { name: 'Cemig',                          logo: logoCemig      },
  { name: 'Engie',                          logo: logoEngie      },
  { name: 'Air Liquide',                    logo: logoAirLiquide },
]

const WHY_ICONS = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
]

export default function Home() {
  const { t } = useLang()
  const pageRef = useReveal([])
  const counterRef = useCounter()
  const [activeIdx, setActiveIdx] = useState(0)
  const whyLinesRef = useRef(null)

  useEffect(() => {
    const el = whyLinesRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? el.classList.add(styles.linesVisible)
          : el.classList.remove(styles.linesVisible)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActiveIdx(i => (i + 1) % 4), 2000)
    return () => clearInterval(id)
  }, [])

  const STATS = [
    { n: '25',     suf: '+', label: t.home.statLabel1, target: 25    },
    { n: '15.000', suf: '+', label: t.home.statLabel2, target: 15000 },
    { n: '100%',             label: t.home.statLabel3 },
    { n: 'ISO',              sub:   t.home.statSub4 },
  ]

  return (
    <div ref={pageRef}>
      {/* HERO */}
      <section className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src="https://res.cloudinary.com/dlusblicd/video/upload/v1780316251/primetalsvideo__kkmyqy.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroStripe} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroTag}><span className={styles.heroDot} />{t.home.heroTag}</div>
            <h1 className="brand">GRUPO<br /><span className={styles.red}>MAXPESA</span></h1>
            <p>{t.home.heroSub}</p>
            <div className={styles.heroActions}>
              <Button to="/servicos" size="lg">{t.home.heroBtnServices}</Button>
              <Button to="/contato" variant="outlineInv" size="lg">{t.home.heroBtnQuote}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.statsBar} ref={counterRef}>
        <div className="container">
          <div className={styles.statsGrid}>
            {STATS.map((s, i) => (
              <div key={i} className={`${styles.statItem} ${i === activeIdx ? styles.statActive : ''}`}>
                <div className={styles.statN}>
                  {s.target ? <><span className="stat-number" data-target={s.target}>0</span>{s.suf}</> : s.n}
                </div>
                <div className={styles.statL}>{s.label || s.sub}</div>
              </div>
            ))}
            <div className={styles.statsLine} style={{ left: `calc(${activeIdx} * 25% + 20px)` }} />
          </div>
        </div>
      </div>

      {/* SERVIÇOS */}
      <section className={styles.services}>
        <div className="container">
          <SectionHeader eyebrow={t.home.svcEyebrow} title={<>{t.home.svcTitle}</>} subtitle={t.home.svcSub} />
          <div className={styles.servicesGrid}>
            {t.home.services.map((s, i) => (
              <div key={i} className={`${styles.serviceCard} reveal`}>
                <div className={styles.serviceImgWrap}>
                  <img src={SERVICE_IMGS[i]} alt={s.title} />
                </div>
                <div className={styles.serviceBody}>
                  <div className={styles.serviceNum}>{String(i + 1).padStart(2, '0')}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to={SERVICE_PATHS[i]} className={styles.serviceLink}>
                    {t.home.svcMore} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'40px'}}>
            <Button to="/servicos" variant="red" size="lg">
              {t.home.svcBtn}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Button>
          </div>
        </div>
      </section>

      {/* SPLIT 25 ANOS */}
      <div className={styles.split}>
        <div className={styles.splitImg} />
        <div className={styles.splitContent}>
          <div className={styles.splitInner}>
            <Eyebrow>{t.home.splitEyebrow}</Eyebrow>
            <h2>{t.home.splitTitle}</h2>
            <p>{t.home.splitBody1}</p>
            <p>{t.home.splitBody2}</p>
            <div className={styles.splitActions}>
              <Button to="/empresa">{t.home.splitBtnCompany}</Button>
              <Button to="/contato" variant="outlineInv">{t.home.splitBtnContact}</Button>
            </div>
          </div>
        </div>
      </div>

      {/* POR QUE */}
      <section className={styles.why}>
        <div ref={whyLinesRef} className={styles.whyLines} aria-hidden="true">
          <svg viewBox="0 0 1440 520" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path pathLength="1" className={styles.wLine} style={{'--d':'0s','--dur':'1.8s'}} d="M -60 560 C -60 200 820 -60 1480 -30" stroke="#E6282B" strokeWidth="3.8" strokeOpacity="0.40" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.16s','--dur':'1.9s'}} d="M -60 460 C -60 140 740 -60 1480 -55" stroke="#E6282B" strokeWidth="3.2" strokeOpacity="0.28" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.32s','--dur':'2.0s'}} d="M -60 660 C -60 260 900 -60 1480 -10" stroke="#E6282B" strokeWidth="2.5" strokeOpacity="0.20" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.48s','--dur':'2.1s'}} d="M -60 760 C -60 330 980 -60 1480 14" stroke="#E6282B" strokeWidth="1.8" strokeOpacity="0.13" fill="none" />
            <path pathLength="1" className={styles.wLine} style={{'--d':'0.64s','--dur':'2.2s'}} d="M -60 360 C -60 80 660 -60 1480 -68" stroke="#E6282B" strokeWidth="1.4" strokeOpacity="0.09" fill="none" />
          </svg>
        </div>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <SectionHeader center eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} subtitle={t.home.whySub} />
          <div className={styles.whyGrid}>
            {t.home.why.map((w, i) => (
              <div key={i} className={`${styles.whyCard} reveal`}>
                <div className={styles.whyIcon}>{WHY_ICONS[i]}</div>
                <h4>{w.title}</h4><p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <Eyebrow>{t.home.ctaEyebrow}</Eyebrow>
          <h2>{t.home.ctaTitle}</h2>
          <p>{t.home.ctaSub}</p>
          <div className={styles.ctaActions}>
            <Button to="/contato" size="lg">{t.home.ctaBtnQuote}</Button>
            <Button href="https://wa.me/5521972101901" variant="outlineInv" size="lg">{t.home.ctaBtnWpp}</Button>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className={styles.clients}>
        <div className="container">
          <SectionHeader center eyebrow={t.home.clientsEyebrow} title={<>{t.home.clientsTitle}</>} />
          <div className={styles.trackWrap}>
            <div className={styles.track}>
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <div key={i} className={styles.clientCard}>
                  <img src={c.logo} alt={c.name}
                    onError={e => { e.target.replaceWith(Object.assign(document.createElement('span'), {textContent: c.name})) }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
