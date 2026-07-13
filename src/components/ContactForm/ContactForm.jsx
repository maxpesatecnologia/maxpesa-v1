import { useState } from 'react'
import styles from './ContactForm.module.css'
import Toast from '../Toast/Toast'
import logo from '../../assets/logo_branca.png'
import { useLang } from '../../context/LanguageContext'

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

const CONTACT_DATA = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.143.536.3 1.065.47 1.588a12.84 12.84 0 0 0 .23 1.222 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, val: '0800 629 7372', href: 'tel:08006297372' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.143.536.3 1.065.47 1.588a12.84 12.84 0 0 0 .23 1.222 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, val: '(21) 3675-1900', href: 'tel:+552136751900' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, val: 'comercial@maxpesa.com.br', href: 'mailto:comercial@maxpesa.com.br' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, val: 'Duque de Caxias — RJ', href: null },
]

export default function ContactForm() {
  const { t } = useLang()
  const [phone, setPhone]     = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast]     = useState(false)
  const [errors, setErrors]   = useState({})

  function validate(form) {
    const errs = {}
    const nome = form.name.value.trim()
    const tel  = phone.replace(/\D/g, '')
    if (!nome) errs.name = t.contato.errors.required
    else if (nome.length < 3) errs.name = t.contato.errors.minChars
    if (!tel) errs.phone = t.contato.errors.required
    else if (tel.length < 10) errs.phone = t.contato.errors.phone
    if (!form.email.value.trim()) errs.email = t.contato.errors.required
    if (!form.message.value.trim()) errs.message = t.contato.errors.required
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
      <div className={styles.card}>

        {/* ── Header escuro ── */}
        <div className={styles.cardHead}>
          <div className={styles.cardHeadLeft}>
            <img src={logo} alt="Grupo Maxpesa" className={styles.cardLogo} />
            <div className={styles.cardHeadDivider} />
            <div>
              <h2 className={styles.cardHeadTitle}>{t.contato.cardTitle}</h2>
              <p className={styles.cardHeadSub}>{t.contato.cardSub}</p>
            </div>
          </div>
          <div className={styles.cardHeadBadges}>
            <div className={styles.hBadge}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {t.contato.responseLabel} <strong>2h</strong>
            </div>
            <div className={styles.hBadge}>ISO <strong>9001</strong></div>
            <div className={styles.hBadge}>ISO <strong>14001</strong></div>
            <div className={styles.hBadge}>ISO <strong>45001</strong></div>
            <div className={styles.hBadge}>ISO <strong>37001</strong></div>
          </div>
        </div>

        {/* ── Corpo do card ── */}
        <div className={styles.cardBody}>

          {/* Painel esquerdo */}
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <p className={styles.panelEyebrow}>{t.contato.panelEyebrow}</p>
              <h3 className={styles.panelTitle}>{t.contato.panelTitle}</h3>
              <p className={styles.panelSub}>{t.contato.panelSub}</p>

              <div className={styles.contactRows}>
                {CONTACT_DATA.map((c, i) => (
                  <div key={c.val} className={styles.contactRow}>
                    <div className={styles.contactIco}>{c.icon}</div>
                    <div className={styles.contactText}>
                      <div className={styles.contactLbl}>{t.contato.contactLabels[i]}</div>
                      {c.href ? (
                        <a href={c.href} className={styles.contactVal}>{c.val}</a>
                      ) : (
                        <span className={styles.contactVal}>{c.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/5521972101901" target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.519 5.853L.057 23.203a.75.75 0 0 0 .94.94l5.35-1.462A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.903 0-3.68-.524-5.2-1.435l-.372-.224-3.874 1.058 1.059-3.875-.224-.371A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                {t.contato.waBtn}
              </a>
            </div>
          </div>

          {/* Formulário */}
          <div className={styles.formWrap}>
            <h3 className={styles.formTitle}>{t.contato.formTitle}</h3>
            <p className={styles.formSub}>{t.contato.formSub}</p>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label htmlFor="name">{t.contato.fields.name}</label>
                  <input id="name" name="name" type="text" autoComplete="name"
                    placeholder={t.contato.fields.namePh}
                    onKeyDown={onlyLetters}
                    className={errors.name ? styles.invalid : ''}
                  />
                  {errors.name && <span className={styles.err}>{errors.name}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">{t.contato.fields.phone}</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel"
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
                  <label htmlFor="email">{t.contato.fields.email}</label>
                  <input id="email" name="email" type="email" autoComplete="email"
                    placeholder={t.contato.fields.emailPh}
                    className={errors.email ? styles.invalid : ''}
                  />
                  {errors.email && <span className={styles.err}>{errors.email}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="service">{t.contato.fields.service}</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled hidden>{t.contato.fields.servicePh}</option>
                    {t.serviceItems.map((s, i) => (
                      <option key={i} value={['movimentacao-vertical','movimentacao-cargas','locacao','linha-amarela','transporte','empilhadeiras'][i]}>{s}</option>
                    ))}
                    <option value="outros">{t.contato.fields.serviceOthers}</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">{t.contato.fields.message}</label>
                <textarea id="message" name="message" rows={5}
                  placeholder={t.contato.fields.messagePh}
                  className={errors.message ? styles.invalid : ''}
                />
                {errors.message && <span className={styles.err}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? t.contato.processing : t.contato.submit}
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
      <Toast show={toast} onClose={() => setToast(false)} title={t.toast.title} subtitle={t.toast.subtitle} />
    </>
  )
}
