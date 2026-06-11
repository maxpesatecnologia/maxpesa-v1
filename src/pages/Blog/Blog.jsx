import { Link } from 'react-router-dom'
import styles from './Blog.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import { POSTS } from '../../data/blogPosts'

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Blog() {
  const ref = useReveal([])
  const [featured, ...rest] = POSTS

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Insights & Novidades"
        title="Blog"
        subtitle="Artigos, novidades e conteúdo técnico sobre movimentação de cargas, logística pesada e boas práticas operacionais."
        crumb="Blog"
      />

      <section className={styles.section}>
        <div className="container">

          {/* Post destaque */}
          <Link to={`/blog/${featured.slug}`} className={`${styles.featured} reveal`}>
            <div className={styles.featuredImg}>
              <img src={featured.img} alt={featured.title} />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.badge}>{featured.category}</span>
              <span className={styles.featuredEye}>Destaque</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className={styles.readMore}>
                Leia o artigo completo <Arrow />
              </span>
            </div>
          </Link>

          {/* Grid de demais posts */}
          <div className={styles.grid}>
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className={`${styles.card} reveal`}>
                <div className={styles.cardImg}>
                  <img src={post.img} alt={post.title} />
                  <span className={styles.badge}>{post.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className={styles.readMore}>
                    Leia mais <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.ctaSec}`}>
        <div className="container">
          <SectionHeader
            center
            eyebrow="Fique por dentro"
            title={<>Conteúdo técnico para<br/>decisões mais inteligentes</>}
            subtitle="Acompanhe novidades sobre movimentação pesada, segurança operacional e logística industrial."
          />
          <div style={{ textAlign: 'center' }}>
            <Button to="/contato">Fale com um especialista</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
