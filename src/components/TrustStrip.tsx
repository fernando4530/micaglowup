import { motion } from 'framer-motion'

interface TrustPill {
  emoji: string
  label: string
  sublabel: string
  accentColor: string
  gradient: string
  shadow: string
}

const pills: TrustPill[] = [
  {
    emoji: '🚀',
    label: 'Envíos rápidos',
    sublabel: 'Mendoza y alrededores',
    accentColor: '#ec4899',
    gradient: 'linear-gradient(135deg, #fff0f8 0%, #fce7f3 100%)',
    shadow: 'rgba(236,72,153,0.22)',
  },
  {
    emoji: '💯',
    label: 'Calidad garantizada',
    sublabel: 'Marcas reconocidas',
    accentColor: '#a855f7',
    gradient: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
    shadow: 'rgba(168,85,247,0.22)',
  },
  {
    emoji: '💬',
    label: 'Atención personalizada',
    sublabel: 'Te respondemos al toque',
    accentColor: '#06b6d4',
    gradient: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
    shadow: 'rgba(6,182,212,0.22)',
  },
  {
    emoji: '✨',
    label: 'Marcas reconocidas',
    sublabel: 'Pink21 · TEI · 4Angels',
    accentColor: '#a855f7',
    gradient: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
    shadow: 'rgba(168,85,247,0.22)',
  },
]

export default function TrustStrip() {
  return (
    <section className="relative z-10 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {pills.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: 'backOut' }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 pr-5 pl-4 py-3 rounded-2xl border border-white/90 overflow-hidden"
              style={{
                background: pill.gradient,
                boxShadow: `0 4px 20px -4px ${pill.shadow}, 0 1px 3px rgba(0,0,0,0.04)`,
                /* Acento de color lateral */
                borderLeft: `4px solid ${pill.accentColor}`,
              }}
            >
              {/* Emoji con métricas fijas para alineación consistente */}
              <span
                style={{
                  fontSize: '28px',
                  lineHeight: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {pill.emoji}
              </span>

              {/* Texto */}
              <div className="text-left leading-none">
                <p className="font-body font-extrabold text-sm text-glow-text leading-tight">
                  {pill.label}
                </p>
                <p className="font-body text-xs font-semibold leading-tight mt-0.5 whitespace-nowrap"
                  style={{ color: pill.accentColor, opacity: 0.75 }}
                >
                  {pill.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
