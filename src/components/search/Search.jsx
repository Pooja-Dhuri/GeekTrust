import React from 'react'
import {FaSearch} from 'react-icons/fa'
import style from './search.module.css'

const Search = () => {
  return (
    <div className={style.search_box}>
      <input type="text" placeholder='search for products....' />
      <FaSearch/>
    </div>
  )
}

export default Search