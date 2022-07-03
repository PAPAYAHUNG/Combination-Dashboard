import React from "react";
import { FaBuffer, FaSearch, FaShoppingCart } from "react-icons/fa";
import { AiOutlineWechat,AiTwotoneBell } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
function Navbar() {
  const { setIsActiveMenu } = useStateContext();

  const NavButton = ({title, icon,customFunc,color, dotColor}) => {
    return (
      <TooltipComponent content={title}>
        <button 
         className="p-2 text-xl"
         onClick={customFunc}
        >{icon}</button>
      </TooltipComponent>
    );
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
            <NavButton title='Toggel sidebar'/>
          <button
            onClick={() => {
              setIsActiveMenu((prev) => !prev);
            }}
            className="m-2 "
          >
            <FaBuffer className="hover:bg-slate-700" />
          </button>
          <NavButton title="Search" icon={<FaSearch />}/>
        </div>
        <div className="flex">
            <NavButton title="Cart" icon={<FaShoppingCart />}/>
            <NavButton title="Message" icon={<AiOutlineWechat />}/>
            <NavButton title="Notification" icon={<AiTwotoneBell />}/>
   
        </div>
      </div>
    </div>
  );
}

export default Navbar;
