import React from 'react'
import LeftSidebar from '../LeftSideBar/LeftSidebar'
import Products from '../Products/Products'
import Search from '../search/Search'
import style from './Home.module.css'
import {AiTwotoneFilter} from 'react-icons/ai'

const Home = () => {
  return (
    <div className={style.home_main_box}>
        {/* serach input */}
        <div className={style.home_search_box}>
           <div><Search/></div>
           <div className={style.filter_icon}><AiTwotoneFilter/></div>
        </div>

        {/* bottom products and filter box */}
        <div className={style.home_bottom_box}>
            {/* left side bar  */}
           <div className={style.home_filter_box}>
            <LeftSidebar/>
           </div>
           {/* Products div */}
           <div className={style.home_products_box}>
            <Products/>
           </div>
        </div>

        
    </div>
  )
}

export default Home