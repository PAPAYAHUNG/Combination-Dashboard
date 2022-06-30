import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const context = createContext();

function ContextProvider({ children }) {
    const [activeMenu, setIsActiveMenu] = useState(true)


  return <context.Provider
           value={{
            activeMenu,
            setIsActiveMenu
           }
           }
            >
              {children}
   </context.Provider>;
}
export default ContextProvider;

export const useStateContext = ()=> useContext(context)