import { useEffect, useRef } from 'react'

/**
 * Adiciona a classe 'visible' a elementos com a classe 'reveal'
 * dentro do container referenciado, com stagger por posição.
 */
export function useReveal(dep = []) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current ?? document
    const els = root.querySelectorAll('.reveal')
    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const siblings = [
            ...(entry.target.parentElement?.children ?? []),
          ].filter((c) => c.classList.contains('reveal'))
          const idx = siblings.indexOf(entry.target)
          setTimeout(() => entry.target.classList.add('visible'), idx * 90)
          obs.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep)

  return ref
}
