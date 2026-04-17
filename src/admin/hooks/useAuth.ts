import { useState } from 'react'
import { login as apiLogin } from '../api/adminApi'

const TOKEN_KEY = 'mg_admin_token'

export function useAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY)
  }

  async function login(email: string, password: string): Promise<boolean> {
    setLoading(true)
    setError(null)
    try {
      const data = await apiLogin(email, password)
      localStorage.setItem(TOKEN_KEY, data.token)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión')
      return false
    } finally {
      setLoading(false)
    }
  }

  function logout(): void {
    localStorage.removeItem(TOKEN_KEY)
  }

  return { login, logout, isAuthenticated, loading, error }
}
