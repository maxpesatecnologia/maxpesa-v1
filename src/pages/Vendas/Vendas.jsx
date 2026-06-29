import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Vendas.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../context/LanguageContext'
import PageHero from '../../components/PageHero/PageHero'

import imgM2       from '../../assets/caminhao-munck-img2.jpg'
import imgM1       from '../../assets/munck3.png'
import imgG3       from '../../assets/guindaste3.jpeg'
import imgG1       from '../../assets/guindaste_trelicado_img.png'
import imgLA       from '../../assets/escavadeira_img.png'
import imgLA2      from '../../assets/pa_carregadeira_img.png'
import imgG4       from '../../assets/carga_extensiva.png'
import imgEstacao  from '../../assets/cavalo__prancha.png'
import imgEmp      from '../../assets/emp_eletrica.png'
import imgMunckAlt from '../../assets/emp_diesel.png'

const CATEGORY_IDS = ['all', 'guindastes', 'munck', 'linha-amarela', 'especiais', 'empilhadeiras']

const CATEGORY_ICONS = {
  all:           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  guindastes:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v9"/><path d="M7 6l5-3 5 3"/><line x1="12" y1="12" x2="12" y2="18"/><path d="M9 18a3 3 0 0 0 6 0"/><line x1="3" y1="21" x2="21" y2="21"/></svg>,
  munck:         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="9" width="14" height="9" rx="1"/><path d="M15 13h4l3 3v3h-7V13z"/><circle cx="5" cy="20" r="2"/><circle cx="17" cy="20" r="2"/></svg>,
  'linha-amarela':<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20V9l3-5h4l3 5v11"/><path d="M9 4v5"/><path d="M6 12h12"/></svg>,
  especiais:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="10" width="15" height="8" rx="1"/><path d="M16 13h4l2 3v3h-6V13z"/><circle cx="5" cy="20" r="2"/><circle cx="18" cy="20" r="2"/></svg>,
  empilhadeiras: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4h4v16"/><path d="M8 8h8a2 2 0 0 1 2 2v3H8V8z"/><circle cx="6" cy="22" r="2"/><circle cx="16" cy="22" r="2"/></svg>,
}

const SALES = [
  {
    id: 1, category: 'munck',       condition: 'usado',
    code: 'MZMVD08', name: 'Caminhão Munck Masal 45',
    fabricante: 'Masal', year: '2018', location: 'Região Sudeste',
    price: 'R$ 732.000,00', img: imgM2,
  },
  {
    id: 2, category: 'guindastes',  condition: 'usado',
    code: 'MZGRT12', name: 'Guindaste Telescópico SANY',
    fabricante: 'SANY', year: '2016', location: 'Duque de Caxias, RJ',
    price: 'R$ 1.850.000,00', img: imgG3,
  },
  {
    id: 3, category: 'guindastes',  condition: 'usado',
    code: 'MZGTL09', name: 'Guindaste Treliçado SANY',
    fabricante: 'SANY', year: '2015', location: 'Rio de Janeiro, RJ',
    price: 'R$ 2.400.000,00', img: imgG1,
  },
  {
    id: 4, category: 'linha-amarela', condition: 'usado',
    code: 'MZEH15', name: 'Escavadeira Hidráulica 320D',
    fabricante: 'Caterpillar', year: '2019', location: 'Região Sudeste',
    price: 'R$ 495.000,00', img: imgLA,
  },
  {
    id: 5, category: 'linha-amarela', condition: 'usado',
    code: 'MZPC18', name: 'Pá Carregadeira',
    fabricante: 'Caterpillar', year: '2018', location: 'Região Sudeste',
    price: 'R$ 420.000,00', img: imgLA2,
  },
  {
    id: 6, category: 'especiais',   condition: 'usado',
    code: 'MZCP21', name: 'Carreta Prancha Extensiva',
    fabricante: 'Randon', year: '2017', location: 'Duque de Caxias, RJ',
    price: 'R$ 380.000,00', img: imgG4,
  },
  {
    id: 7, category: 'especiais',   condition: 'usado',
    code: 'MZCM22', name: 'Carreta Cama Baixa',
    fabricante: 'Librelato', year: '2020', location: 'Rio de Janeiro, RJ',
    price: 'Consultar', img: imgEstacao,
  },
  {
    id: 8, category: 'munck',       condition: 'novo',
    code: 'MZMVN23', name: 'Caminhão Guindauto Palfinger',
    fabricante: 'Palfinger', year: '2023', location: 'Rio de Janeiro, RJ',
    price: 'Consultar', img: imgM1,
  },
  {
    id: 9, category: 'empilhadeiras', condition: 'usado',
    code: 'MZEP19', name: 'Empilhadeira Elétrica',
    fabricante: 'PALETRANS', year: '2020', location: 'Região Sudeste',
    price: 'R$ 148.000,00', img: imgEmp,
  },
  {
    id: 10, category: 'empilhadeiras', condition: 'usado',
    code: 'MZED21', name: 'Empilhadeira a Diesel',
    fabricante: 'HELI', year: '2021', location: 'Duque de Caxias, RJ',
    price: 'R$ 165.000,00', img: imgMunckAlt,
  },
]

const IconFab = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M2 20h20"/><rect x="4" y="10" width="6" height="10"/><rect x="14" y="4" width="6" height="16"/>
  </svg>
)
const IconYear = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const IconLoc = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconCod = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <line x1="3" y1="6" x2="3" y2="6.01"/><line x1="6" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="3" y2="12.01"/><line x1="6" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="3" y2="18.01"/><line x1="6" y1="18" x2="21" y2="18"/>
  </svg>
)
const IconWpp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const IconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Vendas() {
  const ref = useReveal([])
  const { t } = useLang()
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? SALES : SALES.filter(e => e.category === active)
  const countFor  = id => id === 'all' ? SALES.length : SALES.filter(e => e.category === id).length

  const waUrl = (item) => {
    const msg = encodeURIComponent(
      `Olá! Tenho interesse no equipamento: *${item.name}* (Cód: ${item.code}). Poderia me passar mais informações?`
    )
    return `https://wa.me/5521972101901?text=${msg}`
  }

  return (
    <div ref={ref}>
      <PageHero
        eyebrow={t.vendas.heroEyebrow}
        title={<>{t.vendas.heroTitle[0]}<br/>{t.vendas.heroTitle[1]}</>}
        subtitle={t.vendas.heroSub}
        crumb={t.vendas.heroCrumb}
      />

      <section className={styles.section}>

        {/* ── BARRA DE FILTROS ── */}
        <div className={styles.filterHead}>
          <div className="container">
            <div className={styles.filterScroll}>
              {CATEGORY_IDS.map(id => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`${styles.filterBtn} ${active === id ? styles.active : ''}`}
                >
                  <span className={styles.filterIco}>{CATEGORY_ICONS[id]}</span>
                  <span>{t.vendas.categories[id]}</span>
                </button>
              ))}
            </div>
            <p className={styles.filterMeta}>
              <strong>{filtered.length}</strong>&nbsp;
              {filtered.length === 1 ? t.vendas.filterMetaSingle : t.vendas.filterMetaPlural}
            </p>
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="container">
          <div className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filtered.map(item => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 8 }}
                  transition={{
                    layout:  { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.25 },
                    scale:   { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                    y:       { duration: 0.3,  ease: [0.4, 0, 0.2, 1] },
                  }}
                  className={styles.card}
                >
                  {/* Imagem */}
                  <div className={styles.cardImg}>
                    <img src={item.img} alt={item.name} loading="lazy" />
                    <span className={`${styles.cardCondBadge} ${item.condition === 'novo' ? styles.condNovo : styles.condUsado}`}>
                      {item.condition === 'novo' ? t.vendas.condNovo : t.vendas.condUsado}
                    </span>
                  </div>

                  {/* Cabeçalho: tags + nome + código */}
                  <div className={styles.cardHead}>
                    <div className={styles.cardTags}>
                      <span className={styles.tagVenda}>{t.vendas.tagVenda}</span>
                      <span className={`${styles.tagCond} ${item.condition === 'novo' ? styles.tagCondNovo : ''}`}>
                        {item.condition === 'novo' ? t.vendas.condNovo : t.vendas.condUsado}
                      </span>
                    </div>
                    <p className={styles.cardName}>{item.name}</p>
                    <p className={styles.cardCode}>{t.vendas.fieldCod}: {item.code}</p>
                  </div>

                  {/* Info rows */}
                  <div className={styles.cardInfo}>
                    <div className={styles.cardInfoRow}>
                      <IconFab />
                      <span className={styles.cardInfoLabel}>{t.vendas.fieldFab}:</span>
                      <span className={styles.cardInfoValue}>{item.fabricante}</span>
                    </div>
                    <div className={styles.cardInfoRow}>
                      <IconYear />
                      <span className={styles.cardInfoLabel}>{t.vendas.fieldYear}:</span>
                      <span className={styles.cardInfoValue}>{item.year}</span>
                    </div>
                    <div className={styles.cardInfoRow}>
                      <IconLoc />
                      <span className={styles.cardInfoLabel}>{t.vendas.fieldLocal}:</span>
                      <span className={styles.cardInfoValue}>{item.location}</span>
                    </div>
                  </div>

                  {/* Footer: preço + contato */}
                  <div className={styles.cardFooter}>
                    <a
                      href={waUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnPrice}
                    >
                      <IconWpp />
                      {item.price}
                    </a>
                    <Link to="/contato" className={styles.btnContact}>
                      {t.vendas.btnContact}
                      <IconArrow />
                    </Link>
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </section>
    </div>
  )
}
