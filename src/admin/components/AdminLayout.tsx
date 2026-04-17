import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Package, LogOut, Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'

interface AdminLayoutProps {
  title: string
  children: React.ReactNode
}

export default function AdminLayout({ title, children }: AdminLayoutProps) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)

  function handleLogout() {
    logout()
    void navigate('/admin/login')
  }

  return (
    <div className="min-h-screen flex">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 flex-shrink-0 bg-[#1e1e2e] flex-col">
        <div className="px-4 py-5 border-b border-white/10">
          <img src={logo} alt="Mica Glow Up" className="h-10 w-auto" />
        </div>
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          <button
            onClick={() => void navigate('/admin')}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-glow-pink/20 hover:text-white text-sm font-body font-semibold transition-colors w-full text-left"
          >
            <Package size={16} className="text-glow-pink" />
            Productos
          </button>
        </nav>
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 text-sm font-body font-semibold transition-colors w-full text-left"
          >
            <LogOut size={16} />
            Salir
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={20} className="text-glow-text" />
          </button>
          <h1 className="font-display text-xl text-glow-text">{title}</h1>
        </header>
        <main className="flex-1 px-4 md:px-6 py-6">{children}</main>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-[#1e1e2e] flex flex-col md:hidden">
            <div className="px-4 py-5 border-b border-white/10 flex items-center justify-between">
              <img src={logo} alt="Mica Glow Up" className="h-10 w-auto" />
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={18} className="text-white/60" />
              </button>
            </div>
            <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
              <button
                onClick={() => { void navigate('/admin'); setDrawerOpen(false) }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-glow-pink/20 hover:text-white text-sm font-body font-semibold transition-colors w-full text-left"
              >
                <Package size={16} className="text-glow-pink" />
                Productos
              </button>
            </nav>
            <div className="px-3 py-4 border-t border-white/10">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 text-sm font-body font-semibold transition-colors w-full text-left"
              >
                <LogOut size={16} />
                Salir
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
