type ClassValue = string | number | false | null | undefined

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ')
}

export function waLink(message: string) {
  const phone = '6285227227826'
  const text = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${text}`
}
