import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import logo from '../../assets/logo.png'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading, error } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const ok = await login(email, password)
    if (ok) void navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-glow-soft flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6">
        <img src={logo} alt="Mica Glow Up" className="h-16 w-auto" />
        <div className="text-center">
          <h1 className="font-display text-2xl text-glow-text">Panel Admin</h1>
          <p className="text-sm font-body text-glow-muted mt-1">Mica Glow Up</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-glow-border bg-glow-soft text-glow-text text-sm font-body outline-none focus:ring-2 focus:ring-glow-pink/40"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-glow-border bg-glow-soft text-glow-text text-sm font-body outline-none focus:ring-2 focus:ring-glow-pink/40"
          />
          {error && <p className="text-red-500 text-xs font-body text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white text-sm font-body font-bold gradient-brand disabled:opacity-60 transition-opacity"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
