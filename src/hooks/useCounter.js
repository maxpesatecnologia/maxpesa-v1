import { useEffect, useRef } from 'react'

export function useCounter() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current ?? document
    const els = root.querySelectorAll('.stat-number[data-target]')
    if (!els.length) return

    const easeOut = (t) => 1 - Math.pow(1 - t, 4)

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(entry.target)
          const target = +entry.target.dataset.target
          const t0 = performance.now()
          const tick = (now) => {
            const p = Math.min((now - t0) / 2000, 1)
            const val = Math.round(easeOut(p) * target)
            entry.target.textContent =
              target >= 1000 ? val.toLocaleString('pt-BR') : String(val)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.5 }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}
