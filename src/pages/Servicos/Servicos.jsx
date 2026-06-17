import { useEffect } from 'react'
import styles from './Servicos.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import imgGuindaste    from '../../assets/guindaste3.jpeg'
import imgRemocao      from '../../assets/remocaoindustrial.png'
import imgMunck        from '../../assets/caminhao-munck-img2.jpg'
import imgEscavadeiras from '../../assets/escavadeiras-logo.png'
import imgTransporte   from '../../assets/caminhao_linha_de_eixo.png'

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
    img: imgGuindaste,
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
    img: imgRemocao,
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
    img: imgMunck,
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
    img: imgEscavadeiras,
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
    img: imgTransporte,
  },
]

// 5 variações: direção, altura e curvatura diferentes por seção
const LINE_SETS = [
  // 0 — baixo-esquerda → cima-direita
  [
    { d: 'M -60 600 C 180 320 820 100 1480 30',  w: 3.8, o: 0.28 },
    { d: 'M -60 480 C 140 240 760 50  1480 5',   w: 3.0, o: 0.18 },
    { d: 'M -60 720 C 260 420 940 170 1480 70',  w: 2.4, o: 0.12 },
    { d: 'M -60 360 C 100 180 700 30  1480 -15', w: 1.8, o: 0.09 },
    { d: 'M -60 240 C 80  110 640 5   1480 -45', w: 1.3, o: 0.06 },
  ],
  // 1 — baixo-direita → cima-esquerda
  [
    { d: 'M 1500 600 C 1260 320 620 100 -40 30',  w: 3.8, o: 0.28 },
    { d: 'M 1500 480 C 1300 240 680 50  -40 5',   w: 3.0, o: 0.18 },
    { d: 'M 1500 720 C 1180 420 500 170 -40 70',  w: 2.4, o: 0.12 },
    { d: 'M 1500 360 C 1340 180 740 30  -40 -15', w: 1.8, o: 0.09 },
    { d: 'M 1500 240 C 1360 110 800 5   -40 -45', w: 1.3, o: 0.06 },
  ],
  // 2 — cima-esquerda → baixo-direita
  [
    { d: 'M -60 0   C 180 280 820 480 1480 570', w: 3.8, o: 0.28 },
    { d: 'M -60 -80 C 140 200 760 430 1480 540', w: 3.0, o: 0.18 },
    { d: 'M -60 80  C 260 360 940 520 1480 610', w: 2.4, o: 0.12 },
    { d: 'M -60 -160 C 100 180 700 400 1480 510',w: 1.8, o: 0.09 },
    { d: 'M -60 160 C 80  320 640 500 1480 580', w: 1.3, o: 0.06 },
  ],
  // 3 — cima-direita → baixo-esquerda
  [
    { d: 'M 1500 0   C 1260 280 620 480 -40 570', w: 3.8, o: 0.28 },
    { d: 'M 1500 -80 C 1300 200 680 430 -40 540', w: 3.0, o: 0.18 },
    { d: 'M 1500 80  C 1180 360 500 520 -40 610', w: 2.4, o: 0.12 },
    { d: 'M 1500 -160 C 1340 180 740 400 -40 510',w: 1.8, o: 0.09 },
    { d: 'M 1500 160 C 1360 320 800 500 -40 580', w: 1.3, o: 0.06 },
  ],
  // 4 — ondulado horizontal pelo meio
  [
    { d: 'M -60 300 C 360 80  900 520 1480 220', w: 3.8, o: 0.28 },
    { d: 'M -60 200 C 320 -20 880 440 1480 160', w: 3.0, o: 0.18 },
    { d: 'M -60 400 C 400 180 960 580 1480 280', w: 2.4, o: 0.12 },
    { d: 'M -60 150 C 280 -60 840 380 1480 110', w: 1.8, o: 0.09 },
    { d: 'M -60 450 C 440 250 1000 620 1480 340',w: 1.3, o: 0.06 },
  ],
]

const DELAYS = [
  { d: '0s',    dur: '1.8s', pd: '0s',   pdur: '4.0s' },
  { d: '0.18s', dur: '1.9s', pd: '0.8s', pdur: '4.5s' },
  { d: '0.36s', dur: '2.0s', pd: '1.5s', pdur: '3.8s' },
  { d: '0.54s', dur: '2.1s', pd: '0.4s', pdur: '5.0s' },
  { d: '0.72s', dur: '2.2s', pd: '1.2s', pdur: '4.2s' },
]

export default function Servicos() {
  const ref = useReveal([])

  useEffect(() => {
    const els = document.querySelectorAll('[data-svc-lines]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.isIntersecting
            ? entry.target.classList.add(styles.svcLinesVisible)
            : entry.target.classList.remove(styles.svcLinesVisible)
        })
      },
      { threshold: 0.05 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
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
              <button
                key={s.id}
                className={styles.indexItem}
                onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <span className={styles.indexNum}>{s.num}</span>
                <span className={styles.indexLabel}>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`${styles.section} ${parseInt(s.num) % 2 === 0 ? styles.alt : ''}`}
        >
          <div data-svc-lines className={styles.svcLines} aria-hidden="true">
            <svg viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {LINE_SETS[i].map((p, j) => (
                <path
                  key={j}
                  pathLength="1"
                  className={styles.sLine}
                  style={{'--d': DELAYS[j].d, '--dur': DELAYS[j].dur, '--pulse-d': DELAYS[j].pd, '--pulse-dur': DELAYS[j].pdur}}
                  d={p.d}
                  stroke="#E6282B"
                  strokeWidth={p.w}
                  strokeOpacity={p.o}
                  fill="none"
                />
              ))}
            </svg>
          </div>
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
