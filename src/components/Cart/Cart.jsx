import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Redux/action'

const Cart = () => {
   
   const cartproducts=useSelector((store)=>store.cart)
   console.log(cartproducts)

  
  return (
    <div>

    </div>
  )
}

export default Cart