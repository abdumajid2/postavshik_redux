import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/Layout/layout'
import Home from './pages/home/home'
import Category from './pages/category/category'
import Oplata from './pages/oplata/oplata'
import Card from './pages/card/card'
import Contact from './pages/contact/contact'
import Dostavka from './pages/dostavka/dostavka'
import Info from './pages/info/info'
import Politica from './pages/politica/politica'
import Uslug from './pages/uslug/uslug'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="oplata" element={<Oplata />} />
        <Route path="card" element={<Card />} />
        <Route path="contact" element={<Contact />} />
        <Route path='dostavka' element={<Dostavka />} />
        <Route path='info/:id' element={<Info />} />
        <Route path='politica' element={<Politica />} />
        <Route path='uslug' element={<Uslug />} />
      </Route>
    </Routes>
  )
}

export default App