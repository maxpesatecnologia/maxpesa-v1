import { useParams, Link } from 'react-router-dom'
import { POSTS } from '../../data/blogPosts'
import styles from './BlogPost.module.css'
import Button from '../../components/Button/Button'

const BackArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)

function Block({ b }) {
  if (b.type === 'h2') return <h2 className={styles.h2}>{b.text}</h2>
  if (b.type === 'h3') return <h3 className={styles.h3}>{b.text}</h3>
  if (b.type === 'h4') return <h4 className={styles.h4}>{b.text}</h4>
  if (b.type === 'p')  return <p  className={styles.p}>{b.text}</p>
  if (b.type === 'blockquote') return <blockquote className={styles.bq}>{b.text}</blockquote>
  if (b.type === 'ul') return (
    <ul className={styles.ul}>
      {b.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
  if (b.type === 'ol-titled') return (
    <ol className={styles.olTitled}>
      {b.items.map((item, i) => (
        <li key={i}>
          <div className={styles.olNum}>{i + 1}</div>
          <div>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        </li>
      ))}
    </ol>
  )
  return null
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)

  if (!post) return (
    <div className={styles.notFound}>
      <p>Artigo não encontrado.</p>
      <Link to="/blog" className={styles.back}><BackArrow /> Voltar ao Blog</Link>
    </div>
  )

  const related = POSTS.filter(p => p.slug !== slug)

  return (
    <div>
      {/* ── Hero cover ── */}
      <div className={styles.cover}>
        <img src={post.img} alt={post.title} />
        <div className={styles.overlay} />
        <div className={styles.coverContent}>
          <div className="container">
            <span className={styles.badge}>{post.category}</span>
            <h1>{post.title}</h1>
          </div>
        </div>
      </div>

      {/* ── Artigo ── */}
      <section className={styles.section}>
        <div className="container">
          <Link to="/blog" className={styles.back}>
            <BackArrow /> Voltar ao Blog
          </Link>
          <div className={styles.inner}>
            {post.content.map((b, i) => <Block key={i} b={b} />)}
          </div>
          <div className={styles.cta}>
            <p>Precisa de uma solução especializada em logística pesada?</p>
            <Button to="/contato">Fale com nossa equipe</Button>
          </div>
        </div>
      </section>

      {/* ── Leia também ── */}
      {related.length > 0 && (
        <section className={styles.relatedSec}>
          <div className="container">
            <h2 className={styles.relatedTitle}>Leia também</h2>
            <div className={styles.relatedGrid}>
              {related.map(r => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImg}>
                    <img src={r.img} alt={r.title} />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat}>{r.category}</span>
                    <h3>{r.title}</h3>
                    <p>{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
