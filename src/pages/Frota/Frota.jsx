import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Frota.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'

import imgG1    from '../../assets/guindaste_trelicado_img.png'
import imgG2    from '../../assets/guindaste1.jpeg'
import imgG3    from '../../assets/guindaste3.jpeg'
import imgG4    from '../../assets/guindaste4.jpeg'
import imgM1    from '../../assets/munck3.png'
import imgM2    from '../../assets/caminhao-munck-img2.jpg'
import imgLA    from '../../assets/linhamarela.png'
import imgPlatA from '../../assets/plataforma_articulada.png'
import imgPlatT from '../../assets/plataforma_tesoura.png'
import imgEixo  from '../../assets/caminhao_linha_de_eixo.png'
import imgEmp   from '../../assets/munck2.png'

const CATEGORIES = [
  {
    id: 'all', label: 'Todos',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  },
  {
    id: 'guindastes', label: 'Guindastes',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v9"/><path d="M7 6l5-3 5 3"/><line x1="12" y1="12" x2="12" y2="18"/><path d="M9 18a3 3 0 0 0 6 0"/><line x1="3" y1="21" x2="21" y2="21"/></svg>,
  },
  {
    id: 'munck', label: 'Cam. Guindauto',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="9" width="14" height="9" rx="1"/><path d="M15 13h4l3 3v3h-7V13z"/><circle cx="5" cy="20" r="2"/><circle cx="17" cy="20" r="2"/></svg>,
  },
  {
    id: 'empilhadeiras', label: 'Empilhadeiras',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4h4v16"/><path d="M8 8h8a2 2 0 0 1 2 2v3H8V8z"/><circle cx="6" cy="22" r="2"/><circle cx="16" cy="22" r="2"/></svg>,
  },
  {
    id: 'linha-amarela', label: 'Linha Amarela',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M6 20V9l3-5h4l3 5v11"/><path d="M9 4v5"/><path d="M6 12h12"/></svg>,
  },
  {
    id: 'plataforma', label: 'Plat. Elevatória',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V8"/><path d="M6 14l6-6 6 6"/><path d="M3 20h18"/></svg>,
  },
  {
    id: 'especiais', label: 'Cargas Especiais',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="10" width="15" height="8" rx="1"/><path d="M16 13h4l2 3v3h-6V13z"/><circle cx="5" cy="20" r="2"/><circle cx="18" cy="20" r="2"/></svg>,
  },
]

const FLEET = [
  // GUINDASTES
  { id: 1,  category: 'guindastes',    model: 'Liebherr LTM 1100-4.2',  name: 'Guindaste Rodoviário Telescópico', badge: '100T',  img: imgG3,    specs: [{ l: 'Capacidade', v: '100 t' }, { l: 'Pluma',       v: '60 m'    }, { l: 'Rotação',  v: '360°'      }] },
  { id: 2,  category: 'guindastes',    model: 'Liebherr LTM 1250-6.2',  name: 'Guindaste Treliçado',              badge: '250T',  img: imgG1,    specs: [{ l: 'Capacidade', v: '250 t' }, { l: 'Pluma',       v: '84 m'    }, { l: 'Rotação',  v: '360°'      }] },
  { id: 3,  category: 'guindastes',    model: 'Grove GMK 4100L',         name: 'Guindaste Rodoviário Telescópico', badge: '100T',  img: imgG2,    specs: [{ l: 'Capacidade', v: '100 t' }, { l: 'Pluma',       v: '58 m'    }, { l: 'Eixos',    v: '4'         }] },
  // MUNCK
  { id: 5,  category: 'munck',         model: 'Mercedes-Benz 2644',      name: 'Caminhão-Guindauto',               badge: '25T',   img: imgM1,    specs: [{ l: 'Capacidade', v: '25 t'  }, { l: 'Alcance',     v: '22 m'    }, { l: 'Acionam.', v: 'Hidráulico' }] },
  { id: 6,  category: 'munck',         model: 'Volvo FH 540',            name: 'Caminhão-Guindauto',               badge: '35T',   img: imgM2,    specs: [{ l: 'Capacidade', v: '35 t'  }, { l: 'Alcance',     v: '26 m'    }, { l: 'Acionam.', v: 'Hidráulico' }] },
  // LINHA AMARELA
  { id: 7,  category: 'linha-amarela', model: 'Caterpillar 420F',        name: 'Escavadeira Hidráulica',           badge: '4x4',   img: imgLA,    specs: [{ l: 'Balde',      v: '1.09 m³'}, { l: 'Prof. max',   v: '6.3 m'   }, { l: 'Tração',   v: '4x4'       }] },
  { id: 8,  category: 'linha-amarela', model: 'Caterpillar 320D',        name: 'Pá Carregadeira',                  badge: '20T',   img: imgLA,    specs: [{ l: 'Peso op.',   v: '20 t'   }, { l: 'Profundid.', v: '9.8 m'   }, { l: 'Balde',    v: '0.95 m³'  }] },
  // PLATAFORMA ELEVATÓRIA
  { id: 9,  category: 'plataforma',    model: 'JLG 600AJ',               name: 'Plataforma Articulada',            badge: '18M',   img: imgPlatA, specs: [{ l: 'Alt. trab.', v: '18 m'  }, { l: 'Capacidade', v: '227 kg'  }, { l: 'Tração',   v: '4WD'       }] },
  { id: 10, category: 'plataforma',    model: 'Genie GS-4047',           name: 'Plataforma Tesoura',               badge: '14M',   img: imgPlatT, specs: [{ l: 'Alt. trab.', v: '14 m'  }, { l: 'Capacidade', v: '450 kg'  }, { l: 'Plataf.',  v: '1.83 m'   }] },
  // CARGAS ESPECIAIS
  { id: 11, category: 'especiais',     model: 'Prancha 5 Eixos',         name: 'Carreta Carga Seca',               badge: '80T',   img: imgEixo,  specs: [{ l: 'Capacidade', v: '80 t'  }, { l: 'Comprimento', v: '20 m'   }, { l: 'Licença',  v: 'DNIT'      }] },
  { id: 12, category: 'especiais',     model: 'Carreta Extensível',      name: 'Carreta Extensiva',                badge: '150T',  img: imgG4,    specs: [{ l: 'Capacidade', v: '150 t' }, { l: 'Comprimento', v: '30+ m'  }, { l: 'Licença',  v: 'AET'       }] },
  { id: 13, category: 'especiais',     model: 'Carreta Baú Sider',       name: 'Carreta Baú Sider',                badge: '150T',  img: imgG4,    specs: [{ l: 'Capacidade', v: '150 t' }, { l: 'Comprimento', v: '30+ m'  }, { l: 'Licença',  v: 'AET'       }] },
  { id: 14, category: 'especiais',     model: 'Carreta Baú',             name: 'Carreta Baú',                      badge: '150T',  img: imgG4,    specs: [{ l: 'Capacidade', v: '150 t' }, { l: 'Comprimento', v: '30+ m'  }, { l: 'Licença',  v: 'AET'       }] },
  { id: 15, category: 'especiais',     model: 'Carreta Prancha',         name: 'Carreta Prancha',                  badge: '150T',  img: imgEixo,  specs: [{ l: 'Capacidade', v: '150 t' }, { l: 'Comprimento', v: '30+ m'  }, { l: 'Licença',  v: 'AET'       }] },
  { id: 16, category: 'especiais',     model: 'Linha de Eixo',           name: 'Linha de Eixo',                    badge: '150T',  img: imgEixo,  specs: [{ l: 'Capacidade', v: '150 t' }, { l: 'Comprimento', v: '30+ m'  }, { l: 'Licença',  v: 'AET'       }] },
  // EMPILHADEIRAS
  { id: 17, category: 'empilhadeiras', model: 'Toyota 8FBN25',           name: 'Empilhadeira Elétrica',            badge: '2.5T',  img: imgEmp,   specs: [{ l: 'Capacidade', v: '2.5 t' }, { l: 'Elevação',    v: '5.5 m'  }, { l: 'Acionam.', v: 'Elétrico'  }] },
  { id: 18, category: 'empilhadeiras', model: 'Yale GLP050',             name: 'Empilhadeira Diesel',              badge: '5T',    img: imgEmp,   specs: [{ l: 'Capacidade', v: '5 t'   }, { l: 'Elevação',    v: '6 m'    }, { l: 'Acionam.', v: 'Diesel'    }] },
]

export default function Frota() {
  const ref = useReveal([])
  const [active, setActive] = useState('all')

  const filtered  = active === 'all' ? FLEET : FLEET.filter(e => e.category === active)
  const countFor  = id => id === 'all' ? FLEET.length : FLEET.filter(e => e.category === id).length

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Locação de Equipamentos"
        title={<>Nossa<br/>Frota</>}
        subtitle="Frota própria com manutenção preventiva, operadores certificados e suporte 24/7. Consulte disponibilidade e solicite locação."
        crumb="Nossa Frota"
      />

      <section className={styles.section}>

        {/* ── BARRA DE FILTROS ── */}
        <div className={styles.filterHead}>
          <div className="container">
            <div className={styles.filterScroll}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`${styles.filterBtn} ${active === cat.id ? styles.active : ''}`}
                >
                  <span className={styles.filterIco}>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className={styles.filterCount}>{countFor(cat.id)}</span>
                </button>
              ))}
            </div>
            <p className={styles.filterMeta}>
              <strong>{filtered.length}</strong> equipamento{filtered.length !== 1 ? 's' : ''} disponíve{filtered.length !== 1 ? 'is' : 'l'} para locação
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
                  whileHover={{ y: -6 }}
                  transition={{
                    layout:  { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.25 },
                    scale:   { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                    y:       { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                  }}
                  className={styles.card}
                >
                  {/* Imagem */}
                  <div className={styles.cardImg}>
                    <img src={item.img} alt={item.name} loading="lazy" />
                    <span className={styles.cardBadge}>{item.badge}</span>
                  </div>

                  {/* Conteúdo */}
                  <div className={styles.cardContent}>
                    <p className={styles.cardModel}>{item.model}</p>
                    <h3 className={styles.cardName}>{item.name}</h3>
                  </div>

                  {/* Specs */}
                  <div className={styles.cardSpecs}>
                    {item.specs.map((s, i) => (
                      <div key={i} className={styles.cardSpec}>
                        <span className={styles.specVal}>{s.v}</span>
                        <span className={styles.specLbl}>{s.l}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ações */}
                  <div className={styles.cardFooter}>
                    <Link to="/contato" className={styles.cardCta}>
                      Solicitar Locação
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <a
                      href={`https://wa.me/5521972101901?text=Olá! Tenho interesse na locação: ${item.name} — ${item.model}`}
                      target="_blank" rel="noopener noreferrer"
                      className={styles.cardWpp}
                      aria-label="Contato via WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>
                    </a>
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
