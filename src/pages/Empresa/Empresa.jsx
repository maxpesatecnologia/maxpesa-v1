import { useRef, useEffect } from 'react'
import styles from './Empresa.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useCounter } from '../../hooks/useCounter'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import ImgFrame from '../../components/ImgFrame/ImgFrame'
import Timeline from '../../components/Timeline/Timeline'
import Button from '../../components/Button/Button'
import imgEmpresa from '../../assets/empresa_img.png'

const TIMELINE = [
  { year:'1998', title:'Fundação do Grupo Maxpesa', desc:'Início das operações no Rio de Janeiro com foco em movimentação vertical e locação de guindastes.' },
  { year:'2003', title:'Expansão da frota e novos segmentos', desc:'Incorporação de caminhões-guindauto e carretas especiais, abrindo o segmento de cargas superdimensionadas.' },
  { year:'2009', title:'Certificação ISO 9001', desc:'Reconhecimento formal do sistema de gestão da qualidade, consolidando processos de classe mundial.' },
  { year:'2014', title:'Grandes projetos de infraestrutura', desc:'Participação em obras de relevância nacional, incluindo projetos petroquímicos e de geração de energia.' },
  { year:'2023', title:'25 anos — novo patamar', desc:'Renovação da frota, investimento em tecnologia de rigging e expansão para novos estados brasileiros.' },
]

const MVV = [
  {
    label: 'Missão',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    items: [
      'Produtos e serviços de alta qualidade',
      'Ambiente de trabalho positivo e colaborativo',
      'Impacto positivo em clientes e colaboradores',
      'Responsabilidade com a comunidade',
    ],
  },
  {
    label: 'Visão',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
    items: [
      'Empresa de referência no segmento',
      'Soluções inovadoras e tecnológicas',
      'Princípios éticos em todas as decisões',
      'Responsabilidade ambiental e crescimento sustentável',
    ],
  },
  {
    label: 'Valores',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    items: [
      'Ética e honestidade',
      'Integridade e disciplina',
      'Transparência',
      'Responsabilidade social',
      'Obsessão pela segurança',
    ],
  },
]

const VALUES = [
  { n:'01', title:'Segurança',           desc:'A segurança de colaboradores e clientes é inegociável. Cada operação começa e termina com protocolos rigorosos de NR-11.' },
  { n:'02', title:'Excelência técnica',  desc:'Engenharia proprietária, equipamentos certificados e operadores com formação contínua garantem o padrão mais alto.' },
  { n:'03', title:'Comprometimento',     desc:'Prazo, escopo e qualidade são compromissos assumidos e honrados. Nossa reputação é 25 anos de palavra cumprida.' },
  { n:'04', title:'Inovação',            desc:'Investimento constante em novas tecnologias e metodologias para oferecer sempre a melhor solução.' },
  { n:'05', title:'Relacionamento',      desc:'Parcerias de longo prazo baseadas em confiança, transparência e resultados são nossa maior conquista.' },
  { n:'06', title:'Responsabilidade',    desc:'Valorizamos nossas equipes, respeitamos comunidades e operamos com consciência ambiental.' },
]

const BADGE = {
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  text: 'Certificação ', strong: 'ISO 9001',
}

export default function Empresa() {
  const ref = useReveal([])
  const cRef = useCounter()
  const mvvLinesRef = useRef(null)
  const opLinesRef  = useRef(null)

  useEffect(() => {
    const el = mvvLinesRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? el.classList.add(styles.mlVisible)
          : el.classList.remove(styles.mlVisible)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = opLinesRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? el.classList.add(styles.opVisible)
          : el.classList.remove(styles.opVisible)
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref}>
      <PageHero eyebrow="Nossa História" title={<>25 Anos de Força,<br/>Tradição e Confiança</>} subtitle="Fundados para transformar a logística pesada no Brasil — com segurança, precisão e comprometimento." crumb="A Empresa" />

      <section className={styles.about}>
        <div className="container">
          <div className={styles.grid2}>
            <div ref={cRef}>
              <div className="reveal"><SectionHeader eyebrow="Quem somos" title={<>Engenharia de precisão<br/>para grandes desafios</>} /></div>
              <p className={`${styles.lead} reveal`}>O Grupo Maxpesa nasceu com o propósito de transformar a logística pesada no Brasil — entregando soluções de engenharia de rigging com segurança e precisão.</p>
              <p className={`${styles.body} reveal`}>Atuamos de forma estratégica com soluções integradas para indústrias, comércio e infraestrutura. Nosso compromisso inegociável com a segurança nos permite enfrentar os maiores desafios logísticos com precisão milimétrica.</p>
              <div className={`${styles.statsRow} reveal`}>
                {[{t:25,suf:'+',l:'Anos de tradição'},{t:15000,suf:'+',l:'Projetos executados'},{v:'100%',l:'Compromisso'}].map((s,i)=>(
                  <div key={i} className={styles.statCell}>
                    <div className={styles.statN}>{s.t ? <><span className="stat-number" data-target={s.t}>0</span>{s.suf}</> : s.v}</div>
                    <div className={styles.statL}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal"><ImgFrame src={imgEmpresa} alt="25 Anos Maxpesa" className={styles.empImg} badge={BADGE} /></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className="container">
          <div className={styles.grid2} style={{alignItems:'flex-start',gap:'80px'}}>
            <div>
              <div className="reveal"><SectionHeader eyebrow="Nossa trajetória" title={<>Uma história construída<br/>com trabalho e confiança</>} subtitle="Cada marco representa um novo padrão alcançado na logística pesada brasileira." /></div>
              <div className="reveal"><Button to="/contato">Fale com nossa equipe</Button></div>
            </div>
            <Timeline items={TIMELINE} />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.mvvSec}`}>
        <div ref={mvvLinesRef} className={styles.mvvLines} aria-hidden="true">
          <svg viewBox="0 0 1440 520" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path pathLength="1" className={styles.mLine} style={{'--d':'0s','--dur':'1.8s','--pulse-d':'0s','--pulse-dur':'3.6s'}}
              d="M -60 560 C -60 200 820 -60 1480 -30"
              stroke="#E6282B" strokeWidth="3.8" strokeOpacity="0.40" fill="none" />
            <path pathLength="1" className={styles.mLine} style={{'--d':'0.16s','--dur':'1.9s','--pulse-d':'0.7s','--pulse-dur':'4.2s'}}
              d="M -60 460 C -60 140 740 -60 1480 -55"
              stroke="#E6282B" strokeWidth="3.2" strokeOpacity="0.28" fill="none" />
            <path pathLength="1" className={styles.mLine} style={{'--d':'0.32s','--dur':'2.0s','--pulse-d':'1.4s','--pulse-dur':'3.9s'}}
              d="M -60 660 C -60 260 900 -60 1480 -10"
              stroke="#E6282B" strokeWidth="2.5" strokeOpacity="0.20" fill="none" />
            <path pathLength="1" className={styles.mLine} style={{'--d':'0.48s','--dur':'2.1s','--pulse-d':'0.4s','--pulse-dur':'4.6s'}}
              d="M -60 760 C -60 330 980 -60 1480 14"
              stroke="#E6282B" strokeWidth="1.8" strokeOpacity="0.13" fill="none" />
            <path pathLength="1" className={styles.mLine} style={{'--d':'0.64s','--dur':'2.2s','--pulse-d':'1.1s','--pulse-dur':'5.0s'}}
              d="M -60 360 C -60 80 660 -60 1480 -68"
              stroke="#E6282B" strokeWidth="1.4" strokeOpacity="0.09" fill="none" />
          </svg>
        </div>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <div className="reveal"><SectionHeader center eyebrow="Nossa essência" title="Missão, Visão e Valores" subtitle="Os princípios fundamentais que orientam cada decisão e definem quem somos." /></div>
          <div className={styles.mvvGrid}>
            {MVV.map((item) => (
              <div key={item.label} className={`${styles.mvvCard} reveal`}>
                <div className={styles.mvvIcon}>{item.icon}</div>
                <h4 className={styles.mvvLabel}>{item.label}</h4>
                <ul className={styles.mvvList}>
                  {item.items.map((it) => (
                    <li key={it} className={styles.mvvItem}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt} ${styles.opSec}`}>
        <div ref={opLinesRef} className={styles.opLines} aria-hidden="true">
          <svg viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path pathLength="1" className={styles.opLine} style={{'--d':'0s','--dur':'2.0s','--pulse-d':'0s','--pulse-dur':'4.2s'}}
              d="M 1500 55 C 1300 210 1100 450 780 592"
              stroke="#E6282B" strokeWidth="3.8" strokeOpacity="0.36" fill="none" />
            <path pathLength="1" className={styles.opLine} style={{'--d':'0.18s','--dur':'2.1s','--pulse-d':'0.8s','--pulse-dur':'3.8s'}}
              d="M 1500 155 C 1290 330 1040 510 470 597"
              stroke="#E6282B" strokeWidth="3.0" strokeOpacity="0.25" fill="none" />
            <path pathLength="1" className={styles.opLine} style={{'--d':'0.36s','--dur':'2.2s','--pulse-d':'1.5s','--pulse-dur':'4.6s'}}
              d="M 1500 275 C 1260 400 990 540 170 598"
              stroke="#E6282B" strokeWidth="2.4" strokeOpacity="0.18" fill="none" />
            <path pathLength="1" className={styles.opLine} style={{'--d':'0.54s','--dur':'2.3s','--pulse-d':'0.4s','--pulse-dur':'3.5s'}}
              d="M 1500 390 C 1350 468 1130 558 570 600"
              stroke="#E6282B" strokeWidth="1.8" strokeOpacity="0.13" fill="none" />
            <path pathLength="1" className={styles.opLine} style={{'--d':'0.72s','--dur':'2.4s','--pulse-d':'1.1s','--pulse-dur':'5.0s'}}
              d="M 1500 505 C 1380 542 1195 578 840 600"
              stroke="#E6282B" strokeWidth="1.3" strokeOpacity="0.09" fill="none" />
          </svg>
        </div>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <div className="reveal"><SectionHeader center eyebrow="Como operamos" title="Pilares operacionais" subtitle="Os alicerces práticos que orientam cada operação, equipe e entrega do Grupo Maxpesa." /></div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.n} className={`${styles.valueCard} reveal`}>
                <span className={styles.vnum}>{v.n}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="localizacao">
        <div className="container">
          <div className="reveal"><SectionHeader eyebrow="Onde estamos" title="Nossa sede" subtitle="Localizada em Duque de Caxias — RJ, a sede do Grupo Maxpesa serve todo o território nacional." /></div>
          <div className={`${styles.hqCard} reveal`}>
            <div className={styles.hqMap}>
              <iframe
                src="https://maps.google.com/maps?q=Grupo+Maxpesa,+Duque+de+Caxias,+RJ,+Brasil&output=embed&z=16"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sede Grupo Maxpesa"
              />
            </div>
            <div className={styles.hqSide}>
              <div className={styles.hqBadge}>Sede</div>
              <h3 className={styles.hqName}>Grupo Maxpesa</h3>
              <p className={styles.hqAddress}>
                Av. Primavera, 156 — Jardim Primavera<br />
                Duque de Caxias — RJ, 25215-255
              </p>
              <div className={styles.hqContacts}>
                <a href="tel:08006297372" className={styles.hqContact}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.143.536.3 1.065.47 1.588a12.84 12.84 0 0 0 .23 1.222 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  0800 629 7372
                </a>
                <a href="tel:+552136751900" className={styles.hqContact}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.143.536.3 1.065.47 1.588a12.84 12.84 0 0 0 .23 1.222 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  (21) 3675-1900
                </a>
                <a href="mailto:comercial@maxpesa.com.br" className={styles.hqContact}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  comercial@maxpesa.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
