import styles from './Servicos.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'

const SERVICES = [
  {
    id: 'movimentacao-vertical',
    num: '01',
    title: 'Movimentação Horizontal e Vertical de Cargas',
    intro: 'Içamento, posicionamento e transferência de equipamentos e estruturas pesadas com rigging de alta complexidade.',
    body: 'Nossa equipe elabora estudos de rigging personalizados com memorial de cálculo e RRT assinado por engenheiro responsável — garantindo segurança absoluta em cada operação.',
    feats: [
      'Guindastes telescópicos de 25 t a 1.200 t',
      'Operadores certificados NR-11',
      'Memorial de cálculo e RRT assinado',
      'Içamentos em espaços confinados',
      'Cobertura RCTR-C inclusa',
    ],
    img: '/src/assets/guindaste3.jpeg',
  },
  {
    id: 'movimentacao-cargas',
    num: '02',
    title: 'Movimentação de Cargas',
    intro: 'Planejamento e execução de mudanças de layout fabril, posicionamento de máquinas e desmontagem de equipamentos industriais.',
    body: 'Nossa engenharia elabora cronograma de intervenção garantindo a menor paralisação possível na linha de produção.',
    feats: [
      'Macacos hidráulicos e tartarugas',
      'Mudanças completas de plantas fabris',
      'Desmontagem e remontagem de máquinas',
      'Intervenções com janelas de parada reduzidas',
      'Atuação em indústrias de alto risco',
    ],
    img: '/src/assets/remocaoindustrial.png',
    flip: true,
  },
  {
    id: 'locacao',
    num: '03',
    title: 'Locação de Equipamentos',
    intro: 'Contratos flexíveis de curto e longo prazo com frota revisada, documentada e homologada por engenheiros.',
    body: 'Cada equipamento é inspecionado antes da mobilização e entregue com laudos e histórico de manutenção atualizados.',
    feats: [
      'Manutenção preventiva inclusa',
      'Laudos e histórico disponíveis',
      'Contratos de curto, médio e longo prazo',
      'Atendimento em escala nacional',
      'Suporte técnico 24/7',
    ],
    img: '/src/assets/caminhao-munck-img2.jpg',
  },
  {
    id: 'linha-amarela',
    num: '04',
    title: 'Linha Amarela (Retroescavadeira)',
    intro: 'Retroescavadeiras, pás carregadeiras e escavadeiras hidráulicas para terraplanagem, escavação e movimentação de solo.',
    body: 'Equipamentos em pleno estado operacional, com toda a documentação e certificações vigentes para mobilização imediata.',
    feats: [
      'Retroescavadeiras de diversas capacidades',
      'Pás carregadeiras articuladas',
      'Escavadeiras hidráulicas',
      'Operadores certificados e experientes',
      'Documentação e revisões em dia',
    ],
    img: '/src/assets/escavadeiras-logo.png',
    flip: true,
  },
  {
    id: 'transporte',
    num: '05',
    title: 'Transporte de Cargas Especiais',
    intro: 'Transporte rodoviário de cargas superdimensionadas e pesadas com carretas especiais, escolta e licenças vigentes.',
    body: 'Rotas planejadas por engenheiro especializado, com apoio de escolta credenciada e toda a documentação exigida pelos órgãos reguladores.',
    feats: [
      'Carretas prancha simples e extensivas',
      'Caminhão-guindauto de alta capacidade',
      'Licenças DNIT/DER vigentes',
      'Escolta credenciada',
      'Planejamento de rota por engenheiro',
    ],
    img: '/src/assets/transporte-especial.png',
  },
]

export default function Servicos() {
  const ref = useReveal([])
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Portfólio completo"
        title={<>Nossas Soluções<br/>Operacionais</>}
        subtitle="Equipamentos certificados e equipes especializadas para cada tipo de desafio logístico."
        crumb="Serviços"
      />

      {/* Índice sticky */}
      <div className={styles.indexBar}>
        <div className="container">
          <div className={styles.indexList}>
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={styles.indexItem}>
                <span className={styles.indexNum}>{s.num}</span>
                <span className={styles.indexLabel}>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {SERVICES.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={`${styles.section} ${parseInt(s.num) % 2 === 0 ? styles.alt : ''}`}
        >
          <div className="container">
            <div className={`${styles.grid} ${s.flip ? styles.flip : ''}`}>

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <span className={styles.bigNum}>{s.num}</span>
                  <h2 className={styles.title}>{s.title}</h2>
                </div>
                <p className={styles.intro}>{s.intro}</p>
                <p className={styles.body}>{s.body}</p>
                <ul className={styles.feats}>
                  {s.feats.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Button to="/contato">Solicitar cotação</Button>
              </div>

              <div className={`${styles.imgWrap} reveal`}>
                <img src={s.img} alt={s.title} />
              </div>

            </div>
          </div>
        </section>
      ))}

      <section className={`${styles.section} ${styles.alt}`} style={{ textAlign: 'center' }}>
        <div className="container">
          <SectionHeader
            center
            eyebrow="Não encontrou o que precisa?"
            title={<>Projetos especiais<br/>são nossa especialidade</>}
            subtitle="Nossa engenharia avalia qualquer demanda e apresenta a solução técnica ideal."
          />
          <Button to="/contato" size="lg">Falar com um especialista</Button>
        </div>
      </section>
    </div>
  )
}
