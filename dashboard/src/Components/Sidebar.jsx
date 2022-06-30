import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { links } from "../data/data/dummy";
function Sidebar() {
  const { setIsActiveMenu } = useStateContext();

  return (
    <div>
      <div className="flex justify-between m-2 items-center">
        <div className="font-extrabold text-2xl">Shoppy</div>
        <TooltipComponent content={"close"} position={"BottomCenter"}>
          <button
            className="text-3xl hover:bg-slate-900 cursor-pointer rounded-full"
            onClick={() => {
              setIsActiveMenu((prev) => !prev);
            }}
          >
            <AiFillCloseCircle />
          </button>
        </TooltipComponent>
      </div>
      <div className="m-2">
        {links.map((item, index) => {
          return (
            <div key={index} className="font-medium text-gray-200">
              {item.title.toUpperCase()}
              {item.links.map((component, index2) => {
                return (
                  <NavLink to={`${component.name}`} key={index2}>
                    <div className="flex items-center ml-2">
                      {component.icon}
                      {component.name.toUpperCase()}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
