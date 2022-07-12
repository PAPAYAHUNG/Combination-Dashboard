import React from 'react'

function Button({color, bgColor, content, size,func}) {
    const styles = {
        color, backgroundColor:bgColor
    }
  return (
   
        <button 
        // style={{color, backgroundColor:bgColor } }
        onClick={func}
        style={styles}
        className={`text-${size} button-1  mt-2 py-2 px-3 rounded-2xl` }
   >
                {content}
        </button>
    
  )
}

export default Button