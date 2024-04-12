import React from "react";
import { Tooltip } from "react-tooltip";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";
const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  const {isClicked , setIsClicked} = useStateContext();
  return <>
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />{" "}
      {icon}
    </button>
    
  </>
};

const NavBar = () => {
  const { activeMenu, setActiveMenu ,isClicked,handleClick } = useStateContext();
  return (
    <div className="flex justify-between items-center pl-8 pr-8 ">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prevActiveMenu) => !prevActiveMenu);
        }}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex items-center">
        <div>
          <NavButton
            title="cart"
            customFunc={() => handleClick("cart")}
            color="blue"
            icon={<FaCartShopping />}
          />
        </div>
        <div>
          <NavButton
            title="chat"
            customFunc={() => handleClick("cart")}
            color="blue"
            icon={<CiChat1 />}
          />
        </div>
        <div className="flex ">
          <NavButton
            title="notification"
            customFunc={() => handleClick("notification")}
            color="blue"
            icon={<IoIosNotifications />}
          />
        </div>
        <div className=" cursor-pointer" onClick={()=>handleClick('userProfile')}>
          <img src={avatar} className="rounded-full w-8 h-8" />
        </div>
      </div>
      {isClicked.cart && <Cart/> }
      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}

    </div>
  );
};

export default NavBar;
