import { useState } from "react"
import { motion } from "motion/react"
import { Star, ShoppingCart, Info, MapPin, Check } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export function Product() {
  const [selectedSize, setSelectedSize] = useState("12oz")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="min-h-screen bg-brand-white pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-sans text-gray-500 mb-8 uppercase tracking-wider">
          <span>Home</span>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span className="text-brand-black font-bold">Original Bold</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/5] bg-brand-gray rounded-3xl flex items-center justify-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent" />
              <motion.img
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
                alt="PULSE Original Bold"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Bestseller</span>
                <span className="bg-brand-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Zero Sugar</span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 mt-6">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className="w-20 h-20 bg-brand-gray rounded-xl p-2 border-2 border-transparent hover:border-brand-blue transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=200&auto=format&fit=crop"
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-brand-red">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-sm font-sans text-gray-500 underline cursor-pointer">4.9 (2,104 Reviews)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display mb-4 text-brand-black">ORIGINAL BOLD</h1>
            <p className="text-2xl font-sans font-bold text-brand-blue mb-6">$29.99 <span className="text-sm text-gray-500 font-normal">/ 12-Pack</span></p>

            <p className="text-lg font-sans text-gray-600 mb-8 leading-relaxed">
              The flavor that started it all. A bold, electrifying citrus blend with a smooth finish and zero crash. Formulated with B-vitamins and natural caffeine to keep your pulse racing.
            </p>

            {/* Flavor Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Citrus", "Bold", "Zero Sugar", "200mg Caffeine"].map((tag) => (
                <span key={tag} className="bg-brand-gray text-brand-black px-4 py-2 rounded-full text-sm font-sans font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-sans font-bold uppercase tracking-wider mb-4">Select Size</h3>
              <div className="flex gap-4">
                {["12oz", "16oz", "24oz"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl border-2 font-sans font-bold transition-colors ${
                      selectedSize === size
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-gray-200 text-gray-600 hover:border-brand-blue"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border-2 border-gray-200 rounded-full h-14 w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center text-xl text-gray-500 hover:text-brand-black transition-colors"
                >-</button>
                <span className="flex-1 text-center font-sans font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center text-xl text-gray-500 hover:text-brand-black transition-colors"
                >+</button>
              </div>
              <Button 
                size="lg" 
                className="flex-1 h-14 text-lg gap-2"
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? (
                  <><Check className="w-5 h-5" /> Added to Cart</>
                ) : (
                  <><ShoppingCart className="w-5 h-5" /> Add to Cart - ${(29.99 * quantity).toFixed(2)}</>
                )}
              </Button>
            </div>

            {/* Store Locator CTA */}
            <div className="bg-brand-gray rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-brand-black">Need it now?</h4>
                  <p className="text-sm text-gray-500 font-sans">Find it at a store near you.</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Locate</Button>
            </div>

            {/* Nutritional Info Accordion (Simplified) */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <button className="flex items-center justify-between w-full text-left group">
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-gray-400 group-hover:text-brand-blue transition-colors" />
                  <span className="font-display text-2xl text-brand-black">NUTRITIONAL INFO</span>
                </div>
                <span className="text-2xl text-gray-400 group-hover:text-brand-blue transition-colors">+</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-16 border-t border-gray-200">
          <h2 className="text-4xl md:text-5xl font-display mb-12 text-center">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "CHERRY ZERO", color: "bg-brand-red", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop" },
              { name: "ELECTRIC LIME", color: "bg-brand-accent", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop" },
              { name: "MANGO TANGO", color: "bg-orange-500", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop" },
              { name: "BERRY BLAST", color: "bg-purple-600", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop" },
            ].map((product, i) => (
              <div key={product.name} className="group cursor-pointer">
                <div className="bg-brand-gray rounded-3xl p-8 mb-6 relative overflow-hidden aspect-[4/5] flex items-center justify-center">
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 ${product.color}`} />
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                    style={{ filter: `hue-rotate(${i * 60}deg)` }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-display mb-1">{product.name}</h3>
                <p className="font-sans font-bold text-gray-600">$29.99</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
