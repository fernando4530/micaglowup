const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8081/api'

function authHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('mg_admin_token') ?? ''}`,
  }
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error((body as { message?: string }).message ?? `HTTP ${res.status}`)
  }
  return res.json()
}

export async function login(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  return handleResponse<{ token: string; user: { id: string; email: string; role: string } }>(res)
}

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products/all`, { headers: authHeaders() })
  return handleResponse<AdminProductRaw[]>(res)
}

export async function createProduct(data: unknown) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data),
  })
  return handleResponse<AdminProductRaw>(res)
}

export async function updateProduct(id: string, data: unknown) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data),
  })
  return handleResponse<AdminProductRaw>(res)
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  return handleResponse<{ message: string }>(res)
}

interface AdminProductRaw {
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
