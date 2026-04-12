import { motion } from 'framer-motion'
import { CONTACT } from '../data/contact'

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

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
            <WhatsAppIcon />
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


      </div>
    </section>
  )
}
