import React from 'react'
import { useDispatch } from 'react-redux'
import { leftSideFilter } from '../../Redux/action'
import style from './leftsidebar.module.css'

const LeftSidebar = () => {

    const dispatch=useDispatch()

    const handleChange=(e)=>{
        console.log(e.target.value)
        dispatch(leftSideFilter(e.target.value))
    }


  return (
    <div className={style.filter_main_box}>

        {/* colours */}
        <div>
            <p>Colours</p>
            <div>
                <input type="checkbox" value="Red" onChange={(e)=>{handleChange(e)}}/>
                <p>Red</p>
            </div>
            <div>
                <input type="checkbox" value="Blue" onChange={(e)=>{handleChange(e)}}/>
                <p>Blue</p>
            </div>
            <div>
                <input type="checkbox" value="Green" onChange={(e)=>{handleChange(e)}}/>
                <p>Green</p>
            </div>

        {/* gender */}
        
            <p>Gender</p>
            <div>
                <input type="checkbox" value="Men" onChange={(e)=>{handleChange(e)}}/>
                <p>Men</p>
            </div>
            <div>
                <input type="checkbox" value="Women" onChange={(e)=>{handleChange(e)}}/>
                <p>Women</p>
            </div>

        {/*price  */}
       
            <p>Price</p>
            <div>
                <input type="checkbox" value="0-250" onChange={(e)=>{handleChange(e)}}/>
                <p>0-250</p>
            </div>
            <div>
                <input type="checkbox" value="251-450" onChange={(e)=>{handleChange(e)}}/>
                <p>251-450</p>
            </div>
            <div>
                <input type="checkbox" value="450" onChange={(e)=>{handleChange(e)}}/>
                <p>450</p>
            </div>

        {/* type */}
        
            <p>Type</p>
            <div>
                <input type="checkbox" value="Polo" onChange={(e)=>{handleChange(e)}}/>
                <p>Polo</p>
            </div>
            <div>
                <input type="checkbox" value="Hoodie" onChange={(e)=>{handleChange(e)}}/>
                <p>Hoodie</p>
            </div>
            <div>
                <input type="checkbox" value="Basic" onChange={(e)=>{handleChange(e)}}/>
                <p>Basic</p>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar