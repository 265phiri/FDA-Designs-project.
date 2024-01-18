import React, { useRef } from 'react';
import Data from '../components/developments.json'

export const Projectcomponent = () => {

   
    const containerRef = useRef(null);
  
    const handleWheelScroll = (e) => {
      const container = containerRef.current;
      if (container) {
        container.scrollTo({
          left: container.scrollLeft + e.deltaY * 16,
          behavior: 'smooth',
        });
      }
    };

    return (

        <div className="">
          {
            Data.map( post => (
              <section className="mt-32 my-20">
                <div className=" lg:w-96 lg:ml-6 sm:ml-5 sm:mt-40 xl:w-[400px] xl:ml-40 xl:mt-40">

                <p className='text-2xl text-center sm:text-left mt-40 mb-10  font-josefin font-bold sm:text-2xl sm:mb-10 lg:text-4xl lg:mb-10  xl:text-5xl xl:mb-20'>{post.name}</p>
                
                </div>

                
                <div className="sm:mx-auto sm:w-[95%] md:h-96 h-[400px] lg:h-[30rem] lg:w-[95%] xl:w-[1200px] xl:h-[600px] xl:ml-40 xl:mb-20 bg-white mx-auto overflow-x-auto flex-shrink-0 scroll-smooth"
                   id="container"
                   ref={containerRef}
                   onWheel={handleWheelScroll}>

                  {post.images.map((image, index) => (

                        
                          <img key={image.id} src={image} alt={`Image ${index + 1}`} className='object-contain h-full w-full' loading='lazy'/>
                          )
                        
                        )}  
                </div>

                <div className="font-roboto mb-60 text-sm text-center sm:text-left mt-2 sm:ml-5 md:ml-12 sm:mt-10  lg:ml-24 lg:mt-10 xl:w-[400px] xl:ml-60 xl:mt-8 xl:text-sm">
                 <p className='font-josefin font-semibold xs:text-xl  xl:text-lg     xl:font-semibold xl:mb-3 mb-3'>{post.year}</p>
                  <p  className='mb-2'>{post.category}</p>
                  <p  className='mb-2'>{post.bedrooms} bedrooms</p>
                  
                  
              </div>

              </section>
            ))
          }
        </div>
                    
    )

}