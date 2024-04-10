import React from 'react'
import {Tooltip} from 'react-tooltip';
import { AiOutlineMenu } from "react-icons/ai";

import avatar from '../data/avatar.jpg';
import {Cart , Chat , Notification , UserProfile} from '.';
import {useStateContext} from '../context/ContextProvider';
const NabButton=(title , cusomtFunc , icon , color , dotColor)=>{
  <>
  <button>

  </button>
    <Tooltip>

    </Tooltip>
  </>
    
}
const NavBar = () => {
  const {activeMenu , setActiveMenu } = useStateContext();
  return (
    <div className="flex">
      <NabButton title="Menu"  cusomtFunc={()=>{
        setActiveMenu((prevActiveMenu)=>!prevActiveMenu)
      }  
    } color="blue" icon={<AiOutlineMenu/>} />
    </div>
  )
}

export default NavBar