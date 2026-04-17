import { useState, useEffect, useCallback } from 'react'
import * as api from '../api/adminApi'
import type { AdminProduct } from '../../types'

export function useProducts() {
  const [products, setProducts] = useState<AdminProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.getProducts()
      setProducts(data as AdminProduct[])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void fetchProducts() }, [fetchProducts])

  async function create(data: Partial<AdminProduct>) {
    await api.createProduct(data)
    await fetchProducts()
  }

  async function update(id: string, data: Partial<AdminProduct>) {
    await api.updateProduct(id, data)
    await fetchProducts()
  }

  async function remove(id: string) {
    await api.deleteProduct(id)
    await fetchProducts()
  }

  return { products, loading, error, refetch: fetchProducts, create, update, remove }
}
