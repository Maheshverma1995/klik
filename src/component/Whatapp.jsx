import React from 'react'
import { Link } from 'react-router-dom'

const Whatapp = () => {
    return (
     <div >
            
            <Link target='#' to="https://web.whatsapp.com/"><div class="position-absolute z-3 position-fixed bottom-0 start-0 mb-4"><img src="./Image/whatsapp-icon.webp" alt="" /></div></Link>
            <div class="position-absolute z-3  position-fixed bottom-0 end-0 mb-4"><img style={{width:'70px',}} src="./Image/images.png" alt="" /></div>
            
            </div>
      
    )
}

export default Whatapp
