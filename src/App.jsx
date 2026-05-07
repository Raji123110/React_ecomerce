import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Product from './Products'
import Contact from './Contact'
import Navbar from './Navbar'

// Create Context
export const HelloContext = createContext()

function App() {
  const [cart, setCart] = useState([])

  return (
    <HelloContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </HelloContext.Provider>
  )
}

export default App