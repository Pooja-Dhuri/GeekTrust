import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProducts } from '../../Redux/action'
import style from './Products.module.css'

const Products = () => {
  const dispatch=useDispatch()
  const products=useSelector((store)=>store.tshirts)
  console.log(products)

  useEffect(() => {
   dispatch(getProducts())
  }, [])

  const handleAdd=()=>{
    dispatch(addToCart())
  }
    
  return (
    <div className={style.products_main_box}>
        {
          products && products.map((e)=>(
            <div className={style.product_single_div} >
              <div>
                <p>{e.name}</p>
                <img src={e.imageURL} alt="product image" className= 
                           {style.product_single_image}/>
              </div>
              <div className={style.product_single_price_div}>
                <p>Rs.{e.price}</p>
                <button onClick={handleAdd}>Add To Cart</button>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Products