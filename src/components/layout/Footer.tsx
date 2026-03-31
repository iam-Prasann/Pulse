import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const FOOTER_LINKS = {
  Products: ["All Flavors", "Zero Sugar", "Limited Edition", "Merch"],
  Company: ["About Us", "Careers", "Newsroom", "Sustainability"],
  Support: ["Contact Us", "FAQ", "Store Locator", "Terms of Service", "Privacy Policy"],
}

export function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center">
                <span className="text-white font-display text-3xl leading-none mt-1">P</span>
              </div>
              <span className="font-display text-4xl tracking-tight">PULSE</span>
            </Link>
            <p className="text-gray-400 font-sans text-sm max-w-sm mb-8">
              Fueling the next generation with bold flavors and unstoppable energy. Join the movement.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-xl mb-6 text-brand-red">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white font-sans text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <p>&copy; {new Date().getFullYear()} PULSE Beverage Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
