import React from "react";
// import { AiFillCloseCircle } from "@react-icons/ai";
import { FaBuffer } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Navbar from "./Navbar";
function Mainzone() {
  const {setIsActiveMenu} = useStateContext()
  return (
    <div >
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Mainzone;
