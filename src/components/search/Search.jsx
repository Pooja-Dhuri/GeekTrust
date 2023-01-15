import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { searchFilter } from '../../Redux/action'
import style from './search.module.css'

const Search = () => {
  const [search,setSearch]=useState("")
  const dispatch=useDispatch()

  const handleClick=()=>{
    // console.log(search.toLowerCase())
    dispatch(searchFilter(search.toLowerCase()))
  }
  return (
    <div className={style.search_box}>
      <input type="text" placeholder='search for products....' onChange={(e)=>{setSearch(e.target.value)}} />
      <FaSearch onClick={handleClick}/>
    </div>
  )
}

export default Search