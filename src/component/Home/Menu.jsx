import {useState} from "react"
import { Transition } from "@headlessui/react";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from "react-router-dom"

const Menu = () => {
  
      const [isOpen, setIsOpen] = useState(false);
      return (
        <div>
          <nav className="bg-gray-800 fixed w-screen z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button href='/' className='text-2xl font-medium  md:text-2xl lg:text-3xl md:ml-2 text-yellow-900'>
                      Dahlia<span className='text-xl ml-2  md:text-xl lg:text-2xl md:ml-2 text-yellow-500'>Fruit</span>
                    </button>
                  </div>
                  <div className="hidden md:block">
                    <div className="md:ml-16 lg:ml-40 flex items-baseline space-x-4">
                      <Link to="/">
                        <button
                        className=" hover:bg-gray-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </button>
                      </Link>
    
                      <Link to="/product">
                        <button
                        className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Product
                      </button>
                      </Link>
    
                      <Link to="/about">
                        <button
                        className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        About
                      </button>
                      </Link>
    
                      <Link to="/contact">
                        <button
                        className="text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Contact
                      </button>
                      </Link>
                    </div>
                  </div>
                  <button  className="hidden md:flex bg-blue-600 font-bold hover:bg-yellow-400 py-1 px-3 md:px-2  text-black hover:text-white md:text-lg text-xl rounded-full md:ml-16 lg:ml-40 ">Order now</button>
                </div>
                <div className="-mr-2 flex md:hidden ">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800 mr-5"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only ">Open main menu</span>
                    {!isOpen ? (
                      <MenuIcon/>
                    ) : (
                      <CloseIcon/>
                    )}
                  </button>
                </div>
              </div>
            </div>
    
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              
            >
              {(ref) => (
                <div className="md:hidden " id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                    <a
                      href="/"
                      className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </a>
    
                    <a
                      href="/product"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Product
                    </a>
    
                    <a
                      href="/about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      About
                    </a>
    
                    <a
                      href="/contact"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contact
                    </a>
                    <button  className="bg-blue-600 font-bold hover:bg-yellow-400 py-1 px-3  text-black hover:text-white md:text-2xl text-lg rounded-full mr-10">Order now</button>
                  </div>
                </div>
              )}
            </Transition>
          </nav>
    
          {/* <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* <!-- Replace with your content --> */}
              {/* <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
              </div>
            </div>
          </main> */}
        </div>
  )
};

export default Menu;


