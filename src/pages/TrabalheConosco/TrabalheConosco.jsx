import { useState } from 'react'
import styles from './TrabalheConosco.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import Toast from '../../components/Toast/Toast'
import logo from '../../assets/maxpesa_white_logo.png'

const ESTADOS = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS',
  'MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC',
  'SP','SE','TO',
]

const BENEFICIOS = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    label: 'Segurança acima de tudo',
    desc: 'EPIs completos, treinamentos NR-11 e cultura de segurança rigorosa em cada operação.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    label: 'Plano de carreira estruturado',
    desc: 'Avaliações regulares, promoções por mérito e capacitação técnica contínua.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
    label: 'Projetos de grande impacto',
    desc: 'Operações para Petrobras, Vale, Light e os maiores projetos da indústria nacional.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    label: 'Equipe multidisciplinar',
    desc: 'Trabalhe ao lado de engenheiros, operadores e técnicos especializados.',
  },
]

function maskPhone(v) {
  v = v.replace(/\D/g, '').slice(0, 11)
  if (v.length <= 10)
    return v.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, (_, a, b, c) => [a && `(${a}`, b && `) ${b}`, c && `-${c}`].filter(Boolean).join(''))
  return v.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export default function TrabalheConosco() {
  const ref = useReveal([])
  const [phone, setPhone]       = useState('')
  const [fileName, setFileName] = useState('')
  const [loading, setLoading]   = useState(false)
  const [toast, setToast]       = useState(false)
  const [errors, setErrors]     = useState({})

  function onlyLetters(e) {
    if (!/^[A-Za-zÀ-ÿ\s]$/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight','Home','End'].includes(e.key))
      e.preventDefault()
  }

  function validate(form) {
    const errs = {}
    const nome   = form.nome.value.trim()
    const cidade = form.cidade.value.trim()
    const tel    = form.telefone.value.replace(/\D/g, '')
    if (!nome) errs.nome = 'Campo obrigatório'
    else if (nome.length < 3) errs.nome = 'Mínimo 3 caracteres'
    if (!form.endereco.value.trim()) errs.endereco = 'Campo obrigatório'
    if (!cidade) errs.cidade = 'Campo obrigatório'
    if (!form.estado.value) errs.estado = 'Selecione um estado'
    if (!tel) errs.telefone = 'Campo obrigatório'
    else if (tel.length < 10) errs.telefone = 'Telefone inválido'
    if (!form.email.value.trim()) errs.email = 'Campo obrigatório'
    if (!form.curriculo.files.length) errs.curriculo = 'Anexe seu currículo para continuar'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(e.target)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setToast(true)
      e.target.reset()
      setPhone('')
      setFileName('')
      setTimeout(() => setToast(false), 5000)
    }, 1800)
  }

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Junte-se ao time"
        title={<>Trabalhe<br/>Conosco</>}
        subtitle="Faça parte de um grupo com mais de 25 anos movendo o Brasil. Envie seu currículo e aguarde nosso contato."
        crumb="Trabalhe Conosco"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.card}>

            {/* ── Header escuro ── */}
            <div className={styles.cardHead}>
              <div className={styles.cardHeadLeft}>
                <img src={logo} alt="Grupo Maxpesa" className={styles.cardLogo} />
                <div className={styles.cardHeadDivider} />
                <div>
                  <h2 className={styles.cardHeadTitle}>Construa sua carreira aqui.</h2>
                  <p className={styles.cardHeadSub}>25 anos movendo o Brasil — com segurança, tradição e crescimento.</p>
                </div>
              </div>
              <div className={styles.cardHeadBadges}>
                <div className={styles.hBadge}><strong>25+</strong> Anos</div>
                <div className={styles.hBadge}><strong>15 mil</strong> Projetos</div>
                <div className={styles.hBadge}>ISO <strong>9001</strong></div>
              </div>
            </div>

            {/* ── Corpo do card ── */}
            <div className={styles.cardBody}>

              {/* Painel esquerdo */}
              <div className={styles.panel}>
                <div className={styles.panelInner}>
                  <p className={styles.panelEyebrow}>Por que trabalhar aqui?</p>
                  <h3 className={styles.panelTitle}>Faça parte de projetos que movem o Brasil.</h3>
                  <p className={styles.panelSub}>Somos referência nacional em logística pesada. Cada colaborador atua em operações de alto impacto e tem espaço real para crescer.</p>

                  <div className={styles.beneficios}>
                    {BENEFICIOS.map((b) => (
                      <div key={b.label} className={styles.benefRow}>
                        <div className={styles.benefIco}>{b.icon}</div>
                        <div>
                          <div className={styles.benefLabel}>{b.label}</div>
                          <div className={styles.benefDesc}>{b.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.panelNote}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    Aceitamos arquivos PDF, DOC ou DOCX até 5 MB.
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className={styles.formWrap}>
                <h3 className={styles.formTitle}>Envie sua candidatura</h3>
                <p className={styles.formSub}>Preencha os campos abaixo com atenção. Entraremos em contato se houver uma vaga compatível com seu perfil.</p>

                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.field}>
                    <label htmlFor="nome">Nome completo</label>
                    <input id="nome" name="nome" type="text" autoComplete="name"
                      placeholder="Ex.: Maria da Silva"
                      onKeyDown={onlyLetters}
                      className={errors.nome ? styles.invalid : ''}
                    />
                    {errors.nome && <span className={styles.err}>{errors.nome}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="endereco">Endereço</label>
                    <input id="endereco" name="endereco" type="text" autoComplete="street-address"
                      placeholder="Rua, número, bairro"
                      className={errors.endereco ? styles.invalid : ''}
                    />
                    {errors.endereco && <span className={styles.err}>{errors.endereco}</span>}
                  </div>

                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label htmlFor="cidade">Cidade</label>
                      <input id="cidade" name="cidade" type="text" autoComplete="address-level2"
                        placeholder="Ex.: Duque de Caxias"
                        onKeyDown={onlyLetters}
                        className={errors.cidade ? styles.invalid : ''}
                      />
                      {errors.cidade && <span className={styles.err}>{errors.cidade}</span>}
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="estado">Estado</label>
                      <select id="estado" name="estado" autoComplete="address-level1" className={errors.estado ? styles.invalid : ''}>
                        <option value="">Selecione</option>
                        {ESTADOS.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
                      </select>
                      {errors.estado && <span className={styles.err}>{errors.estado}</span>}
                    </div>
                  </div>

                  <div className={styles.row2}>
                    <div className={styles.field}>
                      <label htmlFor="telefone">Telefone / WhatsApp</label>
                      <input id="telefone" name="telefone" type="tel" autoComplete="tel"
                        placeholder="(21) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(maskPhone(e.target.value))}
                        inputMode="numeric"
                        className={errors.telefone ? styles.invalid : ''}
                      />
                      {errors.telefone && <span className={styles.err}>{errors.telefone}</span>}
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">E-mail</label>
                      <input id="email" name="email" type="email" autoComplete="email"
                        placeholder="seu@email.com"
                        className={errors.email ? styles.invalid : ''}
                      />
                      {errors.email && <span className={styles.err}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="curriculo">Currículo <span className={styles.required}>*</span></label>
                    <label htmlFor="curriculo" className={`${styles.fileLabel} ${errors.curriculo ? styles.fileInvalid : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                      {fileName || 'Escolher arquivo (PDF, DOC, DOCX — máx. 5 MB)'}
                    </label>
                    <input id="curriculo" name="curriculo" type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className={styles.fileInput}
                      onChange={(e) => setFileName(e.target.files[0]?.name || '')}
                    />
                    {errors.curriculo && <span className={styles.err}>{errors.curriculo}</span>}
                  </div>

                  <button type="submit" className={styles.submit} disabled={loading}>
                    {loading ? 'Enviando…' : 'Enviar candidatura'}
                    {!loading && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                        <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                      </svg>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Toast show={toast} onClose={() => setToast(false)} />
    </div>
  )
}
