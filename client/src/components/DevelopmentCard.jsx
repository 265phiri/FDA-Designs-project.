import React, { useState } from 'react'
// import { SecondaryCTA } from './SecondaryCTA'
// import { Link } from 'react-router-dom';

export const DevelopmentCard = (props) => {
    const name = props.name;
    const year = props.year;
    const bedrooms = props.bedrooms;
    const category = props.category;
    const imageUrl = props.imageUrl;

  

  return (
    <div className="mb-10">
        <div className='h-fit w-full mx-auto relative xl:scale-100'>
          <div  className="w-full h-56 relative">
            <img src={imageUrl} alt="" className='h-full w-full object-cover' loading='lazy'/>
          </div>
            
          <div className="w-full h-20 bg-white">
            <div className="">
              <p className='font-urbanist font-semibold pl-3 pt-3'>{name}</p>
              <div className="flex  w-fit font-roboto font-bold text-sm h-7 mt-0">
                <p className=' p-3'>{year}</p>
                <p className=' p-3'>{bedrooms}</p>
              </div>
            </div>

            <div className="w-fit text-sm font-roboto font-semibold p-1 bg-light ml-auto mr-3 -mt-12 ">
              <p>{category}</p>
            </div>
          </div>
          {/* <div className="flex  w-fit mt-0 mb-4 mx-auto lg:ml-6 lg:scale-90 xl:ml-2 xl:mt-4">
              <a href='allprojects'><SecondaryCTA name={"View Projects"}/></a>
          </div> */}
        </div>
    </div>

  )
  }
