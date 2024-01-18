import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import AnimatedPage from '../components/AnimatedPage'

export const About = () => {
  return (
    <AnimatedPage>
    < div className='overflow-x-hidden max-w-[2000px] xl:mx-auto'>
      <div className="fixed z-40 top-0"><Navigation/></div>

{/* Hero section copy */}
      <section className='mt-32 grid grid-cols-1 lg:grid-cols-2 gap-2 xl:mt-20'>
        
        <div className="md:mt-20 lg:max-h-[400px] lg:mt-24">
        <h1 className='font-semibold text-mostlyblack font-urbanist text-6xl text-center pt-10 pb-14 sm:text-5xl lg:text-6xl lg:text-left lg:pl-24 lg:pb-20 xl:text-8xl'>About Us</h1>
            <p className='font-semibold font-urbanist text-xl text-center leading-8 mx-auto sm:text-2xl max-w-[300px] sm:max-w-md sm:mx-auto lg:text-2xl lg:text-left lg:ml-24 lg:max-w-lg lg:pb-8 xl:text-3xl xl:leading-10'>Embracing <span className='font-allura px-2 text-xl'>Afro-contemporary</span>design. That's contemporary architecture with an African touch.</p>
            <p className=' font-quicksand text-md  text-center mt-6 max-w-[250px] lg:max-w-sm lg:text-fourteen sm:text-fourteen lg:ml-24 mx-auto lg:text-left xl:text-lg  xl:w-96'>Be it in texture, patterns as well as form, we aim to give buildingd a sense of identity and belonging by embracing the African culture</p>
        </div>

{/* Hero graphics */}
        <section className=" mt-0 h-[700px] py-20 sm:py-10 md:h-[700px] md:py-20 xl:-mt-12">
          <div className=' h-[470px] w-[70%] md:mx-auto md:mt-20 bg-light mx-auto grid grid-row-3 p-3 lg:mt-10 xl:p-8 gap-3 sm:mx-auto xl:mt-20 xl:gap-3 xl:h-[800px] md:h-[700px] lg:h-[570px]'>
              <div className="h-23 xl:h-56 col-span-3">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3VzZXxlbnwwfDB8fHwxNzAyNDk2ODQ2fDI&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='w-full h-full object-cover'/>
              </div>
              <div className="h-32 xl:56 col-span-1 xl:h-56">
                <img src="https://images.unsplash.com/photo-1519011985187-444d62641929?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZXxlbnwwfHx8fDE3MDI0OTg2NzR8Mg&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='w-full h-full object-cover'/>
              </div>
              <div className="h-32 xl:56 col-span-2 xl:h-56">
                <img src="https://images.unsplash.com/photo-1616667664034-c947c1e2cf29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw0fHxhZnJpY2FuJTIwY3VsdHVyZXxlbnwwfHx8fDE3MDI0OTg2NzR8Mg&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='w-full h-full object-cover'/>
              
              </div>

              <div className="h-40 col-span-3 xl:h-60">
                <img src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyMXx8bW9kZXJuJTIwaG91c2V8ZW58MHwwfHx8MTcwMjQ5Njg0Nnwy&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" alt="" className='w-full h-full object-cover'/>
              </div>
          </div>
        </section>
      </section>


{/* Inspiration */}
      <section className='mb-40 mt-2 md:mb-32 sm:mt-96 md:mt-56 lg:mx-20 lg:mt-32 xl:mt-96'>
        <div className=" text-center font-quicksand text-sm mx-6 py-20">
          <p className='md:text-3xl sm:text-xl'>"</p>
          
          <p className='sm:text-md sm:w-96 md:text-md md:w-2/3 mx-auto xl:text-lg xl:w-[800px] xl:lea'>
            Our inspiration came from having creative freedom and a vision to give clients a better experience with their projects by offering them the chance to have personalised designs that reflect their personal values and the places surrounding them.
          </p>
          <p className='md:text-3xl'>"</p>
          <p className='font-roboto font-semibold'>-FDA team-</p>
        </div>
      </section>

{/* The men who built FDA */}
      <div className=" w-fit mx-auto"><p className='font-urbanist text-center text-4xl w-fit font-semibold leading-9 md:text-2xl xl:text-3xl'>The men who built FDA Designs</p>
      </div>

      <section className=''>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 md:w-[600px] md:mx-auto">
            
            <div className="mb-24">
                <div className="h-40 w-40 rounded-full bg-light mb-6 mx-auto">
                    <img src="images/david.jpg" alt="" className='object-cover h-full w-full rounded-full'/>
                </div>
                <p className='text-center font-roboto font-semibold text-lg'>David Madziatayika</p>
                <p className='text-center font-roboto font-semibold'>Co-founder</p>
            </div>
            
            <div className="mb-24">
                <div className="h-40 w-40 rounded-full bg-light mb-6 mx-auto">
                    <img src="images/fiskani.jpg" alt="" className='object-cover h-full w-full rounded-full'/>
                </div>
                <p className='text-center font-roboto font-semibold text-lg'>Fiskani Nkhonjera</p>
                <p className='text-center font-roboto font-semibold'>Co-founder</p>
            </div>
        </div>
      </section>

{/* Qualities */}
      <section>
        <div className=" mx-auto flex justify-between text-xs font-urbanist font-semibold w-72 md:text-md md:w-96 xl:text-lg xl:w-[500px] ">
          <p>Creatives</p>
          <p>Resourceful</p>
          <p>Driven</p>
          <p>Collaborative</p>
        </div>

        <p className='font-quicksand leading-8 text-md text-center mx-10 mt-10 md:w-4/6 md:mx-auto xl:w-1/2 xl:text-lg xl:leading-10'>
        Architecture graduates from the Malawi University of Business and Applied Sciences, our leaders have nurtured and embraced Afro-contemporary design, delivering architectural marvels that embrace the earth, our contextual surroundings and ultimately African culture. 
        </p>
      </section>

{/* Originality */}
      <section className='w-full my-32 md:w-2/3 md:mx-auto md:mt-56 xl:flex  xl:flex-row-reverse xl:scale-125 xl:my-96'>
        <div className="w-full h-96 ">
            <img src="https://images.unsplash.com/photo-1568878801942-6fc477a748db?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
        </div>

        <div className="xl:mr-20 xl:w-10/12 ">
          <p className='text-center mx-4 mt-10 text-4xl font-urbanist leading-big xl:mt-0 xl:text-left xl:text-3xl xl:leading-10 xl:ml-0'>
            Experience <span className='px-2 font-allura text-3xl xl:text-4xl'>originality </span>in architectural design.
          </p>

          <p className='font-urbanist font-extralight leading-8 text-center mx-6 text-md mt-10 xl:text-md xl:leading-6 xl:text-left xl:ml-0'>
          Explore the rich tapestry of Afro-contemporary architecture on our website, where innovation converges with cultural heritage. Our designs seamlessly blend modern aesthetics with traditional African influences, offering a unique and original perspective that celebrates the diversity and vibrancy of the continent. Discover a harmonious fusion of form and function that redefines architectural boundaries, setting a distinctive tone in the world of design.
          </p>
        </div>

        <div className="">

        </div>

      </section>
      
{/* Sync */}
      <section className='w-full my-32 md:w-2/3 md:mx-auto md:mt-56 xl:flex  xl:flex-row xl:scale-125 xl:my-96'>
        <div className="w-full h-96 ">
            <img src="https://images.unsplash.com/photo-1434434319959-1f886517e1fe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
        </div>

        <div className="xl:ml-20 xl:w-10/12">
        <p className='text-center mx-4 mt-10 text-4xl font-urbanist leading-big xl:mt-0 xl:text-left xl:text-3xl xl:leading-10 xl:ml-0'>
          Be in<span className='px-2 font-allura text-3xl'>sync </span>with your environment.
          </p>

          <p className='font-urbanist font-extralight leading-8 text-center mx-6 text-md mt-10 xl:text-md xl:leading-6 xl:text-left xl:ml-0'>
            Most architecture styles today aim at giving a modern feel to the built environment which in most cases is achieved through random selection of design elements that at the end of it all create a clean looking society but alien. 
          Afro-contemporary architecture embraces nature and it's elements. From earth colours, texture , patters all the way to materials. All this blended with contemporary architecture creates a modern feel to our spaces that we all can enjoy with all belonging.
          </p>
        </div>

        <div className="">

        </div>

      </section>
{/* family */}
      <section className='w-full my-32 md:w-2/3 md:mx-auto md:mt-56 xl:flex  xl:flex-row-reverse xl:scale-125 xl:my-96'>
        <div className="w-full h-80 ">
            <img src="https://images.unsplash.com/photo-1606787364410-947e10173148?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
        </div>

        <div className="xl:mr-20 xl:w-10/12">
        <p className='text-center mx-4 mt-10 text-4xl font-urbanist leading-big xl:mt-0 xl:text-left xl:text-3xl xl:leading-10 xl:ml-0'>
            It's more than houses, we design <span className='px-2 font-allura text-3xl'>Homes </span>.
          </p>

          <p className='font-urbanist font-extralight leading-8 text-center mx-6 text-md mt-10 xl:text-md xl:leading-6 xl:text-left xl:ml-0'>
            At FDA Designs we are not only concerned with designing shelters for our clients, we aim to create spaces where memories are made and cherished, a home filled with love and affection a welcoming space for generations to come.
          </p>
        </div>

        <div className="">

        </div>

      </section>

      <section className='w-full my-32 md:w-[80%] md:mx-auto md:mt-56 xl:w-2/3 xl:my-96'>
        <div className="w-full h-72 xl:scale-100 xl:h-96 xl:mx-auto">
            <img src="https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
        </div>

        <div className="">
          <p className='text-center mt-10 text-4xl font-urbanist leading-big xl:text-4xl'>
            Let us<span className='px-2 font-allura text-3xl xl:text-4xl'>grow </span>together in our spaces.
          </p>

          <p className='font-urbanist leading-8 text-center mx-6 text-md mt-10 xl:w-96 xl:mx-auto xl:text-md'>
            Our platform is for everyone who has an eye for beauty and design,all aspiring architects and experts in the field. We want to share our designs with everyone. We hope you enjoy!
          </p>
        </div>


      </section>

      <section className="grid grid-cols-2 grid-rows-4 gap-2 h-60 w-56 mx-auto my-32 p-2 md:mt-56  md:scale-125 lg:scale-x-150">
          <div className="bg-light row-span-2">
            <p className='font-allura w-fit mx-auto mt-10 text-xl'>Originality</p>
          </div>
          <div className="bg-black row-span-1">
            <p className='font-allura w-fit mx-auto mt-3 text-white text-xl'>Sync</p>
          </div>
          <div className="bg-gray row-span-3">
            <p className='font-allura w-fit mx-auto mt-16 text-xl'>Growth</p>
          </div>
          <div className="bg-gold opacity-60 row-span-2 ">
            <p className='font-allura w-fit mx-auto mt-10 text-xl text-white '>
              Homes
            </p>
          </div>
      </section>

      <section className='h-96 mb-40 md:mt-56 md:scale-125 md:mb-72 lg:scale-150 lg:mb-80'>
        <img src="images/logo2.jpg" alt="" className='w-40 h-40 object-cover mx-auto'/>
        <div className="flex  mx-auto w-72 fustify-between px-3">
          <div className="h-32 mt-20 w-32 text-center mr-auto">
              <p className='font-roboto font-semibold mb-4 text-sm mx-auto'>years experience</p>
              <p className='font-roboto font-semibold text-5xl flex items-center justify-center'>3<span className='text-3xl'>+</span></p>
          </div>
          <div className="h-32 mt-20 w-32 text-center  ">
              <p className='font-roboto font-semibold mb-4 text-sm'>projects</p>
              <p className='font-roboto font-semibold text-5xl flex items-center justify-center'>10<span className='text-3xl'>+</span></p>
          </div>
        </div>
      </section>

    </div>
      <Footer/>
    </AnimatedPage>
  )
}
