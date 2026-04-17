import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { usePublicProducts } from '../hooks/usePublicProducts'

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
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-soft border border-glow-border shadow-sm">
        <span style={{ fontSize: '12px', lineHeight: 1, display: 'inline-block' }} aria-hidden="true">✦</span>
        <span className="font-body font-extrabold text-[11px] uppercase tracking-[0.22em] text-glow-muted">
          {eyebrow}
        </span>
        <span style={{ fontSize: '12px', lineHeight: 1, display: 'inline-block' }} aria-hidden="true">✦</span>
      </div>

      <h2
        className="font-display gradient-text leading-[0.95]"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)' }}
      >
        {title}
      </h2>

      <div className="section-divider max-w-xs mx-auto">
        <span className="font-body text-[11px] font-bold text-glow-muted/45 uppercase tracking-widest whitespace-nowrap px-3">
          {subtitle}
        </span>
      </div>
    </motion.div>
  )
}

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

function ProductSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-3xl border border-glow-border/50 overflow-hidden animate-pulse">
          <div className="aspect-[3/4] bg-gradient-to-br from-glow-border to-glow-soft" />
          <div className="px-4 pt-3.5 pb-4 space-y-2">
            <div className="h-2.5 w-16 bg-glow-border rounded-full" />
            <div className="h-4 w-3/4 bg-glow-border rounded-full" />
            <div className="h-3 w-1/2 bg-glow-border/60 rounded-full" />
            <div className="h-10 bg-glow-border rounded-xl mt-2" />
          </div>
        </div>
      ))}
    </>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full text-center py-12">
      <p className="font-display text-2xl text-glow-pink/50">Próximamente...</p>
      <p className="font-body text-sm text-glow-muted/60 mt-2">Estamos cargando los productos ✨</p>
    </div>
  )
}

export default function Products() {
  const featured = usePublicProducts({ destacado: true })
  const catalog  = usePublicProducts()

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
            {featured.loading ? (
              <ProductSkeleton count={4} />
            ) : featured.products.length === 0 ? (
              <EmptyState />
            ) : (
              featured.products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)
            )}
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
            {catalog.loading ? (
              <ProductSkeleton count={6} />
            ) : catalog.products.length === 0 ? (
              <EmptyState />
            ) : (
              catalog.products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
