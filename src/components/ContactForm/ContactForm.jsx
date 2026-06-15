import { useState } from 'react'
import styles from './ContactForm.module.css'
import Toast from '../Toast/Toast'

function maskPhone(v) {
  v = v.replace(/\D/g, '').slice(0, 11)
  if (v.length <= 10)
    return v.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, (_, a, b, c) => [a && `(${a}`, b && `) ${b}`, c && `-${c}`].filter(Boolean).join(''))
  return v.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

function onlyLetters(e) {
  if (!/^[A-Za-zÀ-ÿ\s]$/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight','Home','End'].includes(e.key))
    e.preventDefault()
}

function onlyNumbers(e) {
  if (!/^\d$/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight','Home','End'].includes(e.key))
    e.preventDefault()
}

export default function ContactForm() {
  const [phone, setPhone]   = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast]   = useState(false)
  const [errors, setErrors] = useState({})

  function validate(form) {
    const errs = {}
    const nome = form.name.value.trim()
    const tel  = phone.replace(/\D/g, '')
    if (!nome) errs.name = 'Campo obrigatório'
    else if (nome.length < 3) errs.name = 'Mínimo 3 caracteres'
    if (!tel) errs.phone = 'Campo obrigatório'
    else if (tel.length < 10) errs.phone = 'Telefone inválido'
    if (!form.email.value.trim()) errs.email = 'Campo obrigatório'
    if (!form.message.value.trim()) errs.message = 'Campo obrigatório'
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
      setTimeout(() => setToast(false), 5000)
    }, 1800)
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.panel}>
          <h3>Canais de atendimento</h3>
          <p>Prefere falar antes de enviar o formulário? Estamos disponíveis abaixo.</p>
          <div className={styles.rows}>
            {[
              { label: 'Linha Direta', val: '0800 629 7372' },
              { label: 'Comercial',    val: '(21) 3675-1900' },
              { label: 'E-mail',       val: 'comercial@maxpesa.com.br' },
              { label: 'Sede',         val: 'Rio de Janeiro — RJ' },
            ].map((r) => (
              <div key={r.label} className={styles.row}>
                <div className={styles.rowIco}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.rowLbl}>{r.label}</div>
                  <div className={styles.rowVal}>{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formWrap}>
          <h3>Enviar solicitação</h3>
          <p>Preencha os campos e nossa equipe retorna com proposta técnica detalhada.</p>
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="name">Seu Nome</label>
                <input
                  id="name" name="name" type="text" autoComplete="name"
                  placeholder="Nome completo"
                  onKeyDown={onlyLetters}
                  className={errors.name ? styles.invalid : ''}
                />
                {errors.name && <span className={styles.err}>{errors.name}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">Telefone / WhatsApp</label>
                <input
                  id="phone" name="phone" type="tel" autoComplete="tel"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onKeyDown={onlyNumbers}
                  onChange={(e) => setPhone(maskPhone(e.target.value))}
                  inputMode="numeric"
                  className={errors.phone ? styles.invalid : ''}
                />
                {errors.phone && <span className={styles.err}>{errors.phone}</span>}
              </div>
            </div>

            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="email">E-mail Corporativo</label>
                <input
                  id="email" name="email" type="email" autoComplete="email"
                  placeholder="email@suaempresa.com"
                  className={errors.email ? styles.invalid : ''}
                />
                {errors.email && <span className={styles.err}>{errors.email}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="service">Serviço de Interesse</label>
                <select id="service" name="service">
                  <option value="movimentacao">Movimentação Horizontal e Vertical</option>
                  <option value="amarela">Linha Amarela &amp; Caminhões</option>
                  <option value="remocao">Remoção Industrial</option>
                  <option value="locacao">Locação &amp; Venda</option>
                  <option value="outros">Outros Projetos Especiais</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Detalhes da Operação</label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="Descreva o tipo de carga, peso estimado, origem, destino ou equipamentos necessários..."
                className={errors.message ? styles.invalid : ''}
              />
              {errors.message && <span className={styles.err}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? 'Processando…' : 'Enviar solicitação'}
              {!loading && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
      <Toast show={toast} onClose={() => setToast(false)} />
    </>
  )
}
