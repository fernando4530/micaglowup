import { useState, useEffect } from 'react'
import type { Product } from '../types'

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:8081/api'

interface ApiProduct {
  _id: string
  nombre: string
  marca: string
  descripcion?: string
  imagen?: string
  categoria?: string
  destacado: boolean
  activo: boolean
  stock: number
}

function mapToProduct(p: ApiProduct): Product {
  return {
    id: p._id,
    name: p.nombre,
    brand: p.marca,
    description: p.descripcion ?? '',
    badge: p.categoria ?? 'Nuevo',
    badgeEmoji: '✨',
    image: p.imagen ?? '',
    featured: p.destacado,
    whatsappText: `Hola! Me interesa ${p.nombre} de ${p.marca} ✨`,
  }
}

export function usePublicProducts(options?: { destacado?: boolean }) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const destacado = options?.destacado

  useEffect(() => {
    const url = new URL(`${API}/products`)
    if (destacado) url.searchParams.set('destacado', 'true')

    fetch(url.toString())
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<ApiProduct[]>
      })
      .then(data => setProducts(data.map(mapToProduct)))
      .catch(err => setError(err instanceof Error ? err.message : 'Error al cargar productos'))
      .finally(() => setLoading(false))
  }, [destacado])

  return { products, loading, error }
}
