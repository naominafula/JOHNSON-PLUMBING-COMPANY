export function imageUrl(path) {
  if (!path) return ''

  if (/^https?:\/\//i.test(path)) {
    return path
  }

  const cleanPath = String(path).replace(/^\/+/, '')
  const normalized = cleanPath.startsWith('images/') ? cleanPath : `images/${cleanPath}`
  return `${import.meta.env.BASE_URL}${encodeURI(normalized)}`
}
