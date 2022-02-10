import React from 'react';
import { Link } from 'react-router-dom';
// import Menu from './menu/desktopNav';
import Desktop from "./menu/desktopNav"
import MobileMenu from './menu/MobileMenu';


const Header = () => {

  return (
    <div className='flex justify-between items-center p-5 fixed z-20 w-full top-0 bg-green-500'>
      <div className='text-2xl md:text-4xl py-2 font-bold ml-10  text-yellow-900'>
        <a href='/'>
          Dahlia<span className='text-xl  md:text-3xl ml-2 text-yellow-600'>Fruit</span>
        </a>
      </div>
      <div className="relative top-0 right-0 sm:relative sm:top-0 ">
        <Desktop/>
        <MobileMenu/>
      </div>
      <div className='hidden sm:block'>
        <Link to="/order">
        <a href="" className="bg-blue-600 font-bold hover:bg-yellow-400 py-2 px-5  text-black hover:text-white md:text-2xl text-xl rounded-full mr-10">Order now</a>
        </Link>
      </div>
    </div>
    );
  };

export default Header;
