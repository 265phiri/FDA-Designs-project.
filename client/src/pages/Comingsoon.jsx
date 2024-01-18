import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import AnimatedPage from '../components/AnimatedPage'


export const Comingsoon = () => {
  return (
    <div>
        <div className="fixed z-40 top-0">
            <Navigation/>
        </div>
        <AnimatedPage>
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 max-w-[1200px]  mx-auto ">
            <div className=" text-center font-urbanist  lg:text-left lg:mt-32 lg:ml-10">
                <p className='text-3xl text-gold lg:text-4xl xl:text-5xl xl:ml-4'>Coming</p>
                <p className='text-9xl font-regular -mt-2 lg:text-[180px] xl:text-[220px]'>Soon</p>
            </div>

            <div className="flex justify-around mt-20 mb-60 px-5 w-80 sm:w-[460px] mx-auto xl:mt-10">
                <div className="h-80 w-20 bg-gray sm:h-96 sm:w-32 xl:h-[500px]">
                    <img src="https://images.unsplash.com/photo-1519011985187-444d62641929?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZXxlbnwwfHx8fDE3MDI0OTg2NzR8Mg&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='h-full w-full object-cover' loading='lazy'/>
                </div>
                <div className="h-80 w-20 bg-gray sm:h-96 sm:w-32 xl:h-[500px]">
                    <img src="https://images.unsplash.com/photo-1612286710168-1690328bb8bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw4fHxtYWxhd2l8ZW58MHx8fHwxNzA0MTIwNTEwfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='h-full w-full object-cover' loading='lazy'/>
                </div>
                <div className="h-80 w-20 bg-gray sm:h-96 sm:w-32 xl:h-[500px]">
                    <img src="https://images.unsplash.com/photo-1543071293-d91175a68672?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw0OXx8bW9kZXJuJTIwaG91c2V8ZW58MHwwfHx8MTcwMjQ5Njg1OXwy&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='h-full w-full object-cover' loading='lazy'/>
                </div>
               
            </div>
        </div>

        <div className="">
            <Footer/>
        </div>
        </AnimatedPage>
    </div>
  )
}
