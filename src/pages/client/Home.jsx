import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import { useProducts } from '../../hooks/useProducts.js'

export default function Home() {
  const { products, loading } = useProducts({ limit: 6, isFeatured: true })

  return (
    <div className="w-full flex flex-col pt-0 pb-0">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden flex items-end pb-16 pl-0">
        {/* Ken Burns Background */}
        <motion.div
          className="absolute inset-0 z-0 origin-center"
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1.0] }}
          transition={{ duration: 12, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Fashion Editorial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/30" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start w-full max-w-7xl mx-auto px-8">
          <motion.h1
            className="font-display text-[clamp(80px,14vw,180px)] font-light text-cream leading-none lowercase m-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            silence
          </motion.h1>

          <motion.p
            className="text-cream text-[10px] tracking-luxury uppercase font-sans mt-2 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            Dressed in Silence
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <Link to="/products" className="border border-cream text-cream bg-transparent px-8 py-3.5 rounded-none text-xs tracking-luxury uppercase hover:bg-parchment hover:text-charcoal hover:border-parchment transition-colors duration-300 inline-block focus:outline-none">
              Explore Collection
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 md:bottom-16 flex flex-col items-center gap-2">
          <motion.div
            className="w-px h-12 bg-cream/50 origin-top"
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="w-full py-4 border-y border-silk overflow-hidden bg-bg flex">
        <div className="whitespace-nowrap animate-marquee flex items-center">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[10px] md:text-xs tracking-luxury uppercase text-warmgray font-sans mx-4">
              New Collection — SS25 — Kova — Luxury Apparel —
            </span>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-4xl font-light text-charcoal m-0">The Collection</h2>
          <Link to="/products" className="text-xs tracking-luxury uppercase text-warmgray hover:text-charcoal transition-colors focus:outline-none">
            View All
          </Link>
        </div>

        {loading ? (
          <div className="w-full h-64 flex items-center justify-center font-sans text-xs text-warmgray uppercase tracking-luxury">Loading curations...</div>
        ) : (
          <ProductGrid>
            {products?.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </ProductGrid>
        )}
      </section>
    </div>
  )
}
