import React, { useState } from 'react';
import NavLinks from './navLinks';
import { MenuSharp } from '@mui/icons-material';
import { CloseSharp } from '@mui/icons-material';

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const hamburgerBurger = <MenuSharp style={{fontSize:40}} onClick={() => setOpen(!open)}/>
  const closeButton = <CloseSharp style={{fontSize:40}} onClick={() => setOpen(!open)}/>

  return (
      <div className='sm:hidden cursor-pointer'>
          {open? closeButton : hamburgerBurger}
          {open && <NavLinks/>}
      </div>
  );
};

export default MobileMenu;

 
