import { motion } from "motion/react"
import { ArrowRight, Play, Star, MapPin, Mail, Zap } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=2000&auto=format&fit=crop"
            alt="Energetic lifestyle"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-display mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-white to-brand-red">
              FEEL THE <br /> PULSE
            </h1>
            <p className="text-lg md:text-2xl font-sans font-medium mb-10 text-gray-200 max-w-2xl mx-auto">
              Zero sugar. Maximum energy. The bold new flavor taking over the streets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg px-10">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10 border-white text-white hover:bg-white hover:text-brand-black">
                <Play className="w-5 h-5 mr-2" /> Watch Anthem
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Can Element */}
        <motion.div
          initial={{ y: 100, opacity: 0, rotate: -10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="absolute bottom-[-10%] right-[10%] w-64 md:w-96 z-20 hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
            alt="Pulse Can"
            className="w-full h-auto drop-shadow-2xl rounded-3xl"
            style={{ filter: "hue-rotate(200deg) saturate(2)" }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* 2. Social Proof */}
      <section className="bg-brand-blue text-white py-12 overflow-hidden border-y-4 border-brand-red">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-12">
              <span className="font-display text-4xl text-brand-accent">10M+ CANS SOLD</span>
              <Star className="w-8 h-8 text-brand-red fill-brand-red" />
              <span className="font-display text-4xl">#1 TRENDING FLAVOR</span>
              <Zap className="w-8 h-8 text-brand-accent fill-brand-accent" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product Showcase */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-display text-brand-black mb-4">THE LINEUP</h2>
              <p className="text-lg font-sans text-gray-600 max-w-xl">
                From classic bold to zero sugar energy. Find your perfect pulse.
              </p>
            </div>
            <Button variant="outline" className="shrink-0">
              View All Flavors <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "ORIGINAL BOLD", color: "bg-brand-blue", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop" },
              { name: "CHERRY ZERO", color: "bg-brand-red", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop" },
              { name: "ELECTRIC LIME", color: "bg-brand-accent text-brand-black", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop" },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 ${product.color}`} />
                <div className="relative h-80 mb-8 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                    style={{ filter: `hue-rotate(${i * 120}deg)` }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl font-display mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-sans font-bold text-xl">$2.99</span>
                  <Button size="sm" className={product.color}>Add to Cart</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Campaign Section */}
      <section className="relative py-32 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop"
            alt="Concert crowd"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <span className="font-sans font-bold tracking-[0.2em] text-brand-red uppercase mb-4 block">Limited Time Drop</span>
          <h2 className="text-6xl md:text-8xl font-display mb-8">SUMMER SOUNDS <br/> SWEEPSTAKES</h2>
          <p className="text-xl font-sans max-w-2xl mx-auto mb-12 text-gray-300">
            Scan the code under any PULSE cap for a chance to win VIP festival tickets, exclusive merch, and a year's supply of energy.
          </p>
          <div className="flex gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[100px]">
              <span className="block text-4xl font-display text-brand-accent">14</span>
              <span className="text-xs uppercase tracking-wider">Days</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[100px]">
              <span className="block text-4xl font-display text-brand-accent">08</span>
              <span className="text-xs uppercase tracking-wider">Hours</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[100px]">
              <span className="block text-4xl font-display text-brand-accent">45</span>
              <span className="text-xs uppercase tracking-wider">Mins</span>
            </div>
          </div>
          <Button variant="secondary" size="lg" className="text-xl px-12">Enter Code Now</Button>
        </div>
      </section>

      {/* 5. Lifestyle Branding */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            <div className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop" alt="Party" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-white font-display text-4xl">NIGHTLIFE</h3>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop" alt="Skate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white font-display text-2xl">SKATE</h3>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative group bg-brand-blue flex items-center justify-center p-8 text-center">
               <div>
                 <h3 className="text-white font-display text-3xl mb-4">JOIN THE CREW</h3>
                 <Button variant="secondary" size="sm">Follow @Pulse</Button>
               </div>
            </div>
            <div className="lg:col-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5276c?q=80&w=1000&auto=format&fit=crop" alt="Music" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-white font-display text-4xl">MUSIC</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Store Locator CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-display mb-6">THIRSTY? <br/> WE'RE CLOSE.</h2>
            <p className="text-xl font-sans mb-8 max-w-md">
              Find PULSE at over 50,000 locations nationwide. Enter your zip code to find the nearest drop.
            </p>
            <div className="flex max-w-md bg-white rounded-full p-2 shadow-2xl">
              <div className="flex items-center pl-4 text-brand-black">
                <MapPin className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                className="flex-1 bg-transparent border-none outline-none px-4 text-brand-black font-sans font-medium"
              />
              <Button className="rounded-full px-8">Find</Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-full bg-white/10 absolute -inset-10 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
              alt="Map" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3] grayscale contrast-125 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 7. Email Capture Section */}
      <section className="py-32 bg-brand-black text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Mail className="w-16 h-16 mx-auto mb-8 text-brand-accent" />
          <h2 className="text-5xl md:text-6xl font-display mb-6">GET 15% OFF YOUR FIRST DROP</h2>
          <p className="text-lg font-sans text-gray-400 mb-10">
            Sign up for the PULSE newsletter to get exclusive flavor drops, merch access, and VIP event invites before anyone else.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white outline-none focus:border-brand-accent transition-colors font-sans"
              required
            />
            <Button variant="secondary" size="lg" className="px-10">Subscribe</Button>
          </form>
          <p className="text-xs text-gray-600 mt-6 font-sans">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  )
}
