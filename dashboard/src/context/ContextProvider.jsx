import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const context = createContext();

function ContextProvider({ children }) {
    const [activeMenu, setIsActiveMenu] = useState(true)
    const [screen, setScreen] = useState(undefined)
    const [isOpenSetttingBar, setIsOpenSetttingBar] = useState(false)
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedTheme, setSelectedTheme] = useState('')
    const [currentMode, setCurrentMode] = useState('light')
    const themeColor = localStorage.getItem('themeColor')
    const initialState = {
      cart:false,
      message:false,
      notification:false,
      profile:false,
    }
    const [isClicked, setIsclicked] = useState(initialState)
    const handleClicked = (componentClicked) =>{
      setIsclicked({...initialState,[componentClicked]:true })
    }




  return <context.Provider
           value={{
            activeMenu,
            setIsActiveMenu,
            isClicked,
            setIsclicked,
            handleClicked,
            screen,
            setScreen,
            isOpenSetttingBar, 
            setIsOpenSetttingBar,
            selectedColor, 
            setSelectedColor,
            selectedTheme, setSelectedTheme,
            themeColor,
            currentMode, setCurrentMode
           }
           }
            >
              {children}
   </context.Provider>;
}
export default ContextProvider;

export const useStateContext = ()=> useContext(context)