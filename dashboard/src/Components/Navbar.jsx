import React from "react";
import { FaBuffer, FaSearch, FaShoppingCart } from "react-icons/fa";
import {
  AiOutlineWechat,
  AiTwotoneBell,
  AiFillCaretDown,
} from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/data/avatar.jpg";
import Cart from "./Navbar/Cart";
import Message from "./Navbar/Message";
import Notification from "./Navbar/Notification";
import Profile from "./Navbar/Profile";
import { useState } from "react";
import { useEffect } from "react";
function Navbar() {
  const {
    activeMenu,
    setIsActiveMenu,
    isClicked,
    setIsclicked,
    handleClicked,
    screen,
    setScreen,
  } = useStateContext();

  // watching monitor resize

  console.log({ screen });

  useEffect(() => {
    // window.addEventListener('resize',setScreen(window.innerWidth))
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screen]);

  useEffect(() => {
    if (screen < 760) {
      setIsActiveMenu(false);
    } else {
      setIsActiveMenu(true);
    }
  }, [screen, setScreen]);

  const NavButton = ({ title, icon, customFunc, color, dotColor }) => {
    return (
      <TooltipComponent content={title}>
        <button
          className="p-2 text-xl relative"
          onClick={customFunc}
          style={{ color }}
        >
          <span
            style={{ backgroundColor: dotColor }}
            className="absolute w-2 h-2 -t-2 rounded-full"
          ></span>
          {icon}
        </button>
      </TooltipComponent>
    );
  };
  return (
    <div>
      <div className="flex justify-between  bg-slate-600 p-2">
        <div className="flex">
          <NavButton
            title="Toggel sidebar"
            icon={<FaBuffer />}
            color="blue"
            dotColor="orange"
            customFunc={() => {
              setIsActiveMenu((prev) => !prev);
            }}
          />
          <NavButton title="Search" icon={<FaSearch />} />
        </div>
        <div className="flex">
          <NavButton
            title="Cart"
            icon={<FaShoppingCart />}
            color="blue"
            customFunc={() => {
              handleClicked("cart");
            }}
          />
          <NavButton
            title="Message"
            icon={<AiOutlineWechat />}
            color="blue"
            dotColor="orange"
            customFunc={() => {
              handleClicked("message");
            }}
          />
          <NavButton
            title="Notification"
            icon={<AiTwotoneBell />}
            color="blue"
            dotColor="yellow"
            customFunc={() => {
              handleClicked("notification");
            }}
          />
          <div className="flex items-center  mr-3">
            <img
              className="w-8 h-8 mx-2 rounded-full "
              src={avatar}
              alt="avatar"
            />
            <span>Hi, </span> <span className="font-bold">Hung Le</span>
            <button
              onClick={() => {
                handleClicked("profile");
              }}
              className="p-2"
            >
              <AiFillCaretDown />
            </button>
          </div>

          <div>
            {isClicked.cart && <Cart />}
            {isClicked.message && <Message />}
            {isClicked.notification && <Notification />}
            {isClicked.profile && <Profile />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
