import React, { useEffect, useState } from 'react'
import style from './Products.module.css'

const Products = () => {

    const [products,setProducts]=useState()

    const getProducts=()=>{
            fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setProducts(data)
    })
  }
    useEffect(() => {
      getProducts()
    }, [])
    
  return (
    <div className={style.products_main_box}>
        {
          products && products.map((e)=>(
            <div className={style.product_single_div} >
              <div>
                <p>{e.name}</p>
                <img src={e.imageURL} alt="product image" className={style.product_single_image}/>
              </div>
              <div className={style.product_single_price_div}>
                <p>Rs.{e.price}</p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Products