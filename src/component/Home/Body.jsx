import React from 'react'
import main from "./image/main.png"
import banner from "./image/banner.png"
import product2 from "./image/product2.png"

const Body = () => {
  return (
    <div>
        <div className=" max-w-300px h-screen bg-gradient-to-t from-red-50 to-green-300 pt-28">
          <div  className="text-center md:mt-0  font-bold text-4xl md:text-5xl ">
            <h1 className="text-green-500">Dahlia Fruit Villa</h1>
            <h2 className=" text-yellow-500 md:text-3xl text-2xl">Healthy Food Store</h2>
            <p className="mb-5 font-meduim mx-10 md:text-2xl text-xl">place where you can get an fruit juice at your convinent time.</p>
            <button className="bg-gray-400 hover:bg-blue-400 py-2 px-5   text-black hover:text-white md:text-2xl text-xl rounded-full font-bold hover:transition hover:ease-in hover:duration-1000 hover:transform">Order now</button>
          </div>
          <img className=" object-cover  w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60  lg:w-72 lg:h-72 absolute bottom-0 right-0" src={product2} alt="" />
          <img className=" object-cover  w-52 h-52 sm:w-56 sm:h-56 md:w-60 md:h-60  lg:w-72 lg:h-72 absolute bottom-0 left-0" src={banner} alt="" />
          <img className=" object-cover animate-pulse w-36 h-36 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-72 lg:h-72 absolute bottom-24 sm:bottom-0 right-40 sm:left-64 md:left-68 lg:left-96 " src={main} alt="" />
          <img className=" hidden lg:flex object-cover  w-72 h-72  absolute bottom-0 right-80 " src={main} alt="" />
        </div>
    </div>
  )
}

export default Body;