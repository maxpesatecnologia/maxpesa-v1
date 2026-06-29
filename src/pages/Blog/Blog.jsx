import { Link } from 'react-router-dom'
import styles from './Blog.module.css'
import { POSTS } from '../../data/blogPosts'
import { useLang } from '../../context/LanguageContext'

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Blog() {
  const { t, lang } = useLang()
  const loc = (field) => (field && typeof field === 'object') ? (field[lang] ?? field['pt-BR']) : field
  const [featured, ...rest] = POSTS

  return (
    <div>

      {/* ── PAGE HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroEye}>{t.blog.heroEye}</span>
          <h1 className={styles.heroTitle}>{t.blog.heroTitle}</h1>
          <p className={styles.heroSub}>{t.blog.heroSub}</p>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section className={styles.section}>
        <div className="container">

          {/* Post destaque */}
          <Link to={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredImg}>
              <img src={featured.img} alt={featured.title} />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.badge}>{loc(featured.category)}</span>
              <span className={styles.featuredEye}>{t.blog.featured}</span>
              <h2>{loc(featured.title)}</h2>
              <p>{loc(featured.excerpt)}</p>
              <span className={styles.readMore}>
                {t.blog.readMore} <ArrowRight />
              </span>
            </div>
          </Link>

          {/* Grid de demais posts */}
          <div className={styles.grid}>
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardImg}>
                  <img src={post.img} alt={post.title} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{loc(post.category)}</span>
                  <h3>{loc(post.title)}</h3>
                  <p>{loc(post.excerpt)}</p>
                  <span className={styles.readMore}>
                    {t.blog.readMoreShort} <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSec}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <span className={styles.ctaEye}>{t.blog.ctaEye}</span>
            <h2 className={styles.ctaTitle}>{t.blog.ctaTitle}</h2>
            <p className={styles.ctaSub}>{t.blog.ctaSub}</p>
          </div>
          <Link to="/contato" className={styles.ctaBtn}>
            {t.blog.ctaBtn} <ArrowRight />
          </Link>
        </div>
      </section>

    </div>
  )
}
