import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { CONTACT } from '../data/contact'

const navLinks = [
  { label: 'Más Vendidos', id: 'productos' },
  { label: 'Catálogo',     id: 'novedades' },
  { label: 'Contacto',     id: 'contacto'  },
]

const glassStyle = {
  background: 'rgba(255, 240, 248, 0.82)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
} as const

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }, 300)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? 'navbar-scrolled-border' : ''
      }`}
      style={scrolled || menuOpen ? glassStyle : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <a href="#inicio" className="flex items-center group flex-shrink-0">
            <motion.img
              src={logo}
              alt="Mica Glow Up"
              className="h-14 md:h-16 w-auto object-contain"
              whileHover={{ scale: 1.08, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="relative px-5 py-2.5 font-body font-bold text-[15px] text-glow-text hover:text-glow-pink transition-colors duration-200 group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #ec4899, #a855f7, #06b6d4)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '70%' }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}

            <motion.a
              href={`${CONTACT.whatsapp.url}?text=${CONTACT.whatsapp.defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="ml-4 px-6 py-3 gradient-shimmer text-white font-body font-extrabold text-sm rounded-full shadow-lg shadow-glow-pink/30 hover:shadow-glow-pink/50 transition-shadow duration-200"
            >
              💬 Pedir ahora
            </motion.a>
          </div>

          {/* Mobile: hamburger button */}
          <motion.button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-glow-pink"
            style={{ background: 'rgba(236,72,153,0.09)' }}
            onClick={() => setMenuOpen((o) => !o)}
            whileTap={{ scale: 0.88 }}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: 90,  opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  style={{ display: 'flex' }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  style={{ display: 'flex' }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{    height: 0,    opacity: 0 }}
            transition={{ duration: 0.26, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={glassStyle}
          >
            <div className="px-4 pb-5 pt-1 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.22 }}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-body font-bold text-[15px] text-glow-text hover:text-glow-pink hover:bg-glow-pink/5 transition-all duration-150 w-full text-left"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
                  />
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                href={`${CONTACT.whatsapp.url}?text=${CONTACT.whatsapp.defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.22 }}
                className="mt-3 flex items-center justify-center gap-2 py-3.5 gradient-shimmer text-white font-body font-extrabold text-sm rounded-xl shadow-lg shadow-glow-pink/30"
              >
                💬 Pedir ahora
              </motion.a>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Borde gradiente bottom (scrolled, menú cerrado) */}
      <AnimatePresence>
        {scrolled && !menuOpen && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{    scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #ec4899 25%, #a855f7 50%, #06b6d4 75%, transparent 100%)',
              transformOrigin: 'center',
            }}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
