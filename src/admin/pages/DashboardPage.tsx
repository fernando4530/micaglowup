import { useState } from 'react'
import { Plus } from 'lucide-react'
import AdminLayout from '../components/AdminLayout'
import ProductTable from '../components/ProductTable'
import ProductForm from '../components/ProductForm'
import { useProducts } from '../hooks/useProducts'
import type { AdminProduct } from '../../types'

export default function DashboardPage() {
  const { products, loading, error, create, update, remove } = useProducts()
  const [editing, setEditing] = useState<AdminProduct | null | undefined>(undefined)

  const stats = {
    total: products.length,
    activos: products.filter(p => p.activo).length,
    destacados: products.filter(p => p.destacado).length,
    sinStock: products.filter(p => p.stock === 0).length,
  }

  async function handleToggle(id: string, field: 'destacado' | 'activo', value: boolean) {
    await update(id, { [field]: value })
  }

  async function handleDelete(id: string) {
    if (confirm('¿Desactivar este producto?')) await remove(id)
  }

  return (
    <AdminLayout title="Productos">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total', value: stats.total, color: 'text-glow-violet' },
          { label: 'Activos', value: stats.activos, color: 'text-green-500' },
          { label: 'Destacados', value: stats.destacados, color: 'text-glow-pink' },
          { label: 'Sin stock', value: stats.sinStock, color: 'text-red-400' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 px-5 py-4">
            <p className="text-xs font-body font-extrabold uppercase tracking-widest text-gray-400">{s.label}</p>
            <p className={`text-3xl font-display mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <p className="text-sm font-body text-gray-500">{products.length} productos</p>
        <button
          onClick={() => setEditing(null)}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl gradient-brand text-white text-sm font-body font-bold"
        >
          <Plus size={15} />
          Nuevo producto
        </button>
      </div>

      {error && <p className="text-red-500 text-sm font-body mb-4">{error}</p>}
      {loading ? (
        <p className="text-sm font-body text-gray-400">Cargando...</p>
      ) : (
        <ProductTable
          products={products}
          onEdit={p => setEditing(p)}
          onDelete={id => void handleDelete(id)}
          onToggle={(id, field, value) => void handleToggle(id, field, value)}
        />
      )}

      {editing !== undefined && (
        <ProductForm
          initial={editing}
          onSubmit={async data => {
            if (editing?._id) await update(editing._id, data)
            else await create(data)
          }}
          onClose={() => setEditing(undefined)}
        />
      )}
    </AdminLayout>
  )
}
