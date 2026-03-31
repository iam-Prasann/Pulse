/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "@/src/components/layout/Navbar"
import { Footer } from "@/src/components/layout/Footer"
import { Home } from "@/src/pages/Home"
import { Product } from "@/src/pages/Product"
import { StoreLocator } from "@/src/pages/StoreLocator"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/locator" element={<StoreLocator />} />
            {/* Fallback routes for demo */}
            <Route path="/campaigns" element={<Home />} />
            <Route path="/about" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

