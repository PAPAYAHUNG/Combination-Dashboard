import React from 'react'

function Header({page, title}) {
  return (
    <div className=' p-3'>
        <p className='  text-gray-400'>{page}</p>
        <p className='font-bold text-2xl tracking-tight'>{title}</p>
    </div>
  )
}

export default Header