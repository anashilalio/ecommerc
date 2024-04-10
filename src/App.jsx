import { useState } from "react";
import {  Routes , Route} from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { ContextProvider } from './context/ContextProvider';
// 
import { Tooltip } from 'react-tooltip';
import {Customers , Orders , Calendar , Employees , Stacked , Pyramid , Ecommerce , Kanban 
,Area,Line , Bar , Pie , Financial , ColorPicker , ColorMapping , Editor} from "./pages";
import {Navbar , Footer , Sidebar , ThemeSet} from './components'
function App()  {
  const activeMenu = true;
  return (
    <>
    {/*  */}
    <ContextProvider>
       <div className="flex relative dark:bg-main-dark-bg">
       <div className="fixed right-6 bottom-4">
        

        <button>
          <CiSettings className="my-anchor-element rounded-full text-4xl outline-none"
          style={{backgroundColor:"blue"}}
          />
        </button>
        {/*  */}
        <Tooltip anchorSelect=".my-anchor-element" place="top" effect="float" >hello</Tooltip>
        
        </div>
        {activeMenu ?(
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white 
        ">
          <Sidebar />
        </div>  

        ):(
<div className="w-0 bg-transparent dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
        )
        
      }
      <div className={
        activeMenu ?
      " bg-white min-h-screen md:ml-72 w-full" : 
      (' bg-white min-h-screen flex-1 w-full')  
    }>
        <div className="fixed md:static ">
          <Navbar />
        </div>
      </div>
        <Routes>
              {/* dashboard */}
            <Route path="/" element={<Ecommerce/>}/>
            <Route path="/ecommerce" element={<Ecommerce/>}/>
            {/* page */}
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/customers" element={<Customers/>}/>

            {/* apps */}
            <Route path="/kanban" element={<Kanban/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/Editor" element={<Editor/>}/>
            <Route path="/color-picker" element={<ColorPicker/>}/>

          {/* CHarts  */}
          <Route path="/line" element={<Line/>}/>
          <Route path="/area" element={<Area/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/financial" element={<Financial/>}/>
          <Route path="/color-mapping" element={<ColorMapping/>}/>
          <Route path="/pyramid" element={<Pyramid/>}/>
          <Route path="/stacked" element={<Stacked/>}/>


        </Routes>
       </div>
       
        
        </ContextProvider>
    </>
  );
}

export default App;
