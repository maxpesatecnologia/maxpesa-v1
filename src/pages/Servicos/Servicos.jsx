import styles from './Servicos.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import FeatList from '../../components/FeatList/FeatList'
import Button from '../../components/Button/Button'

const SERVICES = [
  { id:'movimentacao', num:'01', title:'Movimentação Horizontal e Vertical de Cargas', intro:'Içamento, carga e descarga de materiais superpesados com planejamento avançado de rigging e equipamentos certificados.', body:'Nossa equipe realiza estudos de rigging personalizados com memorial de cálculo e RRT assinado por engenheiro responsável.', feats:['Guindastes telescópicos de 25 t a 1.200 t','Operadores certificados NR-11','Estudos de rigging personalizados','Içamentos em espaços confinados','Cobertura RCTR-C inclusa'], img:'https://www.maxpesa.com.br/web/images/slider/1.jpg' },
  { id:'amarela', num:'02', title:'Linha Amarela & Caminhões', intro:'Frota completa de caminhões munck, carretas especiais, retroescavadeiras e pás carregadeiras de última geração.', body:'Todos os veículos passam por inspeção técnica rigorosa antes de cada mobilização. Equipamentos com documentação atualizada.', feats:['Caminhões munck de alta capacidade','Carretas prancha simples e extensivas','Retroescavadeiras e pás carregadeiras','Escavadeiras hidráulicas','Equipamentos para terraplanagem'], img:'https://www.maxpesa.com.br/web/images/2023/09/06/banner-home-bg-4.jpg', flip:true },
  { id:'remocao', num:'03', title:'Movimentação de Cargas', intro:'Planejamento estratégico e execução física de mudanças de layouts fabris, desmontagens e posicionamento de máquinas.', body:'Nossa engenharia elabora cronograma de intervenção garantindo a menor paralisação possível na linha de produção.', feats:['Macacos hidráulicos e tartarugas','Mudanças completas de plantas fabris','Desmontagem e remontagem de máquinas','Intervenções com janelas de parada reduzidas','Atuação em indústrias de alto risco'], img:'https://www.maxpesa.com.br/web/images/2023/08/26/bg-25-anos.jpg' },
  { id:'locacao', num:'04', title:'Locação de Equipamentos', intro:'Contratos flexíveis de locação de curto e longo prazo, além de venda de frota revisada com garantia.', body:'Nossos equipamentos são homologados por engenheiros e revisados a cada novo contrato, com laudos e histórico disponíveis.', feats:['Manutenção preventiva inclusa','Equipamentos testados e homologados','Contratos de curto, médio e longo prazo','Atendimento em escala nacional','Suporte técnico 24/7'], img:'https://www.maxpesa.com.br/web/images/slider/1.jpg', flip:true },
]

export default function Servicos() {
  const ref = useReveal([])
  return (
    <div ref={ref}>
      <PageHero eyebrow="Portfólio completo" title={<>Nossas Soluções<br/>Operacionais</>} subtitle="Equipamentos certificados e equipes especializadas para cada tipo de desafio logístico." crumb="Serviços" />

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`${styles.section} ${i % 2 !== 0 ? styles.alt : ''}`}>
          <div className="container">
            <div className={`${styles.grid} ${s.flip ? styles.flip : ''}`}>
              <div>
                <span className={styles.num}>Serviço {s.num}</span>
                <h2 className={styles.title}>{s.title}</h2>
                <p className={styles.intro}>{s.intro}</p>
                <p className={styles.body}>{s.body}</p>
                <FeatList items={s.feats} />
                <Button to="/contato">Solicitar cotação</Button>
              </div>
              <div className={`${styles.imgWrap} reveal`}>
                <img src={s.img} alt={s.title} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={`${styles.section} ${styles.alt}`} style={{textAlign:'center'}}>
        <div className="container">
          <SectionHeader center eyebrow="Não encontrou o que precisa?" title={<>Projetos especiais<br/>são nossa especialidade</>} subtitle="Nossa engenharia avalia qualquer demanda e apresenta a solução técnica ideal." />
          <Button to="/contato" size="lg">Falar com um especialista</Button>
        </div>
      </section>
    </div>
  )
}