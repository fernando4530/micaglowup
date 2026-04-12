export interface Product {
  id: string
  name: string
  brand: string
  description: string
  badge: string
  badgeEmoji: string
  image: string
  featured: boolean
  whatsappText: string
}

export interface ContactInfo {
  whatsapp: {
    number: string
    url: string
    defaultMessage: string
  }
  instagram: {
    handle: string
    url: string
  }
}

export interface NavLink {
  label: string
  href: string
}
