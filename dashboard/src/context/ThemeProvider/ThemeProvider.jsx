import React from "react";
import { themeColors } from "../../data/data/dummy";
import { AiFillCloseCircle,AiFillCheckCircle } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../ContextProvider";
function ThemeProvider() {
  const { isOpenSetttingBar, setIsOpenSetttingBar,selectedColor, setSelectedColor,selectedTheme, setSelectedTheme } = useStateContext();
  return (
    <div className="bg-half-transparent nav-item w-screen fixed bottom-0 top-0 right-0 z-50 ">
      <div className="fixed right-0 top-0 w-72 h-screen p-2 bg-gray-400">
        <div className="flex justify-between items-center p-4 border-b-2 border-gray-600">
          <p className="font-bold text-2xl">Settings</p>
          <button
            onClick={() => {
              setIsOpenSetttingBar((prev) => !prev);
            }}
            className="text-3xl cursor-pointer"
          >
            <AiFillCloseCircle />
          </button>
        </div>
        <div className="  p-4 border-b-2 border-gray-600">
          <p className="font-bold text-2xl">Themes Options</p>
          <div className="mt-3">
            <input
              type="radio"
              id="light"
              className="cursor-pointer"
              name="theme"
              value="light"
              checked={true}
            />

            <label htmlFor="light" className="ml-3">
              Light
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="dark"
              className="cursor-pointer"
              name="theme"
              value="dark"
            />
            <label htmlFor="dark" className="ml-3">
              Dark
            </label>
          </div>
        </div>
        <div className="  p-4 ">
          <p className="font-bold text-2xl mt-3 ">Themes Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => {
              return (
                <TooltipComponent
                  key={index}
                  position="Top"
                  content={item.name} 
                >
                  <div
                    onClick={()=>{
                        setSelectedTheme(item.name)
                        setSelectedColor(item.color)
                        localStorage.setItem('themeColor',item.color)
                        setIsOpenSetttingBar((prev) => !prev);
                    }}
                    className={`rounded-full cursor-pointer w-8 h-8 flex items-center justify-center text-2xl`}
                    style={{ backgroundColor: item.color }}
                  >
                {selectedTheme===item.name ?  <AiFillCheckCircle/> :""  }
                   
                  </div>
                </TooltipComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeProvider;
