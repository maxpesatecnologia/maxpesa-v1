import { useEffect } from 'react'
import styles from './Servicos.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../context/LanguageContext'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import imgGuindaste    from '../../assets/guindaste3.jpeg'
import imgRemocao      from '../../assets/remocaoindustrial.png'
import imgMunck        from '../../assets/caminhao-munck-img2.jpg'
import imgEscavadeiras from '../../assets/escavadeiras-logo.png'
import imgTransporte   from '../../assets/caminhao_linha_de_eixo.png'

const SERVICE_STATIC = [
  { id: 'movimentacao-vertical', img: imgGuindaste },
  { id: 'movimentacao-cargas',   img: imgRemocao,      flip: true },
  { id: 'locacao',               img: imgMunck },
  { id: 'linha-amarela',         img: imgEscavadeiras, flip: true },
  { id: 'transporte',            img: imgTransporte },
]

// 5 variações de linhas decorativas por seção
const LINE_SETS = [
  [
    { d: 'M -60 600 C 180 320 820 100 1480 30',  w: 3.8, o: 0.28 },
    { d: 'M -60 480 C 140 240 760 50  1480 5',   w: 3.0, o: 0.18 },
    { d: 'M -60 720 C 260 420 940 170 1480 70',  w: 2.4, o: 0.12 },
    { d: 'M -60 360 C 100 180 700 30  1480 -15', w: 1.8, o: 0.09 },
    { d: 'M -60 240 C 80  110 640 5   1480 -45', w: 1.3, o: 0.06 },
  ],
  [
    { d: 'M 1500 600 C 1260 320 620 100 -40 30',  w: 3.8, o: 0.28 },
    { d: 'M 1500 480 C 1300 240 680 50  -40 5',   w: 3.0, o: 0.18 },
    { d: 'M 1500 720 C 1180 420 500 170 -40 70',  w: 2.4, o: 0.12 },
    { d: 'M 1500 360 C 1340 180 740 30  -40 -15', w: 1.8, o: 0.09 },
    { d: 'M 1500 240 C 1360 110 800 5   -40 -45', w: 1.3, o: 0.06 },
  ],
  [
    { d: 'M -60 0   C 180 280 820 480 1480 570', w: 3.8, o: 0.28 },
    { d: 'M -60 -80 C 140 200 760 430 1480 540', w: 3.0, o: 0.18 },
    { d: 'M -60 80  C 260 360 940 520 1480 610', w: 2.4, o: 0.12 },
    { d: 'M -60 -160 C 100 180 700 400 1480 510',w: 1.8, o: 0.09 },
    { d: 'M -60 160 C 80  320 640 500 1480 580', w: 1.3, o: 0.06 },
  ],
  [
    { d: 'M 1500 0   C 1260 280 620 480 -40 570', w: 3.8, o: 0.28 },
    { d: 'M 1500 -80 C 1300 200 680 430 -40 540', w: 3.0, o: 0.18 },
    { d: 'M 1500 80  C 1180 360 500 520 -40 610', w: 2.4, o: 0.12 },
    { d: 'M 1500 -160 C 1340 180 740 400 -40 510',w: 1.8, o: 0.09 },
    { d: 'M 1500 160 C 1360 320 800 500 -40 580', w: 1.3, o: 0.06 },
  ],
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
  const { t } = useLang()

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
        eyebrow={t.servicos.heroEyebrow}
        title={<>Nossas Soluções<br/>Operacionais</>}
        subtitle={t.servicos.heroSub}
        crumb={t.servicos.heroCrumb}
      />

      {/* Índice sticky */}
      <div className={styles.indexBar}>
        <div className="container">
          <div className={styles.indexList}>
            {t.servicos.services.map((s, i) => (
              <button
                key={SERVICE_STATIC[i].id}
                className={styles.indexItem}
                onClick={() => document.getElementById(SERVICE_STATIC[i].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <span className={styles.indexNum}>{s.num}</span>
                <span className={styles.indexLabel}>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {t.servicos.services.map((s, i) => (
        <section
          key={SERVICE_STATIC[i].id}
          id={SERVICE_STATIC[i].id}
          className={`${styles.section} ${(i + 1) % 2 === 0 ? styles.alt : ''}`}
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
            <div className={`${styles.grid} ${SERVICE_STATIC[i].flip ? styles.flip : ''}`}>

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
                <Button to="/contato">{t.servicos.btn}</Button>
              </div>

              <div className={`${styles.imgWrap} reveal`}>
                <img src={SERVICE_STATIC[i].img} alt={s.title} />
              </div>

            </div>
          </div>
        </section>
      ))}

      <section className={`${styles.section} ${styles.alt}`} style={{ textAlign: 'center' }}>
        <div className="container">
          <SectionHeader
            center
            eyebrow={t.servicos.specialEyebrow}
            title={<>Projetos especiais<br/>são nossa especialidade</>}
            subtitle="Nossa engenharia avalia qualquer demanda e apresenta a solução técnica ideal."
          />
          <Button to="/contato" size="lg">{t.servicos.specialBtn}</Button>
        </div>
      </section>
    </div>
  )
}
