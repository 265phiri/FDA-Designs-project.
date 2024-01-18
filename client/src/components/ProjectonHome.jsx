import React from 'react'
import { Link  } from 'react-router-dom';
import { SecondaryCTA } from './SecondaryCTA';


export const ProjectonHome = (props) => {



    const name = props.name;
    const year = props.year;
    const category = props.categoory;
    const bedrooms = props.bedrooms;
    const image  = props.image;

  return (
    <div className='max-w-[1800px] xl:mx-auto'>
      <section className=' md:ml-10 flex flex-col py-24 xs:scale-90 xs:mx-auto sm:scale-100 sm:w-2/3 md:mt-20 md:grid md:grid-cols-1 xl:grid-cols-3 md:w-[90%] xl:flex xl:flex-row-reverse xl:mx-auto '>
          <div className='h-80 w-full bg-light flex justify-end sm:w-full sm:h-[500px] md:w-[600px] xl:ml-32  xl:w-[720px]'>
              <img src={image} alt="" className='w-full h-full object-cover'/>
          </div>
              
          <div className='mt-10 mx-auto font-josefin  sm:mt-20 md:ml-[385px] lg:ml-[40%] xl:ml-40 text-center sm:text-left'>
              <p className='text-3xl font-bold sm:text-5xl mb-6 md:mb-10'>{name}</p>
              <p className='text-2xl sm:text-2xl md:mb-4'>{year}</p>
              <p className='text-2xl sm:text-2xl md:mb-4'>{category}</p>
              <p className='text-2xl sm:text-2xl md:mb-4 md:w-56'>{bedrooms} bedrooms</p>
              <div className=" ml-7  sm:ml-[1rem] mt-20 xl:hidden">
              
              <Link to={"allprojects"}><SecondaryCTA name={"View projects"}/></Link>
              
              </div>
          </div>
          
          <div className="sm:ml-[1rem] mt-20 md:ml-40 hidden xl:flex xl:h-fit xl:w-32 "><Link to={"projectpage"}><SecondaryCTA name={"View project"}/></Link></div>
      </section>
    </div>
  )
}
