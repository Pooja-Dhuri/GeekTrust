import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Redux/action'

const Cart = () => {
   const dispatch=useDispatch()
   const cartproducts=useSelector((store)=>store.cart)
   console.log(cartproducts)

const sum = cartproducts.reduce((accumulator, currentValue) => accumulator + currentValue.price,0);

// console.log(sum)
const handleDelete=(id)=>{
  dispatch(removeFromCart(id))
}

  return (
    <div>
       {
        cartproducts && cartproducts.map((ele)=>(
          <div key={ele.id}>
            <div><img src={ele.imageURL} alt="" /></div>
            <div>
              <p>{ele.name}</p>
              <p>{ele.price}</p>
            </div>
            <div>quantity</div>
            <button onClick={()=>handleDelete(ele.id)}>Delete</button>
          </div>
        ))
       }
       <hr />
          <h3>total:{sum}</h3>
    </div>
  )
}

export default Cart