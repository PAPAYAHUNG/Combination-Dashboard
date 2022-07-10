import React from 'react'
import { AiFillSetting } from "react-icons/ai";
import { useStateContext } from '../../context/ContextProvider';
function SettingButton() {

    const {isOpenSetttingBar, setIsOpenSetttingBar,themeColor} = useStateContext()
  return (
    <button 
    onClick={()=>{
        setIsOpenSetttingBar(prev=>!prev)
    }}
    style={{color:themeColor, fontSize:40, zIndex:40}}
    className='w-10 h10 fixed bottom-7 right-7 cursor-pointer '>
        <AiFillSetting/>
    </button>
  )
}

export default SettingButton