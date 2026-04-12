import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '../data/contact'

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const chips = [
  { icon: '🕐', text: 'Respondemos en minutos' },
  { icon: '📦', text: 'Envíos a Mendoza' },
  { icon: '💳', text: 'Múltiples formas de pago' },
  { icon: '💖', text: 'Trato personalizado' },
]

export default function Contact() {
  const waUrl = `${CONTACT.whatsapp.url}?text=${CONTACT.whatsapp.defaultMessage}`

  return (
    <section id="contacto" className="relative z-10 py-20 md:py-28 overflow-hidden">

      {/* ── Fondo integrado a la página — no card, no modal ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Banda diagonal de color muy sutil */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(236,72,153,0.05) 0%, rgba(168,85,247,0.06) 45%, rgba(6,182,212,0.04) 100%)',
          }}
        />
        {/* Orbe pink izquierdo */}
        <motion.div
          className="absolute rounded-full"
          style={{
            top: '-20%', left: '-15%',
            width: '50vw', height: '50vw',
            background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
          }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Orbe cyan derecho */}
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: '-20%', right: '-10%',
            width: '45vw', height: '45vw',
            background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
          }}
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        {/* Decorativos flotantes — alejados de las esquinas */}
        <span className="absolute bottom-12 left-[8%] text-4xl opacity-15 float-b">✧</span>
        <span className="absolute top-[30%] right-[6%] text-3xl opacity-10 float-a">💖</span>
        <span className="absolute bottom-8 right-[20%] text-2xl opacity-12 float-c">✦</span>
      </div>

      {/* ── Contenido — centrado, sin wrapper card ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">

        {/* Icono animado con glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="relative"
        >
          {/* Glow detrás del icono */}
          <div
            className="absolute inset-0 rounded-3xl blur-xl"
            style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.4), rgba(168,85,247,0.3))', transform: 'scale(1.4)' }}
          />
          <motion.div
            animate={{ scale: [1, 1.07, 1], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-20 h-20 rounded-3xl gradient-shimmer flex items-center justify-center shadow-2xl shadow-glow-pink/40"
          >
            <span className="text-4xl" style={{ lineHeight: 1 }}>💬</span>
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="space-y-3"
        >
          <h2
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 3.75rem)', color: '#2d1a2e' }}
          >
            ¿Querés hacer un{' '}
            <span className="gradient-text">pedido?</span>
          </h2>
          <p className="font-body font-semibold text-lg text-glow-text/60 max-w-md mx-auto leading-relaxed">
            Escribinos y te respondemos al instante ✨
          </p>
        </motion.div>

        {/* Chips informativos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {chips.map((chip) => (
            <span
              key={chip.text}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body font-bold text-sm text-glow-text/70 border border-glow-border"
              style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(12px)' }}
            >
              <span style={{ fontSize: '15px', lineHeight: '1' }}>{chip.icon}</span>
              {chip.text}
            </span>
          ))}
        </motion.div>

        {/* Botones CTA — full-width en mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none sm:w-auto"
        >
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-white font-body font-extrabold text-lg rounded-2xl transition-shadow duration-200"
            style={{
              background: '#25d366',
              boxShadow: '0 16px 40px -8px rgba(37,211,102,0.55), 0 4px 12px -2px rgba(37,211,102,0.3)',
            }}
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={24} />
            WhatsApp
          </motion.a>

          <motion.a
            href={CONTACT.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-white font-body font-extrabold text-lg rounded-2xl transition-shadow duration-200"
            style={{
              background: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)',
              boxShadow: '0 16px 40px -8px rgba(238,42,123,0.5), 0 4px 12px -2px rgba(238,42,123,0.25)',
            }}
            aria-label="Seguir en Instagram"
          >
            <InstagramIcon />
            Instagram
          </motion.a>
        </motion.div>

        {/* Handle visible */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-body font-bold text-glow-muted/55 text-sm"
        >
          {CONTACT.instagram.handle}
        </motion.p>
      </div>
    </section>
  )
}
