import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { SecondaryCTA } from '../components/SecondaryCTA';
import { PrimaryCTA } from '../components/PrimaryCTA';
import { Footer } from '../components/Footer';
import AnimatedPage from '../components/AnimatedPage';
import { ProjectonHome } from '../components/ProjectonHome';
import { ProjectHomeReversed } from '../components/ProjectHomeReversed';


export const Home = () => {

  
  return (
   
    <AnimatedPage>
    <div className='overflow-x-hidden'>
    <div className="z-40 fixed"><Navigation/></div>

      <div className="mt-32 grid grid-cols-1 gap-8 md:mt-24">


        <div className="md:mt-20 lg:mt-32 md:grid lg:grid-cols-2  max-w-[1400px] lg:mx-auto xl:mt-60">

          {/* Hero section text */}
            <section className=' flex flex-col justify-center sm:pt-20 md:pt-0 xl:-mt-24 xl:h-96 xl:w-[800px]'>

              <p className='font-urbanist text-5xl mx-auto pb-4 sm:text-fifty sm:pb-10 md:text-6xl md:mx-auto lg:ml-20 lg:text-4xl md:mb-8 xl:text-7xl lg:-mb-2'>Modern,</p>
              <p className='font-urbanist text-center  leading-big text-5xl mx-auto pb-2 sm:text-fifty sm:pb-8 md:text-6xl xl:ml-20 md:ml-20 md:pb-6 lg:text-4xl xl:text-7xl xl:text-left'>balanced, architecture.</p>
              <p className='font-quicksand text-center text-md mx-auto sm:text-[28px] md:text-xl md:mx-auto lg:ml-20 xl:text-2xl'>Embracing our culture in built environments.</p>

              <div className="flex justify-between mx-auto w-56 my-8 sm:mt-16 mb-10 md:mx-auto lg:ml-20 md:w-60 md:px-2">
              <Link to={"/Allprojects"}><SecondaryCTA name={"All projects"}/></Link>
              <Link to={"/Residential"}><SecondaryCTA name={"Homes"}/></Link>
              
              </div>
            </section>

            <section>
          {/* Hero section graphics */}
              <div className=" flex justify-between w-[260px] mx-auto sm:w-72 sm:py-2 md:w-[330px] xl:-mt-32">
                <img src="https://images.unsplash.com/photo-1554909173-9beae37bb096?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw3MHx8YWZyaWNhbiUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3MDI0OTY1MzR8Mg&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='h-[280px] w-20 object-cover sm:h-[300px] sm:w-20 md:h-[450px] md:w-24'loading='lazy'/>

                <img src="https://images.unsplash.com/photo-1580394640019-00d34094ae13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw0Mnx8YWZyaWNhfGVufDB8MXx8fDE3MDI0OTU3MDJ8Mg&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='h-[280px] w-20 object-cover sm:h-[300px] sm:w-20 md:h-[450px] md:w-24'loading='lazy'/>

                <img src="https://images.unsplash.com/photo-1465804575741-338df8554e02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyM3x8YXJjaGl0ZWN0dXJlfGVufDB8fHx8MTcwMjQ5MDIxMHwy&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='h-[280px] w-20 object-cover sm:h-[300px] sm:w-20 md:h-[450px] md:w-24'loading='lazy'/>  
              </div>  
                
            </section>
        </div>

        {/* Bouncing arrow */}
        <div className="lg:mt-20 mt-10 mb-10 w-fit animate-bounce mx-auto -z-10 md:-mt-2 md:mb-2 xl:mt-24">
          <div className='grid place-items-center h-10 w-10 sm:h-20 sm:w-20 md:h-10 md:w-10'>
              <img src="images/down.png" alt="" className='scale-75'/>
          </div>
        </div>

        <p className='mx-auto font-quicksand text-2xl text-center font-regular sm:scale-125 mb-10 md:mt-8'>African roots, modern design.</p>

        <section className='mx-auto grid grid-cols-2 w-[90%] h-60 mb-20 -z-10 sm:w-[90%] md:-mt-14 md:w-[50%] max-w-[900px]'>
          <div className='relative'>
            <img src="https://images.unsplash.com/photo-1508145577282-d5df74b7a94c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw2OHx8bW9kZXJufGVufDB8fHx8MTcwMjUzODI0M3wy&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='w-full h-full object-cover'/>

            <div className='absolute w-full h-full bg- bg-opacity-25 top-0'>
              <p className='w-fit mx-auto my-20 font-regular text-white font-quicksand text-xl sm:text-4xl sm:pt-20 md:pt-0 md:text-2xl xl:text-4xl xl:mt-40'>Modern</p>
            </div>
          </div>
          <div className='relative'>
            <img src="https://images.unsplash.com/photo-1605297507265-a46432d9c44d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyMHx8Y29udGVtcG9yYXJ5fGVufDB8fHx8MTcwMjUzODM0MXwy&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" className='h-full'/>

            <div className='absolute w-full h-full bg-black bg-opacity-25 top-0'>
              <p className='w-fit mx-auto my-20 font-regular text-white font-quicksand text-xl sm:text-4xl sm:pt-20 md:pt-0 md:text-2xl xl:text-4xl xl:mt-40'>Contemporary</p>
            </div>
          </div>
        </section>

        <section className=' md:h-20 md:-mt-96 sm:bg-red text-white mx-auto w-fit h-20 flex flex-col justify-center -mt-[200px] sm:pt-72'>
          <img src="https://svgsilh.com/svg/157977-ffffff.svg" alt="" className='h-10 w-12 mx-auto opacity-80 sm:h-[70px] sm:w-[70px] xl:mt-60'/>
          <p className='w-fit mx-auto font-regular text-white font-allura text-xl sm:text-5xl'>African</p>
          <div>
          </div>
        </section>

        <section className='mx-auto h-[500px] w-96 grid place-items-center my-24 sm:scale-125 sm:mt-[600px] md:w-[50%] md:mt-[400px] xs:scale-80 xs:mx-auto xs:w-80'>
          <div className=" mx-auto pb-4 h-40 w-40">
          <img src="src/images/logo2.jpg" alt="" className=' object-cover w-full'/>
          </div>
      {/* Striking a balance */}
          <p className='text-4xl font-urbanist font-bold w-fit mx-auto'>Striking a balance</p>

          <p className='font-quicksand text-center text-md my-4 w-56 md:w-72 lg:w-96'>FDA Designs believes in African culture, modernisation and embracing the environment, with the help of our team of experts we harmonise all three aspects and express them through innovative, breath taking architectural design.</p>
          <div className="py-8 mx-auto">
            <Link to={"about"}><PrimaryCTA name={"About Us"}/></Link>
            </div>
        </section>

      {/* Projects */}
       <p className='font-semibold text-4xl text-center font-urbanist mx-auto mt-8 md:text-4xl md:mt-60 mb-20'>Our most notable projects</p>   

      {/* Project 1 */}

          <ProjectonHome name={'Project 3-3'} image={"images/3br/3br6.jpg"} year={2023} category= {'Residential'} bedrooms={3}/>
      
      {/*Project 2  */}

        <ProjectHomeReversed name={'Project 4-1'} image={"images/4br/4br1.png"} year={2023} category= {'Residential'} bedrooms={4}/>
              
        

        {/*Project 3  */}

        <ProjectonHome name={'Project 4-5'} image={"images/4br/4br11.png"} year={2023} category= {'Residential'} bedrooms={4}/>

        {/* Get in touch */}
        <section className='relative h-[40rem] py-24 font-urbanist text-center mt-40'>
          <img src="images/contactMap (2).jpg" alt="" className='absolute -z-10 w-full h-full top-0 object-cover'/>
          <p className='font-bold text-4xl md:text-6xl'>Get in touch</p>
          <p className='font-semibold text-xl mt-8 mb-20 md:text-2xl'>Reach out, let's talk <span className='font-allura'>Architecture</span></p>
          <div className="mt-10 mb-20">
            <Link to={'contact'}><PrimaryCTA name={ "Message Us" }/></Link>
          </div>
          <a href='tel: +265885259776' className='text-xl md:text-2xl'>+265 885 259 776</a>

        </section>

        <div className="-mt-8">
          <Footer/>
        </div>

      </div>
    </div>
    </AnimatedPage>
  )
}
