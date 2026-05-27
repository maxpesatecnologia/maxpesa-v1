import styles from './Toast.module.css'
export default function Toast({ show, onClose }) {
  return (
    <div className={`${styles.toast} ${show ? styles.show : ''}`}>
      <div className={styles.ico}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
        </svg>
      </div>
      <div className={styles.body}>
        <h4>Mensagem enviada com sucesso</h4>
        <p>Retornaremos em até 2 horas úteis.</p>
      </div>
      <button className={styles.close} onClick={onClose}>&times;</button>
    </div>
  )
}