import styles from './Empresa.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useCounter } from '../../hooks/useCounter'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import ImgFrame from '../../components/ImgFrame/ImgFrame'
import Timeline from '../../components/Timeline/Timeline'
import Button from '../../components/Button/Button'

const TIMELINE = [
  { year:'1998', title:'Fundação do Grupo Maxpesa', desc:'Início das operações no Rio de Janeiro com foco em movimentação vertical e locação de guindastes.' },
  { year:'2003', title:'Expansão da frota e novos segmentos', desc:'Incorporação de caminhões munck e carretas especiais, abrindo o segmento de cargas superdimensionadas.' },
  { year:'2009', title:'Certificação ISO 9001', desc:'Reconhecimento formal do sistema de gestão da qualidade, consolidando processos de classe mundial.' },
  { year:'2014', title:'Grandes projetos de infraestrutura', desc:'Participação em obras de relevância nacional, incluindo projetos petroquímicos e de geração de energia.' },
  { year:'2023', title:'25 anos — novo patamar', desc:'Renovação da frota, investimento em tecnologia de rigging e expansão para novos estados brasileiros.' },
]

const MVV = [
  {
    label: 'Missão',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    text: 'Fornecer aos nossos clientes produtos e serviços de alta qualidade, mantendo um ambiente de trabalho positivo e colaborativo — medindo nosso sucesso pelo impacto positivo gerado em clientes, colaboradores e comunidade.',
  },
  {
    label: 'Visão',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
    text: 'Ser uma empresa de referência e estar entre as maiores em nosso segmento, entregando soluções inovadoras com princípios éticos, responsabilidade ambiental e crescimento sustentável.',
  },
  {
    label: 'Valores',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    text: 'Ética, honestidade, integridade, disciplina, transparência, responsabilidade social e obsessão pela segurança — princípios não negociáveis que guiam cada decisão e formam a base de nossa cultura.',
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
  return (
    <div ref={ref}>
      <PageHero eyebrow="Nossa História" title={<>25 Anos de Força,<br/>Tradição e Confiança</>} subtitle="Fundados para transformar a logística pesada no Brasil — com segurança, precisão e comprometimento." crumb="A Empresa" />

      <section className={styles.about}>
        <div className="container">
          <div className={styles.grid2}>
            <div ref={cRef}>
              <SectionHeader eyebrow="Quem somos" title={<>Engenharia de precisão<br/>para grandes desafios</>} />
              <p className={styles.lead}>O Grupo Maxpesa nasceu com o propósito de transformar a logística pesada no Brasil — entregando soluções de engenharia de rigging com segurança e precisão.</p>
              <p className={styles.body}>Atuamos de forma estratégica com soluções integradas para indústrias, comércio e infraestrutura. Nosso compromisso inegociável com a segurança nos permite enfrentar os maiores desafios logísticos com precisão milimétrica.</p>
              <div className={styles.statsRow}>
                {[{t:25,suf:'+',l:'Anos de tradição'},{t:15000,suf:'+',l:'Projetos executados'},{v:'100%',l:'Compromisso'}].map((s,i)=>(
                  <div key={i} className={styles.statCell}>
                    <div className={styles.statN}>{s.t ? <><span className="stat-number" data-target={s.t}>0</span>{s.suf}</> : s.v}</div>
                    <div className={styles.statL}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <ImgFrame src="https://www.maxpesa.com.br/web/images/2023/08/26/bg-25-anos.jpg" alt="25 Anos Maxpesa" badge={BADGE} />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className="container">
          <div className={styles.grid2} style={{alignItems:'flex-start',gap:'80px'}}>
            <div>
              <SectionHeader eyebrow="Nossa trajetória" title={<>Uma história construída<br/>com trabalho e confiança</>} subtitle="Cada marco representa um novo padrão alcançado na logística pesada brasileira." />
              <Button to="/contato">Fale com nossa equipe</Button>
            </div>
            <Timeline items={TIMELINE} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeader center eyebrow="Nossa essência" title="Missão, Visão e Valores" subtitle="Os princípios fundamentais que orientam cada decisão e definem quem somos." />
          <div className={styles.mvvGrid}>
            {MVV.map((item) => (
              <div key={item.label} className={`${styles.mvvCard} reveal`}>
                <div className={styles.mvvIcon}>{item.icon}</div>
                <h4 className={styles.mvvLabel}>{item.label}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className="container">
          <SectionHeader center eyebrow="Como operamos" title="Pilares operacionais" subtitle="Os alicerces práticos que orientam cada operação, equipe e entrega do Grupo Maxpesa." />
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
          <SectionHeader eyebrow="Onde estamos" title="Nossa sede" subtitle="Localizada em Duque de Caxias — RJ, a sede do Grupo Maxpesa serve todo o território nacional." />
          <div className={styles.locationGrid}>
            <div className={`${styles.mapEmbed} reveal`}>
              <iframe
                src="https://maps.google.com/maps?q=Grupo+Maxpesa,+Duque+de+Caxias,+RJ,+Brasil&output=embed&z=16"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sede Grupo Maxpesa"
              />
            </div>
            <div className={`${styles.hqInfo} reveal`}>
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
