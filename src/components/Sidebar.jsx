import React from 'react'
import {Link ,NavLink } from 'react-router-dom';
import {links} from '../data/dummy';
import { FaShopware } from "react-icons/fa";
import {Tooltip } from 'react-tooltip';
import { IoIosClose } from "react-icons/io";
import { useStateContext } from '../context/ContextProvider';
const SideBar = () => {
  const {activeMenu ,setActiveMenu} = useStateContext(true);
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <>
     <div className='ml-3 h-screen overflow-auto pb-10  w-auto'>
      {activeMenu && (
    <>
        <div className="flex justify-between items-center mt-6">
          <Link to="/" onClick={()=>{}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <FaShopware />
          Shoppy
          </Link>
          <div>
          <Tooltip anchorSelect='button' place='bottom' >
            hello
          </Tooltip>
          <button type='button' onClick={()=>{setActiveMenu((prev)=>!prev)}}>
          <IoIosClose className='button text-3xl' />
          </button>
          </div>
          

          
          
        </div>
        <div className="mt-10">
            {links.map((item)=>(
                <div key={item.title} className='mt-6 text-gray-400'>
                <p>
                {item.title}

                </p>
                {item.links.map((linkss)=>(
                  <NavLink to={`./${linkss.name}}`}
                  key={linkss.name}
                  onClick={()=>{}}
                  className={({e})=>
                  e?activeLink : 
                  normalLink
                }
                  >
                    {linkss.icon}
                    <span className='capitalize'>
                      {linkss.name}
                    </span>
                  </NavLink>
                    
                )
                    
                )}                 
              </div>
            )
                
            )}
          </div>
        </>
      ) }
     
      </div> 
    </>
  )
}

export default SideBar