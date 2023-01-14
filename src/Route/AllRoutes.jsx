import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import Home from '../components/Home/Home'

const AllRoutes = () => {
  return (
    <div>
        {/* all routes */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes