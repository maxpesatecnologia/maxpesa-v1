import { useRef, useEffect } from 'react'
import styles from './Esg.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import EsgItem from '../../components/EsgItem/EsgItem'
import Button from '../../components/Button/Button'

const ESG_ITEMS = [
  { title:'Ambiental', desc:'Modernização da frota para reduzir emissões, descarte correto de resíduos e conscientização ambiental em todas as operações.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg> },
  { title:'Social',    desc:'Treinamentos de segurança, valorização dos colaboradores e programas de desenvolvimento profissional contínuo.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { title:'Governança',desc:'Transparência total, políticas anticorrupção e Canal Confidencial de Denúncias disponível a todos os stakeholders.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
]

const CARDS = [
  { title:'Redução de emissões',  desc:'Renovação da frota com equipamentos de menor consumo e rotas otimizadas.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/></svg> },
  { title:'Zero acidentes graves', desc:'Histórico de zero acidentes graves nos últimos 10 anos de operação.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> },
  { title:'Valorização de talentos',desc:'Plano de carreira, capacitação contínua e qualidade de vida para todos.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
  { title:'Transparência total',   desc:'Código de conduta, canal de denúncias e auditoria externa anual.', icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
]

export default function Esg() {
  const ref = useReveal([])
  const dividerRef = useRef(null)

  useEffect(() => {
    const el = dividerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? el.classList.add(styles.visible)
          : el.classList.remove(styles.visible)
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <PageHero eyebrow="Responsabilidade corporativa" title={<>Compromisso Real<br/>com o ESG</>} subtitle="O futuro do transporte pesado caminha lado a lado com sustentabilidade, ética e responsabilidade social." crumb="ESG" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <div className={`${styles.imgWrap} reveal`}>
              <img src="https://www.maxpesa.com.br/web/images/2023/09/06/banner-home-bg-4.jpg" alt="ESG Maxpesa" />
            </div>
            <div>
              <SectionHeader eyebrow="Nossa visão" title={<>ESG como prática,<br/>não discurso</>} subtitle="Nossa agenda ESG é um programa estruturado com metas, indicadores e prestação de contas para todos os stakeholders." />
              <div>{ESG_ITEMS.map((item) => <EsgItem key={item.title} {...item} />)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Linhas decorativas entre seções */}
      <div ref={dividerRef} className={styles.linesDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path pathLength="1" className={styles.svgLine} style={{'--d':'0s','--dur':'1.8s'}}
            d="M -30 205 C 220 15 490 205 770 95 C 1050 -15 1290 180 1470 48"
            stroke="#E6282B" strokeWidth="3.8" strokeOpacity="0.42" fill="none" />
          <path pathLength="1" className={styles.svgLine} style={{'--d':'0.18s','--dur':'1.9s'}}
            d="M -30 38 C 310 225 555 -8 825 140 C 1095 288 1320 28 1470 168"
            stroke="#E6282B" strokeWidth="3.2" strokeOpacity="0.30" fill="none" />
          <path pathLength="1" className={styles.svgLine} style={{'--d':'0.36s','--dur':'2.0s'}}
            d="M -30 130 C 270 -22 585 235 855 78 C 1125 -79 1350 222 1470 98"
            stroke="#E6282B" strokeWidth="2.6" strokeOpacity="0.24" fill="none" />
          <path pathLength="1" className={styles.svgLine} style={{'--d':'0.54s','--dur':'2.1s'}}
            d="M 95 -18 C 390 215 670 8 995 182 C 1255 330 1400 58 1470 135"
            stroke="#E6282B" strokeWidth="2.0" strokeOpacity="0.18" fill="none" />
          <path pathLength="1" className={styles.svgLine} style={{'--d':'0.72s','--dur':'2.2s'}}
            d="M -30 215 C 165 78 385 225 650 132 C 915 39 1135 202 1470 78"
            stroke="#E6282B" strokeWidth="1.6" strokeOpacity="0.14" fill="none" />
          <path pathLength="1" className={styles.svgLine} style={{'--d':'0.90s','--dur':'2.4s'}}
            d="M 220 -22 C 475 205 740 18 1045 172 C 1240 285 1392 72 1470 48"
            stroke="#E6282B" strokeWidth="1.2" strokeOpacity="0.10" fill="none" />
        </svg>
      </div>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className="container">
          <SectionHeader center eyebrow="Nossas iniciativas" title="Práticas que fazem a diferença" />
          <div className={styles.cardsGrid}>
            {CARDS.map((c) => (
              <div key={c.title} className={`${styles.card} reveal`}>
                <div className={styles.cardIco}>{c.icon}</div>
                <h4>{c.title}</h4><p>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.banner}>
            <div>
              <div className={styles.bannerTag}>Canal Confidencial de Denúncias</div>
              <h4>Relate uma situação de forma segura</h4>
              <p>Canal totalmente confidencial para colaboradores, clientes e fornecedores.</p>
            </div>
            <Button href="https://canalconfidencial.com.br/maxpesa/" variant="outlineInv">Acessar canal</Button>
          </div>
        </div>
      </section>
    </div>
  )
}