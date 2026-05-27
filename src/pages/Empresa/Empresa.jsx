import styles from './Empresa.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useCounter } from '../../hooks/useCounter'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import ImgFrame from '../../components/ImgFrame/ImgFrame'
import Timeline from '../../components/Timeline/Timeline'
import BranchCard from '../../components/BranchCard/BranchCard'
import Button from '../../components/Button/Button'

const TIMELINE = [
  { year:'1998', title:'Fundação do Grupo Maxpesa', desc:'Início das operações no Rio de Janeiro com foco em movimentação vertical e locação de guindastes.' },
  { year:'2003', title:'Expansão da frota e novos segmentos', desc:'Incorporação de caminhões munck e carretas especiais, abrindo o segmento de cargas superdimensionadas.' },
  { year:'2009', title:'Certificação ISO 9001', desc:'Reconhecimento formal do sistema de gestão da qualidade, consolidando processos de classe mundial.' },
  { year:'2014', title:'Grandes projetos de infraestrutura', desc:'Participação em obras de relevância nacional, incluindo projetos petroquímicos e de geração de energia.' },
  { year:'2023', title:'25 anos — novo patamar', desc:'Renovação da frota, investimento em tecnologia de rigging e expansão para novos estados brasileiros.' },
]

const VALUES = [
  { n:'01', title:'Segurança',           desc:'A segurança de colaboradores e clientes é inegociável. Cada operação começa e termina com protocolos rigorosos de NR-11.' },
  { n:'02', title:'Excelência técnica',  desc:'Engenharia proprietária, equipamentos certificados e operadores com formação contínua garantem o padrão mais alto.' },
  { n:'03', title:'Comprometimento',     desc:'Prazo, escopo e qualidade são compromissos assumidos e honrados. Nossa reputação é 25 anos de palavra cumprida.' },
  { n:'04', title:'Inovação',            desc:'Investimento constante em novas tecnologias e metodologias para oferecer sempre a melhor solução.' },
  { n:'05', title:'Relacionamento',      desc:'Parcerias de longo prazo baseadas em confiança, transparência e resultados são nossa maior conquista.' },
  { n:'06', title:'Responsabilidade',    desc:'Valorizamos nossas equipes, respeitamos comunidades e operamos com consciência ambiental.' },
]

const BRANCHES = [
  { city:'Rio de Janeiro', state:'RJ', address:'Av. Brasil, 1000 — Penha', phone:'(21) 3675-1900', sede:true },
  { city:'São Paulo',      state:'SP', address:'Rod. Anhanguera, km 25 — Osasco', phone:'(11) 3000-0000' },
  { city:'Belo Horizonte', state:'MG', address:'Av. Cristiano Machado, 500', phone:'(31) 3000-0000' },
  { city:'Salvador',       state:'BA', address:'Rod. BA-526, km 3 — Camaçari', phone:'(71) 3000-0000' },
  { city:'Manaus',         state:'AM', address:'Distrito Industrial — ZFM', phone:'(92) 3000-0000' },
  { city:'Porto Alegre',   state:'RS', address:'Av. Assis Brasil, 2000', phone:'(51) 3000-0000' },
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
          <SectionHeader center eyebrow="O que nos guia" title="Nossos valores e princípios" subtitle="Os pilares que sustentam cada decisão operacional, comercial e humana do Grupo Maxpesa." />
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.n} className={`${styles.valueCard} reveal`}>
                <div className={styles.vnum}>{v.n}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`} id="localizacao">
        <div className="container">
          <SectionHeader eyebrow="Onde estamos" title="Sede e Filiais" subtitle="Presença estratégica nos principais polos industriais do Brasil." />
          <div className={styles.locationGrid}>
            <div className={`${styles.mapEmbed} reveal`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6246862733396!2d-43.29739122478885!3d-22.898710079224623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997bbe27a34c7f%3A0x37a9cc7bef70b05b!2sAv.%20Brasil%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Grupo Maxpesa" />
            </div>
            <div className={styles.branchesGrid}>
              {BRANCHES.map((b) => <BranchCard key={b.city} {...b} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}