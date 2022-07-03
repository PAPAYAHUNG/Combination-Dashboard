import React from 'react'

function Button({color, bgColor, content, size}) {
  return (
   
        <button 
        style={{color, backgroundColor:bgColor,hover:{backgroundColor:'green'} } }
        className={`text-${size}  mt-2 py-2 px-3 rounded` }
   >
                {content}
        </button>
    
  )
}

export default Button