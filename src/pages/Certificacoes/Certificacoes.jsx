import styles from './Certificacoes.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Button from '../../components/Button/Button'
import imgIso9001      from '../../assets/iso_9001.png'
import imgIso14001     from '../../assets/iso_14001.png'
import imgIso45001     from '../../assets/iso_45001.png'
import imgOnuMulheres  from '../../assets/onu_mulheres.png'
import imgPactoGlobal  from '../../assets/pacto_global.png'
import imgInstEthos    from '../../assets/inst_ethos.png'

const CERTS = [
  { title:'ISO 9001',         desc:'Sistema de Gestão da Qualidade certificado e auditado por organismo acreditado internacionalmente.',                                   img: imgIso9001     },
  { title:'ISO 14001',        desc:'Conformidade com as normas de gestão ambiental, movimentação e segurança em máquinas.',                                                img: imgIso14001    },
  { title:'ISO 45001',        desc:'Sistema de Gestão de Saúde e Segurança Ocupacional aplicado em 100% das operações.',                                                  img: imgIso45001    },
  { title:'ONU Mulheres',     desc:'Signatários dos Princípios de Empoderamento das Mulheres, promovendo equidade no ambiente de trabalho.',                              img: imgOnuMulheres },
  { title:'Global Compact',   desc:'Adesão ao Pacto Global da ONU, comprometendo-se com os dez princípios de sustentabilidade e direitos humanos.',                      img: imgPactoGlobal },
  { title:'Instituto Ethos',  desc:'Associados ao Instituto Ethos, referência em práticas de responsabilidade social empresarial no Brasil.',                             img: imgInstEthos   },
]

const ITEMS = [
  { t:'Auditorias anuais independentes', d:'Revisão completa dos processos por auditores externos credenciados.' },
  { t:'Operadores com habilitação atualizada', d:'Cursos de reciclagem obrigatórios e registros NR-11 sempre válidos.' },
  { t:'Laudos técnicos disponíveis', d:'Documentação completa entregue ao contratante antes de cada operação.' },
  { t:'Cobertura de seguros em 100% das operações', d:'RCTR-C e responsabilidade civil ativa em todas as mobilizações.' },
  { t:'Memorial de cálculo de rigging', d:'Engenheiro responsável assina cada içamento de equipamento pesado.' },
]

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

export default function Certificacoes() {
  const ref = useReveal([])
  return (
    <div ref={ref}>
      <PageHero eyebrow="Garantia de qualidade" title={<>Certificações<br/>&amp; Conformidades</>} subtitle="Cumprimento rigoroso das principais normas nacionais e internacionais para máxima segurança operacional." crumb="Certificações" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.certsGrid}>
            {CERTS.map((c) => (
              <div key={c.title} className={`${styles.certCard} reveal`}>
                <div className={styles.certImg}>
                  <img src={c.img} alt={c.title} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <SectionHeader eyebrow="Por que isso importa" title={<>Certificações como<br/>compromisso com você</>} />
              <p className={styles.lead}>As certificações do Grupo Maxpesa são o resultado de anos de trabalho sistemático para garantir que cada operação seja executada com o mais alto padrão de qualidade e segurança.</p>
              <p className={styles.body}>Para o contratante, isso representa previsibilidade, redução de riscos e um parceiro que sabe exatamente o que está fazendo.</p>
              <Button to="/contato">Solicitar proposta técnica</Button>
            </div>
            <div className={`${styles.checkList} reveal`}>
              {ITEMS.map((item) => (
                <div key={item.t} className={styles.checkItem}>
                  <div className={styles.checkIco}><Check /></div>
                  <div><strong>{item.t}</strong><span>{item.d}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section}`} style={{textAlign:'center'}}>
        <div className="container">
          <SectionHeader center eyebrow="Documentação disponível" title={<>Solicite nosso dossiê<br/>de certificações</>} subtitle="Enviamos toda a documentação técnica para análise prévia antes da contratação." />
          <Button to="/contato" size="lg">Solicitar documentação</Button>
        </div>
      </section>
    </div>
  )
}