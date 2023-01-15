import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  const cart=useSelector((store)=>store.cart)
  return (
    <div className={style.navbar_main_box}>

        {/* logo of the web page */}
        <div>
            <h1>TeeRex Store</h1>
        </div>

        {/* product and cart */}
        <div className={style.navbar_product_box}>
           <div>
            <Link to="/"><h2 className={style.navbar_product_text}>Products</h2></Link>
           </div>
           <div>
            <Link to="/cart"><AiOutlineShoppingCart className={style.cart_icon}/>
            <span className={style.cart_count}>{cart.length}</span></Link>
           </div>
        </div>
    </div>
  )
}

export default Navbar