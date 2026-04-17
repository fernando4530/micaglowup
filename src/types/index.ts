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

export interface AdminProduct {
  _id: string
  nombre: string
  marca: string
  descripcion?: string
  precio?: number
  imagen?: string
  stock: number
  destacado: boolean
  activo: boolean
  categoria?: string
  createdAt: string
  updatedAt: string
}
