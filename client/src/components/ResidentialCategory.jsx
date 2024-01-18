import React from 'react'
import { CategoryArrows } from './CategoryArrows';
import { Link } from 'react-router-dom';

export const ResidentialCategory = () => {

  return (
    
    <div className='relative overflow-x-auto w-screen h-screen'>
      <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='object-cover h-full w-full' loading='lazy'/> 

      <div className="absolute bg-black opacity-60 h-full w-full top-0 right-1/2 translate-x-1/2 font-urbanist text-white">
        <div className="font-semibold mx-auto text-white  w-fit mt-40 xs:mt-72 md:mt-32">
          <p className='font-bold xl:text-[200px]  xs:text-center xs:text-6xl xs:font-light xs:mb-10 md:text-[120px] lg:text-[150px] md:pt-60 xl:pt-20'>Residential</p>
          <div className="flex justify-between  mx-auto font-light mb-10 xl:w-96 xs:text-xs xs:w-[19rem]">

            <Link to={"/residential2BR"}><button className='p-2 border-transparent border-2 hover:border-white trransition-all duration-300 xs:border-2 xs:border-white '>Two bedroom</button></Link>

            <Link to={"/residential3BR"}> <button className='p-2 border-transparent border-2 hover:border-white trransition-all duration-300 xs:border-2 xs:border-white'>Three bedroom</button></Link>
           
            <Link to={"/residential4BR"}><button className='p-2 border-transparent border-2 xs:hover:border-white trransition-all duration-300 xs:border-2 xs:border-white'>Four bedroom</button></Link>
          </div>

          <div className="mx-auto w-fit scale-75 md:scale-100 md:mt-120"><CategoryArrows/></div>
        </div>
      </div>
    </div>
  )
}
