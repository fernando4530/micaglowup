import { useState, useEffect, useRef, type FormEvent } from 'react'
import { X, ImageIcon, Loader2 } from 'lucide-react'
import type { AdminProduct } from '../../types'
import { uploadImage } from '../api/adminApi'

interface ProductFormProps {
  initial?: AdminProduct | null
  onSubmit: (data: Partial<AdminProduct>) => Promise<void>
  onClose: () => void
}

const EMPTY: Partial<AdminProduct> = {
  nombre: '', marca: '', descripcion: '', precio: undefined,
  stock: 0, imagen: '', categoria: '', destacado: false, activo: true,
}

export default function ProductForm({ initial, onSubmit, onClose }: ProductFormProps) {
  const [form, setForm] = useState<Partial<AdminProduct>>(EMPTY)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setForm(initial ?? EMPTY)
  }, [initial])

  function set<K extends keyof AdminProduct>(key: K, value: AdminProduct[K]) {
    setForm(f => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      await onSubmit(form)
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-display text-lg text-glow-text">
            {initial ? 'Editar producto' : 'Nuevo producto'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Nombre" required>
              <input value={form.nombre ?? ''} onChange={e => set('nombre', e.target.value)} required className={inputCls} />
            </Field>
            <Field label="Marca" required>
              <input value={form.marca ?? ''} onChange={e => set('marca', e.target.value)} required className={inputCls} />
            </Field>
          </div>
          <Field label="Descripción">
            <input value={form.descripcion ?? ''} onChange={e => set('descripcion', e.target.value)} className={inputCls} />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label="Precio">
              <input
                type="number"
                min={0}
                value={form.precio ?? ''}
                onChange={e => set('precio', e.target.value === '' ? undefined : e.target.valueAsNumber)}
                className={inputCls}
              />
            </Field>
            <Field label="Stock">
              <input type="number" min={0} value={form.stock ?? 0} onChange={e => set('stock', e.target.valueAsNumber)} required className={inputCls} />
            </Field>
            <Field label="Categoría">
              <input value={form.categoria ?? ''} onChange={e => set('categoria', e.target.value)} className={inputCls} />
            </Field>
          </div>
          <Field label="Imagen">
            <ImageUploader
              value={form.imagen ?? ''}
              onChange={url => set('imagen', url)}
            />
          </Field>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm font-body font-semibold text-glow-text cursor-pointer">
              <input type="checkbox" checked={form.destacado ?? false} onChange={e => set('destacado', e.target.checked)} className="accent-glow-pink" />
              Destacado
            </label>
            <label className="flex items-center gap-2 text-sm font-body font-semibold text-glow-text cursor-pointer">
              <input type="checkbox" checked={form.activo ?? true} onChange={e => set('activo', e.target.checked)} className="accent-glow-pink" />
              Activo
            </label>
          </div>
          {error && <p className="text-red-500 text-xs font-body">{error}</p>}
        </form>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-body font-semibold hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
          <button
            onClick={e => void handleSubmit(e as unknown as FormEvent)}
            disabled={saving}
            className="px-4 py-2 rounded-xl gradient-brand text-white text-sm font-body font-bold disabled:opacity-60 transition-opacity"
          >
            {saving ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </div>
    </div>
  )
}

const inputCls = 'w-full px-3 py-2 rounded-xl border border-glow-border bg-glow-soft text-glow-text text-sm font-body outline-none focus:ring-2 focus:ring-glow-pink/40'

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-body font-extrabold uppercase tracking-widest text-glow-muted">
        {label}{required && <span className="text-glow-pink ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

type UploadStatus = 'idle' | 'uploading' | 'done' | 'error'

function ImageUploader({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const [status, setStatus] = useState<UploadStatus>('idle')
  const [uploadError, setUploadError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File) {
    setStatus('uploading')
    setUploadError(null)
    try {
      const url = await uploadImage(file)
      onChange(url)
      setStatus('done')
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Error al subir')
      setStatus('error')
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className="h-20 w-20 flex-shrink-0 rounded-xl border border-glow-border bg-glow-soft overflow-hidden flex items-center justify-center">
        {value ? (
          <img src={value} alt="Preview" className="h-full w-full object-cover" />
        ) : (
          <ImageIcon size={24} className="text-glow-border" />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={status === 'uploading'}
          className="px-3 py-1.5 rounded-lg border border-glow-border text-xs font-body font-bold text-glow-muted hover:border-glow-pink hover:text-glow-pink transition-colors disabled:opacity-50"
        >
          {status === 'uploading' ? (
            <span className="flex items-center gap-1.5">
              <Loader2 size={12} className="animate-spin" /> Subiendo...
            </span>
          ) : value ? 'Cambiar foto' : 'Elegir foto'}
        </button>
        {status === 'error' && <p className="text-red-500 text-xs font-body">{uploadError}</p>}
        {status === 'done' && <p className="text-green-500 text-xs font-body">¡Imagen subida!</p>}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) void handleFile(f) }}
      />
    </div>
  )
}
