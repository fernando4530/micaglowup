import { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import type { AdminProduct } from '../../types'

const PAGE_SIZE = 10

interface ProductTableProps {
  products: AdminProduct[]
  onEdit: (product: AdminProduct) => void
  onDelete: (id: string) => void
  onToggle: (id: string, field: 'destacado' | 'activo', value: boolean) => void
}

export default function ProductTable({ products, onEdit, onDelete, onToggle }: ProductTableProps) {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(products.length / PAGE_SIZE)
  const slice = products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Vista mobile — cards apiladas */}
      <div className="md:hidden divide-y divide-gray-100">
        {slice.map(p => (
          <div key={p._id} className="p-4 flex gap-3">
            {p.imagen ? (
              <img src={p.imagen} alt={p.nombre} className="h-10 w-10 object-cover rounded-lg flex-shrink-0" />
            ) : (
              <div className="h-10 w-10 rounded-lg bg-glow-border flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-glow-text truncate">{p.nombre}</p>
                  <p className="text-xs text-gray-500">{p.marca}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button
                    onClick={() => onEdit(p)}
                    className="p-1.5 rounded-lg hover:bg-glow-border text-glow-muted hover:text-glow-pink transition-colors"
                    aria-label="Editar"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => onDelete(p._id)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Eliminar"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-600">
                {p.precio != null ? `$${p.precio.toLocaleString('es-AR')}` : '—'} · Stock: {p.stock}
              </p>
              <div className="mt-2 flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Toggle value={p.destacado} onChange={v => onToggle(p._id, 'destacado', v)} />
                  Destacado
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Toggle value={p.activo} onChange={v => onToggle(p._id, 'activo', v)} />
                  Activo
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vista desktop — tabla */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm font-body">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-glow-text">
              <th className="px-4 py-3 text-left font-extrabold">Imagen</th>
              <th className="px-4 py-3 text-left font-extrabold">Nombre</th>
              <th className="px-4 py-3 text-left font-extrabold">Marca</th>
              <th className="px-4 py-3 text-right font-extrabold">Precio</th>
              <th className="px-4 py-3 text-right font-extrabold">Stock</th>
              <th className="px-4 py-3 text-center font-extrabold">Destacado</th>
              <th className="px-4 py-3 text-center font-extrabold">Activo</th>
              <th className="px-4 py-3 text-center font-extrabold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {slice.map(p => (
              <tr key={p._id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  {p.imagen ? (
                    <img src={p.imagen} alt={p.nombre} className="h-10 w-10 object-cover rounded-lg" />
                  ) : (
                    <div className="h-10 w-10 rounded-lg bg-glow-border flex items-center justify-center text-xs text-glow-muted">—</div>
                  )}
                </td>
                <td className="px-4 py-3 font-semibold text-glow-text">{p.nombre}</td>
                <td className="px-4 py-3 text-gray-500">{p.marca}</td>
                <td className="px-4 py-3 text-right text-gray-700">
                  {p.precio != null ? `$${p.precio.toLocaleString('es-AR')}` : '—'}
                </td>
                <td className="px-4 py-3 text-right text-gray-700">{p.stock}</td>
                <td className="px-4 py-3 text-center">
                  <Toggle value={p.destacado} onChange={v => onToggle(p._id, 'destacado', v)} />
                </td>
                <td className="px-4 py-3 text-center">
                  <Toggle value={p.activo} onChange={v => onToggle(p._id, 'activo', v)} />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onEdit(p)}
                      className="p-1.5 rounded-lg hover:bg-glow-border text-glow-muted hover:text-glow-pink transition-colors"
                      aria-label="Editar"
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      onClick={() => onDelete(p._id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Eliminar"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
          <span className="text-xs text-gray-500">{products.length} productos</span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-3 py-1 rounded-lg border border-gray-200 text-xs font-semibold disabled:opacity-40 hover:border-glow-pink transition-colors"
            >
              Anterior
            </button>
            <span className="px-3 py-1 text-xs text-gray-500">{page + 1} / {totalPages}</span>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="px-3 py-1 rounded-lg border border-gray-200 text-xs font-semibold disabled:opacity-40 hover:border-glow-pink transition-colors"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-5 w-9 rounded-full transition-colors ${value ? 'bg-glow-pink' : 'bg-gray-300'}`}
      aria-pressed={value}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform mt-0.5 ${value ? 'translate-x-4' : 'translate-x-0.5'}`}
      />
    </button>
  )
}
