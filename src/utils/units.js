const M_TO_FT = 3.28084
const KG_TO_LB = 2.20462
const M3_TO_FT3 = 35.3147

function formatNumber(n, lang, decimals) {
  const factor = 10 ** decimals
  const rounded = Math.round(n * factor) / factor
  const str = String(rounded)
  return lang === 'en' ? str : str.replace('.', ',')
}

export function formatTon(value, lang) {
  return `${formatNumber(value, lang, 1)} ton`
}

export function formatBadgeTon(value, lang) {
  return `${formatNumber(value, lang, 1)}TON`
}

export function formatLength(meters, lang, { approx = false } = {}) {
  const isEn = lang === 'en'
  const converted = isEn ? meters * M_TO_FT : meters
  const unit = isEn ? 'ft' : 'm'
  const num = approx ? Math.round(converted) : formatNumber(converted, lang, 1)
  return `${num}${approx ? '+' : ''} ${unit}`
}

export function formatBadgeLength(meters, lang) {
  const isEn = lang === 'en'
  const converted = isEn ? meters * M_TO_FT : meters
  const unit = isEn ? 'FT' : 'M'
  return `${Math.round(converted)}${unit}`
}

export function formatVolume(cubicMeters, lang) {
  const isEn = lang === 'en'
  const converted = isEn ? cubicMeters * M3_TO_FT3 : cubicMeters
  const unit = isEn ? 'ft³' : 'm³'
  return `${formatNumber(converted, lang, 1)} ${unit}`
}

export function formatSmallWeight(kg, lang) {
  const isEn = lang === 'en'
  const converted = isEn ? kg * KG_TO_LB : kg
  const unit = isEn ? 'lb' : 'kg'
  return `${formatNumber(converted, lang, 0)} ${unit}`
}
