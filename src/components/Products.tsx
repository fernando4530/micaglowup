import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { products } from '../data/products'

const featuredProducts = products.filter((p) => p.featured)
const otherProducts    = products.filter((p) => !p.featured)

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
}

function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="text-center space-y-5"
    >
      {/* Eyebrow pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-soft border border-glow-border shadow-sm">
        <span
          style={{ fontSize: '12px', lineHeight: 1, display: 'inline-block' }}
          aria-hidden="true"
        >
          ✦
        </span>
        <span className="font-body font-extrabold text-[11px] uppercase tracking-[0.22em] text-glow-muted">
          {eyebrow}
        </span>
        <span
          style={{ fontSize: '12px', lineHeight: 1, display: 'inline-block' }}
          aria-hidden="true"
        >
          ✦
        </span>
      </div>

      {/* Título — más grande y más impacto */}
      <h2
        className="font-display gradient-text leading-[0.95]"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)' }}
      >
        {title}
      </h2>

      {/* Separador decorativo */}
      <div className="section-divider max-w-xs mx-auto">
        <span className="font-body text-[11px] font-bold text-glow-muted/45 uppercase tracking-widest whitespace-nowrap px-3">
          {subtitle}
        </span>
      </div>
    </motion.div>
  )
}

/* Separador visual entre subsecciones */
function SectionBreak() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <div
        className="h-px flex-1 max-w-32"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.25))' }}
      />
      <span style={{ fontSize: '18px', lineHeight: 1, opacity: 0.4 }}>✦</span>
      <span style={{ fontSize: '18px', lineHeight: 1, opacity: 0.25 }}>✧</span>
      <span style={{ fontSize: '18px', lineHeight: 1, opacity: 0.4 }}>✦</span>
      <div
        className="h-px flex-1 max-w-32"
        style={{ background: 'linear-gradient(90deg, rgba(236,72,153,0.25), transparent)' }}
      />
    </div>
  )
}

export default function Products() {
  return (
    <section id="productos" className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── Más vendidos ── */}
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Catálogo · Favoritas"
            title="⭐ Más vendidos"
            subtitle="Los que todas piden"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>

        <SectionBreak />

        {/* ── Todo el catálogo ── */}
        <div id="novedades" className="scroll-mt-[90px] space-y-10">
          <SectionHeader
            eyebrow="Explorar · Todo"
            title="💄 Todo el catálogo"
            subtitle="Encontrá tu próximo favorito"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {otherProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
