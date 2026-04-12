import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import logo from '../assets/logo.png'
import { CONTACT } from '../data/contact'

/* Elementos flotantes — en los bordes, para no competir con el logo grande */
const floaters = [
  { emoji: '✦', top: '14%', left: '4%',  size: 26, delay: 0,    duration: 5,  cls: 'float-a' },
  { emoji: '💖', top: '10%', left: '14%', size: 20, delay: 0.3,  duration: 6,  cls: 'float-b' },
  { emoji: '✧', top: '32%', left: '2%',  size: 18, delay: 1.2,  duration: 4,  cls: 'float-c' },
  { emoji: '⭐', top: '56%', left: '4%',  size: 22, delay: 0.6,  duration: 7,  cls: 'float-b' },
  { emoji: '💫', top: '72%', left: '10%', size: 24, delay: 1.8,  duration: 5,  cls: 'float-a' },
  { emoji: '✦', top: '12%', right: '5%', size: 24, delay: 0.9,  duration: 6,  cls: 'float-c' },
  { emoji: '💕', top: '27%', right: '3%', size: 20, delay: 0.2,  duration: 5,  cls: 'float-a' },
  { emoji: '✨', top: '48%', right: '3%', size: 18, delay: 1.5,  duration: 7,  cls: 'float-b' },
  { emoji: '🌸', top: '67%', right: '7%', size: 22, delay: 0.7,  duration: 4,  cls: 'float-c' },
  { emoji: '💜', top: '83%', left: '18%', size: 18, delay: 1,    duration: 5,  cls: 'float-b' },
  { emoji: '✧', top: '80%', right: '13%', size: 16, delay: 2.1,  duration: 6,  cls: 'float-a' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* ── Mesh gradient background animado ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute rounded-full"
          style={{
            top: '-15%', left: '-10%',
            width: '70vw', height: '70vw',
            background: 'radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)',
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            top: '30%', right: '-15%',
            width: '60vw', height: '60vw',
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          }}
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: '-10%', left: '30%',
            width: '55vw', height: '55vw',
            background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)',
          }}
          animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      {/* ── Floaters decorativos en los bordes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {floaters.map((f, i) => (
          <motion.span
            key={i}
            className={f.cls}
            style={{
              position: 'absolute',
              top:   f.top,
              left:  f.left,
              right: f.right,
              fontSize: f.size,
              lineHeight: 1,
              animationDelay: `${f.delay}s`,
              animationDuration: `${f.duration}s`,
              opacity: 0.55,
              filter: 'drop-shadow(0 0 5px rgba(236,72,153,0.45))',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.55, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.06, duration: 0.5, ease: 'backOut' }}
          >
            {f.emoji}
          </motion.span>
        ))}

        {/* Anillo orbital giratorio — 900px para efecto dramático en desktop */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 900, height: 900 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          <svg
            width="900"
            height="900"
            viewBox="0 0 900 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity="0.07"
          >
            <circle
              cx="450"
              cy="450"
              r="444"
              stroke="url(#ringGradLarge)"
              strokeWidth="2"
              strokeDasharray="14 22"
            />
            <defs>
              <linearGradient
                id="ringGradLarge"
                x1="0" y1="0" x2="900" y2="900"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ec4899" />
                <stop offset="0.4" stopColor="#a855f7" />
                <stop offset="0.8" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Segundo anillo — rotación opuesta, más pequeño */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 620, height: 620 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="620" height="620" viewBox="0 0 620 620" fill="none" opacity="0.05">
            <circle
              cx="310" cy="310" r="306"
              stroke="url(#ringGradSmall)"
              strokeWidth="1.5"
              strokeDasharray="6 28"
            />
            <defs>
              <linearGradient id="ringGradSmall" x1="0" y1="0" x2="620" y2="620" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06b6d4" />
                <stop offset="0.5" stopColor="#a855f7" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* ── Contenido principal ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto gap-3">

        {/* Pill de slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-soft border border-glow-border shadow-md"
        >
          <span style={{ fontSize: '14px', lineHeight: 1 }}>💄</span>
          <span className="font-body font-extrabold text-xs uppercase tracking-[0.2em] text-glow-muted">
            Maquillaje femenino · Mendoza
          </span>
          <span style={{ fontSize: '14px', lineHeight: 1 }}>💄</span>
        </motion.div>

        {/* ─── LOGO — protagonista absoluto ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.55 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'backOut', delay: 0.1 }}
          className="relative flex items-center justify-center my-3"
        >
          {/* Halo 1 — pink. x/y como motion values: se componen con scale sin conflicto */}
          <motion.div
            className="absolute rounded-full"
            style={{
              top: '50%', left: '50%',
              x: '-50%', y: '-50%',
              width: 'clamp(300px, 56vw, 560px)',
              height: 'clamp(300px, 56vw, 560px)',
              border: '3px solid rgba(236,72,153,0.65)',
              boxShadow: '0 0 30px 8px rgba(236,72,153,0.22), inset 0 0 20px 4px rgba(236,72,153,0.08)',
            }}
            animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Halo 2 — violet */}
          <motion.div
            className="absolute rounded-full"
            style={{
              top: '50%', left: '50%',
              x: '-50%', y: '-50%',
              width: 'clamp(380px, 70vw, 700px)',
              height: 'clamp(380px, 70vw, 700px)',
              border: '2px solid rgba(168,85,247,0.45)',
              boxShadow: '0 0 24px 5px rgba(168,85,247,0.18)',
            }}
            animate={{ scale: [1, 1.07, 1], opacity: [0.35, 0.82, 0.35] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          />

          {/* Halo 3 — cyan, exterior */}
          <motion.div
            className="absolute rounded-full"
            style={{
              top: '50%', left: '50%',
              x: '-50%', y: '-50%',
              width: 'clamp(460px, 84vw, 840px)',
              height: 'clamp(460px, 84vw, 840px)',
              border: '1.5px solid rgba(6,182,212,0.3)',
              boxShadow: '0 0 18px 4px rgba(6,182,212,0.12)',
            }}
            animate={{ scale: [1.02, 0.96, 1.02], opacity: [0.22, 0.55, 0.22] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          />

          {/* Glow blob — sin animación FM propia, CSS transform directo */}
          <div
            className="absolute rounded-full"
            style={{
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'clamp(240px, 44vw, 450px)',
              height: 'clamp(240px, 44vw, 450px)',
              background: 'radial-gradient(circle, rgba(236,72,153,0.42) 0%, rgba(168,85,247,0.22) 50%, transparent 75%)',
              filter: 'blur(28px)',
            }}
          />

          {/* LOGO — 220px mobile / 360px desktop */}
          <motion.img
            src={logo}
            alt="Mica Glow Up — Logo oficial"
            className="relative z-10 object-contain"
            style={{
              width: 'clamp(220px, 38vw, 360px)',
              height: 'clamp(220px, 38vw, 360px)',
              filter: 'drop-shadow(0 12px 40px rgba(236,72,153,0.55)) drop-shadow(0 0 16px rgba(168,85,247,0.35))',
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
        </motion.div>

        {/* H1 — elegante y subordinado, una sola línea */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.28 }}
          className="font-display gradient-text leading-tight"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
        >
          ¡Brilla, sé tú, Glow Up!
        </motion.h1>

        {/* Subtítulo — compacto */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className="font-body font-semibold text-sm md:text-base text-glow-text/65 max-w-sm leading-relaxed"
        >
          Los mejores productos de maquillaje{' '}
          <span
            className="font-extrabold"
            style={{
              background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            al mejor precio
          </span>{' '}
          💄
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex items-center gap-4 justify-center"
        >
          <div className="flex flex-col items-center">
            <span className="font-display text-xl gradient-text leading-tight">13</span>
            <span className="font-body text-[11px] font-semibold text-glow-text/45 uppercase tracking-wider">
              productos
            </span>
          </div>
          <span className="text-glow-pink/25 font-display text-lg select-none" aria-hidden="true">·</span>
          <div className="flex flex-col items-center">
            <span className="font-display text-xl gradient-text leading-tight">3</span>
            <span className="font-body text-[11px] font-semibold text-glow-text/45 uppercase tracking-wider">
              marcas top
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.52 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1"
        >
          <motion.a
            href="#productos"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 gradient-shimmer text-white font-body font-extrabold text-base rounded-full shadow-xl shadow-glow-pink/35 hover:shadow-glow-pink/55 transition-shadow duration-200"
          >
            <ShoppingBag size={18} />
            Ver productos
          </motion.a>
          <motion.a
            href={`${CONTACT.whatsapp.url}?text=${CONTACT.whatsapp.defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-white border-2 border-glow-pink text-glow-pink font-body font-extrabold text-base rounded-full shadow-lg hover:bg-glow-soft hover:shadow-glow-pink/25 transition-all duration-200"
          >
            <span style={{ lineHeight: 1 }}>💬</span> Escribinos
          </motion.a>
        </motion.div>

      </div>

    </section>
  )
}
