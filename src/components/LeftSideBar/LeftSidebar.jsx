import React from 'react'
import style from './leftsidebar.module.css'

const LeftSidebar = () => {
  return (
    <div className={style.filter_main_box}>

        {/* colours */}
        <div>
            <p>Colours</p>
            <div>
                <input type="checkbox" />
                <p>Red</p>
            </div>
            <div>
                <input type="checkbox" />
                <p>Blue</p>
            </div>
            <div>
                <input type="checkbox" />
                <p>Green</p>
            </div>

        {/* gender */}
        
            <p>Gender</p>
            <div>
                <input type="checkbox" />
                <p>Male</p>
            </div>
            <div>
                <input type="checkbox" />
                <p>Female</p>
            </div>

        {/*price  */}
       
            <p>Price</p>
            <div>
                <input type="checkbox" />
                <p>0-250</p>
            </div>
            <div>
                <input type="checkbox" />
                <p>251-450</p>
            </div>
            <div>
                <input type="checkbox" />
                <p>450</p>
            </div>

        {/* type */}
        
            <p>Type</p>
            <div>
                <input type="checkbox" />
                <p>Polo</p>
            </div>
            <div>
                <input type="checkbox" />
                <p>Hoodie</p>
            </div>
            <div>
                <input type="checkbox" />
                <p>Basic</p>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar