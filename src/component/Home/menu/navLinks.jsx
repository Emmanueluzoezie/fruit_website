import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div>
        <ul className='sm:flex md:text-xl absolute top-3 right-20 sm:relative sm:top-0 sm:right-0 px-10' >
              <Link to='/'>
                <li className='mx-5 hover:text-white'>Home</li>
              </Link>
              <Link to='/about'>
                <li className='mx-5 hover:text-white'>About</li>
              </Link>
              <Link to='/about'>
                <li className='mx-5 hover:text-white'>Product</li>
              </Link>
              <Link to='/about'>
                <li className='mx-5 hover:text-white'>Contact</li>
              </Link>
          </ul>
    </div>
  );
};

export default NavLinks;


