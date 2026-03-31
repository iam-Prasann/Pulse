import { useState } from "react"
import { motion } from "motion/react"
import { MapPin, Search, Navigation, Phone, Clock } from "lucide-react"
import { Button } from "@/src/components/ui/button"

const MOCK_STORES = [
  { id: 1, name: "Downtown Convenience", address: "123 Main St, Cityville", distance: "0.8 mi", open: true },
  { id: 2, name: "City Supermarket", address: "456 Market Ave, Cityville", distance: "1.2 mi", open: true },
  { id: 3, name: "Night Owl Bodega", address: "789 5th St, Cityville", distance: "2.5 mi", open: false },
  { id: 4, name: "Express Mart", address: "101 Highway Blvd, Cityville", distance: "3.1 mi", open: true },
]

export function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeStore, setActiveStore] = useState<number | null>(1)

  return (
    <main className="min-h-screen bg-brand-gray pt-24 flex flex-col">
      <div className="container mx-auto px-4 md:px-6 py-8 flex-1 flex flex-col">
        <h1 className="text-5xl md:text-7xl font-display mb-8 text-brand-black uppercase">Find Your Pulse</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 flex-1">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center bg-brand-gray rounded-full px-4 py-2 mb-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter Zip Code or City"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none px-3 py-2 text-brand-black font-sans"
                />
                <button className="text-brand-blue hover:text-brand-red transition-colors">
                  <Navigation className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm font-sans font-bold text-gray-500 uppercase tracking-wider">
                {MOCK_STORES.length} Locations Found
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {MOCK_STORES.map((store) => (
                <motion.div
                  key={store.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveStore(store.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-colors border-2 ${
                    activeStore === store.id ? "border-brand-blue bg-blue-50/50" : "border-transparent bg-brand-gray hover:bg-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-2xl text-brand-black">{store.name}</h3>
                    <span className="text-sm font-sans font-bold text-brand-blue bg-white px-2 py-1 rounded-md shadow-sm">
                      {store.distance}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600 font-sans text-sm mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <p>{store.address}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-sans">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className={store.open ? "text-green-600 font-bold" : "text-red-500 font-bold"}>
                        {store.open ? "Open Now" : "Closed"}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors shadow-sm">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-colors shadow-sm">
                        <Navigation className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Area (Placeholder) */}
          <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-xl overflow-hidden relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
              alt="Map View"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Map Overlay UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent pointer-events-none" />
            
            {/* Mock Map Pins */}
            {MOCK_STORES.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`absolute w-12 h-12 -ml-6 -mt-12 flex items-center justify-center cursor-pointer ${
                  activeStore === store.id ? "z-20" : "z-10"
                }`}
                style={{
                  top: `${30 + index * 15}%`,
                  left: `${40 + index * 10}%`,
                }}
                onClick={() => setActiveStore(store.id)}
              >
                <div className={`relative flex items-center justify-center w-10 h-10 rounded-full shadow-xl transition-transform ${
                  activeStore === store.id ? "bg-brand-red scale-125" : "bg-brand-blue hover:scale-110"
                }`}>
                  <MapPin className="w-5 h-5 text-white" />
                  {/* Pulse effect for active pin */}
                  {activeStore === store.id && (
                    <div className="absolute inset-0 rounded-full border-2 border-brand-red animate-ping opacity-75" />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Active Store Info Card on Map */}
            {activeStore && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white rounded-2xl shadow-2xl p-6"
              >
                <h3 className="font-display text-2xl text-brand-black mb-2">
                  {MOCK_STORES.find(s => s.id === activeStore)?.name}
                </h3>
                <p className="text-gray-600 font-sans text-sm mb-4">
                  {MOCK_STORES.find(s => s.id === activeStore)?.address}
                </p>
                <Button className="w-full">Get Directions</Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
