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