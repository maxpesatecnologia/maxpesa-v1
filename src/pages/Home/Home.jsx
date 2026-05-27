import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useCounter } from '../../hooks/useCounter'
import Eyebrow from '../../components/Eyebrow/Eyebrow'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'

const SERVICES = [
  { num: '01', title: 'Movimentação Horizontal e Vertical', desc: 'Içamento, carga e descarga de materiais superpesados com planejamento avançado de rigging.', to: '/servicos#movimentacao', img: 'https://www.maxpesa.com.br/web/images/slider/1.jpg' },
  { num: '02', title: 'Linha Amarela & Caminhões', desc: 'Frota completa de caminhões munck, carretas especiais e retroescavadeiras de última geração.', to: '/servicos#amarela', img: 'https://www.maxpesa.com.br/web/images/2023/09/06/banner-home-bg-4.jpg' },
  { num: '03', title: 'Remoção Industrial', desc: 'Planejamento e execução de mudanças de layout, desmontagens e posicionamento de máquinas.', to: '/servicos#remocao', img: 'https://www.maxpesa.com.br/web/images/2023/08/26/bg-25-anos.jpg' },
  { num: '04', title: 'Locação & Venda de Equipamentos', desc: 'Contratos flexíveis de locação, frota revisada com garantia e histórico de manutenção.', to: '/servicos#locacao', img: 'https://www.maxpesa.com.br/web/images/slider/1.jpg' },
]

const CLIENTS = ['Petrobras','Vale','Engie Brasil','Constran','Braskem','Siemens','EDP Energias','Odebrecht']

export default function Home() {
  const pageRef = useReveal([])
  const counterRef = useCounter()

  return (
    <div ref={pageRef}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroStripe} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroTag}><span className={styles.heroDot} />Mais de 25 anos movendo o Brasil</div>
            <h1>GRUPO<br /><span className={styles.red}>MAXPESA</span></h1>
            <p>Soluções de alta performance em movimentação de cargas, transporte pesado, remoção industrial e locação de equipamentos.</p>
            <div className={styles.heroActions}>
              <Button to="/servicos" size="lg">Nossos Serviços</Button>
              <Button to="/contato" variant="outlineInv" size="lg">Fazer Orçamento</Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.statsBar} ref={counterRef}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[{n:'25',suf:'+',label:'Anos de tradição',target:25},{n:'15.000',suf:'+',label:'Projetos executados',target:15000},{n:'100%',label:'Compromisso operacional'},{n:'ISO',sub:'9001 Certificado'}].map((s,i)=>(
              <div key={i} className={`${styles.statItem} reveal`}>
                <div className={styles.statN}>
                  {s.target ? <><span className="stat-number" data-target={s.target}>0</span>{s.suf}</> : s.n}
                </div>
                <div className={styles.statL}>{s.label || s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVIÇOS */}
      <section className={styles.services}>
        <div className="container">
          <SectionHeader eyebrow="O que fazemos" title={<>Soluções para qualquer<br/>desafio logístico</>} subtitle="Equipamentos modernos e equipes certificadas para garantir a segurança da sua carga." />
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <div key={s.num} className={`${styles.serviceCard} reveal`}>
                <img src={s.img} alt={s.title} />
                <div className={styles.serviceBody}>
                  <div className={styles.serviceNum}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to={s.to} className={styles.serviceLink}>Ver mais <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'28px'}}><Button to="/servicos" variant="outline">Ver todos os serviços</Button></div>
        </div>
      </section>

      {/* SPLIT 25 ANOS */}
      <div className={styles.split}>
        <div className={styles.splitImg} />
        <div className={styles.splitContent}>
          <div className={styles.splitInner}>
            <Eyebrow>Nossa história</Eyebrow>
            <h2>25 anos construindo<br/>com confiança</h2>
            <p>Fundamos o Grupo Maxpesa com o propósito de transformar a logística pesada no Brasil — com segurança, precisão e comprometimento em cada operação.</p>
            <p>Hoje somos referência nacional, com frota própria moderna, engenharia proprietária e equipes certificadas.</p>
            <div className={styles.splitActions}>
              <Button to="/empresa">Conheça a empresa</Button>
              <Button to="/contato" variant="outlineInv">Falar com a equipe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* POR QUE */}
      <section className={styles.why}>
        <div className="container">
          <SectionHeader center eyebrow="Nossos diferenciais" title="Por que escolher a Maxpesa" subtitle="Comprometidos com segurança, precisão e resultado em cada operação." />
          <div className={styles.whyGrid}>
            {[
              {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title:'Segurança acima de tudo', desc:'Programa NR-11 rigoroso, inspeções periódicas e treinamento contínuo.'},
              {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, title:'Engenharia proprietária', desc:'Plano de rigging e memorial de cálculo entregues antes de cada mobilização.'},
              {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:'Disponibilidade 24/7', desc:'Frota com manutenção preventiva e suporte disponível para emergências.'},
            ].map((w,i)=>(
              <div key={i} className={`${styles.whyCard} reveal`}>
                {w.icon}<h4>{w.title}</h4><p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <Eyebrow>Fale com um especialista</Eyebrow>
          <h2>Pronto para o<br/>seu próximo projeto?</h2>
          <p>Nossa equipe responde com proposta técnica em até 2 horas.</p>
          <div className={styles.ctaActions}>
            <Button to="/contato" size="lg">Solicitar orçamento</Button>
            <Button href="https://wa.me/5521972101901" variant="outlineInv" size="lg">WhatsApp</Button>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className={styles.clients}>
        <div className="container">
          <SectionHeader center eyebrow="Quem confia na Maxpesa" title={<>Parceiros que constroem<br/>o Brasil conosco</>} />
          <div className={styles.clientsRow}>
            {CLIENTS.map((c)=><div key={c} className={styles.chip}>{c}</div>)}
          </div>
        </div>
      </section>
    </div>
  )
}