import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { CONTACT } from '../data/contact'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="relative z-10">
      {/* Separador superior con gradiente de marca */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ec4899 25%, #a855f7 50%, #06b6d4 75%, transparent 100%)',
          opacity: 0.55,
        }}
      />

      <div
        className="relative"
        style={{
          background: 'linear-gradient(180deg, rgba(255,240,248,0.85) 0%, rgba(255,255,255,0.98) 100%)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-5">

            {/* Logo grande + slogan */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              {/* Logo a 96px para que el artwork sea claramente visible */}
              <img
                src={logo}
                alt="Mica Glow Up"
                style={{
                  height: '96px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 6px 18px rgba(236,72,153,0.35))',
                }}
              />
              <h3
                className="font-display gradient-text"
                style={{ fontSize: 'clamp(1.35rem, 4vw, 2rem)' }}
              >
                ¡Brilla, sé tú, Glow Up!
              </h3>
              <p className="font-body font-semibold text-xs text-glow-text/45 uppercase tracking-widest">
                Maquillaje · Beauty · Mendoza, Argentina
              </p>
            </motion.div>

            {/* Botones de redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 flex-wrap justify-center"
            >
              <a
                href={`${CONTACT.whatsapp.url}?text=${CONTACT.whatsapp.defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-bold text-sm text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: '#25d366',
                  boxShadow: '0 4px 16px -4px rgba(37,211,102,0.5)',
                }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              <a
                href={CONTACT.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-bold text-sm text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)',
                  boxShadow: '0 4px 16px -4px rgba(238,42,123,0.45)',
                }}
                aria-label="Instagram"
              >
                <InstagramIcon />
                {CONTACT.instagram.handle}
              </a>
            </motion.div>

            {/* Divider */}
            <div
              className="w-48 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent)' }}
            />

            {/* Copyright */}
            <p className="font-body text-[11px] font-semibold text-glow-text/35 text-center">
              © 2026 Mica Glow Up · Mendoza, Argentina · Hecho con 💖
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
