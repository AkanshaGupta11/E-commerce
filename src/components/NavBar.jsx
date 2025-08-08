import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";import { FcLike } from "react-icons/fc";
import { LuMapPin } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react'
import { CgClose } from "react-icons/cg";
import { useCart } from '../context/CartContext';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

function NavBar({location,getLocation, openDropDown,setOpenDropDown}) {
  const toggleDropdown = () => {
    setOpenDropDown(!openDropDown)
  }

  const {cartItem} = useCart();
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className='bg-white py-3 shadow-2xl flex flex-row px-4 md:px-0'>
        <div className='max-w-6xl mx-auto flex justify-between gap-70 items-center '>
          {/* logo section */}
          <div className='flex flex-row gap-5 justify-between items-center ml-1'>
            <NavLink to ="/">
            
                <p className='text-gray-900 text-3xl font-medium'><span className='text-black font-serif font-extrabold text-5xl'>N</span>exonic</p>
            
            </NavLink> 
            <div className='md :flex flex-row  justify-baseline mt-3 gap-1 cursor-pointer text-gray-700 items-center hidden'>
              <LuMapPin className='text-red-600 text-2xl ' />
              <span className='font-semibold'>{
                location ? (<div className='-space-y-2'>
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>) : "Add Address"}</span>
                <FaCaretDown onClick ={toggleDropdown}/>
            </div>
            {
              openDropDown ? <div className = "w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-10 rounded-md">
                <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location
                  <span onClick ={toggleDropdown}><CgClose/></span>
                </h1>
                <button onClick = {getLocation}
                className = " border-black cursor-pointer bg-red-500 hover:bg-red-400 rounded-md text-white px-2 py-2">Detect my Location</button>
              </div> :null
            }
          </div>
                {/* menu section  */}
          <nav className='flex gap-7 items-center'>
          <div className=' md:flex flex-row gap-7 ml-auto items-center text-xl font-semibold hidden'>
            <NavLink to = "/"
            className={({isActive}) =>`${isActive ?"border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`} >
              <p >Home</p>
            </NavLink>
            <NavLink to ="/products"
            className={({isActive}) =>`${isActive ?"border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>
              <p >Products</p>
            </NavLink>
            <NavLink to ="/about"
            className={({isActive}) =>`${isActive ?"border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>
              <p>About</p>
            </NavLink>
            <NavLink to ="/contact"
            className={({isActive}) =>`${isActive ?"border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>
              <p>Contact</p>
            </NavLink>
            {/* <NavLink to ="/cart"
            className={({isActive}) =>`${isActive ?"border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>
              <p>Cart</p>
            </NavLink> */}
          </div>
          <NavLink to = "/cart" className ="relative">
          <IoCartOutline className="h-7 w-7"/>
          {
            cartItem.length>0 && 
            <span className ="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
            {cartItem.length}
          </span>
          }
          </NavLink>

          <div className='hidden md:block'>
            <SignedOut>
              <SignInButton className = "bg-red-500 text-white px-3 py-3 rounded-md"/>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          </div>
          {
            openNav ? <HiMenuAlt3 
            onClick = {() => setOpenNav(false)}
            className='h-7 w-7 md:hidden'/> :
            <HiMenuAlt1
            onClick= {() => setOpenNav(true)} 
            className='h-7 w-7 md:hidden'/>
          }
          </nav>
        </div>
        <ResponsiveMenu openNav = {openNav} setOpenNav = {setOpenNav} />

    </div>
  )
}

export default NavBar