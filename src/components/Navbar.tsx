import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Productos', href: '#productos' },
  { label: 'Novedades', href: '#novedades' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'navbar-scrolled-border'
          : ''
      }`}
      style={
        scrolled
          ? {
              background: 'rgba(255, 240, 248, 0.72)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            }
          : {}
      }
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className="relative px-5 py-2.5 font-body font-bold text-[15px] text-glow-text hover:text-glow-pink transition-colors duration-200 group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #ec4899, #a855f7, #06b6d4)',
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '70%' }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/5492617060496?text=Hola!%20Vi%20sus%20productos%20en%20Mica%20Glow%20Up%20y%20quiero%20consultar%20%F0%9F%92%84"
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

          {/* Mobile: nada en v1 */}
          <div className="md:hidden" />
        </div>
      </div>

      {/* Borde gradiente bottom (visible solo scrolled) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
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
