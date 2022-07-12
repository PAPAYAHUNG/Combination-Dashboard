import React from "react";
import Mainzone from "../Components/Mainzone";
import Sidebar from "../Components/Sidebar";
import { useStateContext } from "../context/ContextProvider";

function Home() {
  const { activeMenu, setActiveMenu,selectedColor } = useStateContext();
  console.log({ selectedColor });
  const themeColor = localStorage.getItem('themeColor')
  return (
    <div className="relative flex   dark:bg-slate-800 dark:text-white">
      <div
        className={`fixed bg-slate-500 
             ${activeMenu ? " w-72" : "w-0"}`}
        // style = {{backgroundColor: themeColor!=="" ? themeColor :"currentcolor" }}
      >
        {activeMenu && <Sidebar />}
      </div>
      <div
        className={`  flex-1 min-h-full dark:text-white dark:bg-main-dark-bg
             ${activeMenu ? "ml-72" : "ml-0"}`}
      >
        
        <Mainzone />
      </div>
    </div>
  );
}

export default Home;
