import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, MapPin, ShoppingCart } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"

const NAV_LINKS = [
  { name: "Products", href: "/products" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-brand-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center">
            <span className="text-white font-display text-2xl leading-none mt-1">P</span>
          </div>
          <span className={cn(
            "font-display text-3xl tracking-tight transition-colors",
            isScrolled || isMobileMenuOpen ? "text-brand-black" : "text-white"
          )}>
            PULSE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-sans font-bold uppercase tracking-wider text-sm transition-colors hover:text-brand-red",
                isScrolled ? "text-brand-black" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/locator" className={cn(
            "flex items-center gap-2 font-sans font-bold uppercase text-xs tracking-wider transition-colors hover:text-brand-red",
            isScrolled ? "text-brand-black" : "text-white"
          )}>
            <MapPin className="w-4 h-4" />
            Find Store
          </Link>
          <Button variant={isScrolled ? "default" : "secondary"} size="sm" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Shop Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled || isMobileMenuOpen ? "text-brand-black" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-brand-black" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-white pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-display text-4xl text-brand-black hover:text-brand-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-brand-gray my-6" />
              <Link
                to="/locator"
                className="flex items-center justify-center gap-2 font-sans font-bold uppercase text-lg text-brand-black hover:text-brand-red"
              >
                <MapPin className="w-5 h-5" />
                Find Store Near You
              </Link>
              <Button variant="secondary" size="lg" className="mt-8 w-full gap-2 text-lg">
                <ShoppingCart className="w-5 h-5" />
                Shop Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
