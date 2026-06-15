import { useState } from 'react'
import styles from './TrabalheConosco.module.css'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero/PageHero'
import Toast from '../../components/Toast/Toast'

const ESTADOS = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS',
  'MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC',
  'SP','SE','TO',
]

const BENEFICIOS = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'Segurança & EPI completo' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: 'Equipe multidisciplinar' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, label: 'Crescimento de carreira' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, label: 'Treinamentos internos' },
]

function maskPhone(v) {
  v = v.replace(/\D/g, '').slice(0, 11)
  if (v.length <= 10)
    return v.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, (_, a, b, c) => [a && `(${a}`, b && `) ${b}`, c && `-${c}`].filter(Boolean).join(''))
  return v.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export default function TrabalheConosco() {
  const ref = useReveal([])
  const [phone, setPhone]     = useState('')
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast]     = useState(false)
  const [errors, setErrors]   = useState({})

  function onlyLetters(e) {
    if (!/^[A-Za-zÀ-ÿ\s]$/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight','Home','End'].includes(e.key))
      e.preventDefault()
  }

  function validate(form) {
    const errs = {}
    const nome = form.nome.value.trim()
    const cidade = form.cidade.value.trim()
    const tel = form.telefone.value.replace(/\D/g, '')
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
          <div className={styles.wrap}>

            <div className={styles.panel}>
              <h3>Por que trabalhar na Maxpesa?</h3>
              <p>Somos referência nacional em operações de carga complexa e engenharia de rigging. Aqui, cada profissional faz parte de projetos de grande impacto.</p>
              <ul className={styles.beneficios}>
                {BENEFICIOS.map((b) => (
                  <li key={b.label} className={styles.beneficio}>
                    <span className={styles.benefIco}>{b.icon}</span>
                    <span>{b.label}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.panelNote}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                Aceitamos arquivos PDF, DOC ou DOCX até 5 MB.
              </div>
            </div>

            <div className={styles.formWrap}>
              <h3>Envie sua candidatura</h3>
              <p>Preencha os campos abaixo com atenção. Entraremos em contato caso haja uma vaga compatível com seu perfil.</p>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.field}>
                  <label htmlFor="nome">Nome completo</label>
                  <input
                    id="nome" name="nome" type="text" autoComplete="name"
                    placeholder="Ex.: Maria da Silva"
                    onKeyDown={onlyLetters}
                    className={errors.nome ? styles.invalid : ''}
                  />
                  {errors.nome && <span className={styles.err}>{errors.nome}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    id="endereco" name="endereco" type="text" autoComplete="street-address"
                    placeholder="Rua, número, bairro"
                    className={errors.endereco ? styles.invalid : ''}
                  />
                  {errors.endereco && <span className={styles.err}>{errors.endereco}</span>}
                </div>

                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      id="cidade" name="cidade" type="text" autoComplete="address-level2"
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
                    <input
                      id="telefone" name="telefone" type="tel" autoComplete="tel"
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
                    <input
                      id="email" name="email" type="email" autoComplete="email"
                      placeholder="seu@email.com"
                      className={errors.email ? styles.invalid : ''}
                    />
                    {errors.email && <span className={styles.err}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="curriculo">Currículo <span className={styles.required}>*</span></label>
                  <label htmlFor="curriculo" className={`${styles.fileLabel} ${errors.curriculo ? styles.invalid : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    {fileName || 'Escolher arquivo (PDF, DOC, DOCX — máx. 5 MB)'}
                  </label>
                  <input
                    id="curriculo" name="curriculo" type="file"
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
      </section>

      <Toast show={toast} onClose={() => setToast(false)} />
    </div>
  )
}
