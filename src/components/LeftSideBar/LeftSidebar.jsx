import React from 'react'
import style from './leftsidebar.module.css'

const LeftSidebar = () => {
  return (
    <div className={style.filter_main_box}>

        {/* colours */}
        <div>
            <h3>Colours</h3>
            <div>
                <input type="checkbox" />
                <h5>Red</h5>
            </div>
            <div>
                <input type="checkbox" />
                <h5>Blue</h5>
            </div>
            <div>
                <input type="checkbox" />
                <h5>Green</h5>
            </div>
       

        {/* gender */}
        
            <h3>Gender</h3>
            <div>
                <input type="checkbox" />
                <h5>Male</h5>
            </div>
            <div>
                <input type="checkbox" />
                <h5>Female</h5>
            </div>
        

        {/*price  */}
       
            <h3>Price</h3>
            <div>
                <input type="checkbox" />
                <h5>0-250</h5>
            </div>
            <div>
                <input type="checkbox" />
                <h5>251-450</h5>
            </div>
            <div>
                <input type="checkbox" />
                <h5>450</h5>
            </div>
       

        {/* type */}
        
            <h3>Type</h3>
            <div>
                <input type="checkbox" />
                <h5>Polo</h5>
            </div>
            <div>
                <input type="checkbox" />
                <h5>Hoodie</h5>
            </div>
            <div>
                <input type="checkbox" />
                <h5>Basic</h5>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar