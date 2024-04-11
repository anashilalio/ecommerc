import React from 'react'
import {Tooltip} from 'react-tooltip';
import { AiOutlineMenu } from "react-icons/ai";

import avatar from '../data/avatar.jpg';
import {Cart , Chat , Notification , UserProfile} from '.';
import {useStateContext} from '../context/ContextProvider';
const NavButton=({title , customFunc , icon , color , dotColor})=>(
  
  <button
  type="button"
  onClick={() => customFunc()}
  style={{ color }}
  className="relative text-xl rounded-full p-3 hover:bg-light-gray">
  <span
  style={{ background: dotColor }}
  className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
/>    {icon}
    </button>
    
  
    
)
const NavBar = () => {
  const {activeMenu , setActiveMenu } = useStateContext();
  return (
    <div className="flex">
      <NavButton title="Menu"  customFunc={()=>{
        setActiveMenu((prevActiveMenu)=>!prevActiveMenu)
      }  
    } color="blue" icon={<AiOutlineMenu/>} />
    fdsf
    </div>
  )
}

export default NavBar