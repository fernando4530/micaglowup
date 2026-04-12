import { motion } from 'framer-motion'
import type { Product } from '../types'
import { CONTACT } from '../data/contact'

interface ProductCardProps {
  product: Product
  index: number
}

const badgeStyles = [
  { bg: 'linear-gradient(135deg, #ec4899, #a855f7)', shadow: 'rgba(236,72,153,0.45)' },
  { bg: 'linear-gradient(135deg, #a855f7, #06b6d4)', shadow: 'rgba(168,85,247,0.45)' },
  { bg: 'linear-gradient(135deg, #06b6d4, #a855f7)', shadow: 'rgba(6,182,212,0.45)'  },
  { bg: 'linear-gradient(135deg, #ec4899, #06b6d4)', shadow: 'rgba(236,72,153,0.45)' },
]

export default function ProductCard({ product, index }: ProductCardProps) {
  const waUrl = `${CONTACT.whatsapp.url}?text=${encodeURIComponent(product.whatsappText)}`
  const badge = badgeStyles[index % badgeStyles.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 4) * 0.09 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="card-glow group relative bg-white rounded-3xl border border-glow-border/50 shadow-md overflow-hidden flex flex-col transition-all duration-300"
    >
      {/* Badge flotante */}
      <motion.div
        className="absolute top-3 left-3 z-20"
        whileHover={{ y: -2, scale: 1.06 }}
        transition={{ duration: 0.2 }}
      >
        <span
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-white font-body font-extrabold text-[11px] uppercase tracking-widest"
          style={{
            background: badge.bg,
            boxShadow: `0 4px 14px -3px ${badge.shadow}`,
          }}
        >
          {product.badgeEmoji} {product.badge}
        </span>
      </motion.div>

      {/* Imagen — sin ningún overlay que afecte los colores reales */}
      <div className="relative aspect-[3/4] overflow-hidden bg-glow-soft">
        <motion.img
          src={new URL(`../assets/products/${product.image}`, import.meta.url).href}
          alt={`${product.name} de ${product.brand}`}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Solo en el borde inferior, muy sutil, NO encima del artwork */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(236,72,153,0.06), transparent)' }}
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 px-4 pt-3.5 pb-4 gap-1.5">
        {/* Marca */}
        <span
          className="font-body font-extrabold text-[10px] uppercase tracking-[0.18em]"
          style={{ color: '#a855f7' }}
        >
          {product.brand}
        </span>

        {/* Nombre del producto */}
        <h3 className="font-display text-[1.1rem] leading-tight text-glow-text">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="font-body font-semibold text-[13px] text-glow-text/50 leading-snug flex-1">
          {product.description}
        </p>

        {/* CTA "¡Lo quiero!" — prominente, gradiente, con emoji */}
        <motion.a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3.5 gradient-shimmer text-white font-body font-extrabold text-sm rounded-xl transition-shadow duration-200"
          style={{
            boxShadow: '0 8px 24px -6px rgba(236,72,153,0.4)',
          }}
          aria-label={`Consultar por ${product.name} en WhatsApp`}
        >
          <span style={{ fontSize: '15px', lineHeight: 1 }}>💬</span>
          ¡Lo quiero!
        </motion.a>
      </div>
    </motion.article>
  )
}
