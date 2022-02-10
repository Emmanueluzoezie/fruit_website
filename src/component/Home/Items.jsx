import React from 'react';
import pat from "./image/pat.png"
import pat2 from "./image/pat2.png"


const Items = () => {
    return (
        <div className='pt-20'>
            <div className='text-center text-2xl font-bold mt-5'>
                <h1>New Products</h1>
            </div>
            <div className='flex justify-center'>
                <div class=" md:flex md:flex-wrap justify-center md:w-11/12">
                    <div className='hover:bg-slate-0 p-5 mt-12 bg-red-50 cursor-pointer sm:w-5/12 md:w-56 hover:bg-gray-200 rounded-2xl sm:mx-5 it'>
                        <div class="flex justify-center">
                            <img className='w-52' src={pat} alt="" />
                        </div>
                        <div className="font-bold text-xl text-center ">
                            <h2>Meduim</h2>
                            <h4 class="text-lg">#2000</h4>
                        </div>
                    </div>
                    <div className='hover:bg-slate-0 p-5 mt-12 bg-red-50 cursor-pointer sm:w-5/12 md:w-56 hover:bg-gray-200 rounded-2xl sm:mx-5 it'>
                        <div class="flex justify-center">
                            <img className='w-52' src={pat} alt="" />
                        </div>
                        <div className="font-bold text-xl text-center ">
                            <h2>Meduim</h2>
                            <h4 class="text-lg">#2000</h4>
                        </div>
                    </div>
                    <div className='hover:bg-slate-0 p-5 mt-12 bg-red-50 cursor-pointer sm:w-5/12 md:w-56 hover:bg-gray-200 rounded-2xl sm:mx-5 it'>
                        <div class="flex justify-center">
                            <img className='w-52' src={pat} alt="" />
                        </div>
                        <div className="font-bold text-xl text-center ">
                            <h2>Meduim</h2>
                            <h4 class="text-lg">#2000</h4>
                        </div>
                    </div>
                    <div className='hover:bg-slate-0 p-5 mt-12 bg-red-50 cursor-pointer sm:w-5/12 md:w-56 hover:bg-gray-200 rounded-2xl sm:mx-5 it'>
                        <div class="flex justify-center">
                            <img className='w-52' src={pat} alt="" />
                        </div>
                        <div className="font-bold text-xl text-center ">
                            <h2>Meduim</h2>
                            <h4 class="text-lg">#2000</h4>
                        </div>
                    </div>
                </div>
            </div>

            <section className=' my-12 md:flex md:justify-center'>
                <div className='flex justify-center mt-10'>
                    <div className='flex justify-between items-center w-96 py-5 px-10 rounded-2xl bg-red-100 mx-5'>
                        <div className='text-xl leading-6 text-center font-bold'>
                            <h2 >Big Save</h2>
                            <h1 className='mb-4'>Save 50%</h1>
                            <button className='rounded-full bg-gray-50 hover:bg-blue-600 hover:text-white text-lg px-3 py-2 '>Shop Now</button>
                        </div>
                        <img className='w-24' src={pat2} alt="parfait" />
                    </div>
                </div>

                <div className='flex justify-center mt-10'>
                    <div className='flex justify-between items-center w-96 py-5 px-10 rounded-2xl bg-red-100 mx-5'>
                        <div className='text-xl leading-6 text-center font-bold'>
                            <h2 >Big Save</h2>
                            <h1 className='mb-4'>Save 50%</h1>
                            <button className='rounded-full bg-gray-50 hover:bg-blue-600 hover:text-white text-lg px-3 py-2 '>Shop Now</button>
                        </div>
                        <img className='w-24' src={pat2} alt="parfait" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Items;