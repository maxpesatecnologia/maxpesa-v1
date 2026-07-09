import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Frota.module.css'
import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../context/LanguageContext'
import PageHero from '../../components/PageHero/PageHero'

import imgG1       from '../../assets/guindaste_trelicado_img.png'
import imgG2       from '../../assets/guindaste1.jpeg'
import imgG3       from '../../assets/guindaste3.jpeg'
import imgG4       from '../../assets/carga_extensiva.png'
import imgG5       from '../../assets/cavalo_bau.png'
import imgM1       from '../../assets/munck3.png'
import imgM2       from '../../assets/caminhao-munck-img2.jpg'
import imgMunckAlt from '../../assets/emp_diesel.png'
import imgLA       from '../../assets/escavadeira_img.png'
import imgLA2      from '../../assets/pa_carregadeira_img.png'
import imgPlatA    from '../../assets/plataforma_articulada.png'
import imgPlatT    from '../../assets/plataforma_tesoura.png'
import imgEixo     from '../../assets/carga_seca.png'
import imgContainer from '../../assets/bau_sider.png'
import imgEstacao  from '../../assets/cavalo__prancha.png'
import imgRemocao2 from '../../assets/caminhao_linha_de_eixo.png'
import imgEmp      from '../../assets/emp_eletrica.png'

const CATEGORY_IDS = ['all','guindastes','munck','empilhadeiras','linha-amarela','plataforma','especiais']

const CATEGORY_ICONS = {
  all:           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  guindastes:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v9"/><path d="M7 6l5-3 5 3"/><line x1="12" y1="12" x2="12" y2="18"/><path d="M9 18a3 3 0 0 0 6 0"/><line x1="3" y1="21" x2="21" y2="21"/></svg>,
  munck:         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="9" width="14" height="9" rx="1"/><path d="M15 13h4l3 3v3h-7V13z"/><circle cx="5" cy="20" r="2"/><circle cx="17" cy="20" r="2"/></svg>,
  empilhadeiras: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4h4v16"/><path d="M8 8h8a2 2 0 0 1 2 2v3H8V8z"/><circle cx="6" cy="22" r="2"/><circle cx="16" cy="22" r="2"/></svg>,
  'linha-amarela':<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20V9l3-5h4l3 5v11"/><path d="M9 4v5"/><path d="M6 12h12"/></svg>,
  plataforma:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V8"/><path d="M6 14l6-6 6 6"/><path d="M3 20h18"/></svg>,
  especiais:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="10" width="15" height="8" rx="1"/><path d="M16 13h4l2 3v3h-6V13z"/><circle cx="5" cy="20" r="2"/><circle cx="18" cy="20" r="2"/></svg>,
}

const FLEET = [
  { id: 2,  category: 'guindastes',    model: 'SANY SCC2500A',                  badge: '200TON',  img: imgG1,        specs: [{ l: 'Capacidade', v: '200 ton' }, { l: 'Pluma',       v: '20 m'    }, { l: 'Rotação',  v: '360°'      }] },
  { id: 3,  category: 'guindastes',    model: 'SANY SAC2500S',                  badge: '500TON',  img: imgG3,        specs: [{ l: 'Capacidade', v: 'Até 500 ton' }, { l: 'Pluma',       v: '40 m'    }, { l: 'Rotação',    v: '360°'         }] },
  { id: 6,  category: 'munck',         model: 'MERCEDES-BENZ ATEGO - 2644',     badge: '62TON',   img: imgM2,        specs: [{ l: 'Capacidade', v: 'Até 62 ton'  }, { l: 'Alcance',     v: '17.5 m'    }, { l: 'Acionam.', v: 'Hidráulico' }] },
  { id: 7,  category: 'linha-amarela', model: 'Caterpillar 420F',               badge: '35TON',   img: imgLA,        specs: [{ l: 'Capacidade', v: '35 t'}, { l: 'Caçamba',   v: '2,90 m³'   }, { l: 'Tração',   v: '4x4'       }] },
  { id: 8,  category: 'linha-amarela', model: 'Caterpillar 320D',               badge: '20TON',   img: imgLA2,       specs: [{ l: 'Peso op.',   v: '20 t'   }, { l: 'Profundid.', v: '9.8 m'   }, { l: 'Balde',    v: '0.95 m³'  }] },
  { id: 9,  category: 'plataforma',    model: 'JLG 600AJ',                      badge: '18M',   img: imgPlatA,     specs: [{ l: 'Alt. trab.', v: '18 m'  }, { l: 'Capacidade', v: '227 kg'  }, { l: 'Tração',   v: '4WD'       }] },
  { id: 10, category: 'plataforma',    model: 'Genie GS-4047',                  badge: '14M',   img: imgPlatT,     specs: [{ l: 'Alt. trab.', v: '14 m'  }, { l: 'Capacidade', v: '450 kg'  }, { l: 'Plataf.',  v: '1.83 m'   }] },
  { id: 11, category: 'especiais',     model: 'Cavalo Mecânico',              badge: '45TON',   img: imgEixo,      specs: [{ l: 'Capacidade', v: '45 ton'  }, { l: 'Comprimento', v: '14,5 m'   }, { l: 'Licença',  v: 'DNIT'      }] },
  { id: 12, category: 'especiais',     model: 'Cavalo Mecânico',            badge: '150TON',  img: imgG4,        specs: [{ l: 'Capacidade', v: '150 ton' }, { l: 'Comprimento', v: '30+ m'  }, { l: 'Licença',  v: 'AET'       }] },
  { id: 13, category: 'especiais',     model: 'Cavalo Mecânico',            badge: '28TON',   img: imgContainer, specs: [{ l: 'Capacidade', v: '28 ton'  }, { l: 'Comprimento', v: '14 m'   }, { l: 'Licença',  v: 'DNIT'      }] },
  { id: 14, category: 'especiais',     model: 'Cavalo Mecânico',             badge: '30TON',   img: imgG5,        specs: [{ l: 'Capacidade', v: '30 ton'  }, { l: 'Comprimento', v: '12 m'   }, { l: 'Licença',  v: 'DNIT'      }] },
  { id: 15, category: 'especiais',     model: 'Cavalo Mecânico',         badge: '100TON',  img: imgEstacao,   specs: [{ l: 'Capacidade', v: '100 ton' }, { l: 'Comprimento', v: '22 m'   }, { l: 'Licença',  v: 'AET'       }] },
  { id: 16, category: 'especiais',     model: 'Cavalo Mecânico',             badge: '100TON',  img: imgRemocao2,  specs: [{ l: 'Capacidade', v: '100 ton' }, { l: 'Eixos',      v: '6 Eixos'    }, { l: 'Comprimento',  v: '9 m'      }] },
  { id: 17, category: 'empilhadeiras', model: 'PALETRANS PT1645F',           badge: '16TON',  img: imgEmp,       specs: [{ l: 'Capacidade', v: '1.6 ton' }, { l: 'Elevação',    v: '4.5 m'  }, { l: 'Acionam.', v: 'Elétrico'  }] },
  { id: 18, category: 'empilhadeiras', model: 'HELI CPQD35',             badge: '35TON',    img: imgMunckAlt,  specs: [{ l: 'Capacidade', v: '3.5 ton'   }, { l: 'Elevação',    v: '4.8 m'    }, { l: 'Acionam.', v: 'GLP'    }] },
]

export default function Frota() {
  const ref = useReveal([])
  const { t } = useLang()
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? FLEET : FLEET.filter(e => e.category === active)
  const countFor = id => id === 'all' ? FLEET.length : FLEET.filter(e => e.category === id).length

  return (
    <div ref={ref}>
      <PageHero
        eyebrow={t.frota.heroEyebrow}
        title={<>{t.frota.heroTitle[0]}<br/>{t.frota.heroTitle[1]}</>}
        subtitle={t.frota.heroSub}
        crumb={t.frota.heroCrumb}
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
                  <span>{t.frota.categories[id]}</span>
                </button>
              ))}
            </div>
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
                  <div className={styles.cardImg}>
                    <img src={item.img} alt={t.frota.itemNames[item.id] ?? item.id} loading="lazy" />
                    <span className={styles.cardBadge}>{item.badge}</span>
                  </div>

                  <div className={styles.cardContent}>
                    <p className={styles.cardModel}>{item.model}</p>
                    <h3 className={styles.cardName}>{t.frota.itemNames[item.id] ?? item.id}</h3>
                  </div>

                  <div className={styles.cardSpecs}>
                    {item.specs.map((s, i) => (
                      <div key={i} className={styles.cardSpec}>
                        <span className={styles.specVal}>{s.v}</span>
                        <span className={styles.specLbl}>{t.frota.specLabels[s.l] ?? s.l}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <Link to="/contato" className={styles.cardCta}>
                      {t.frota.cta}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
