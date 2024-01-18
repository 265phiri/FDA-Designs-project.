import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation'
import { DevelopmentCard } from '../components/DevelopmentCard'
import { Footer } from '../components/Footer'
import AnimatedPage from '../components/AnimatedPage'
import { SecondaryCTA } from '../components/SecondaryCTA';
import { Link } from 'react-router-dom';

export const Developments = () => {

  

  return (
    <AnimatedPage>
    <div className='bg-light w-screen h-screen overflow-x-hidden'>
     <div className="fixed z-40"><Navigation/></div>

     <div className="text-center pt-32">
      <p className="font-urbanist font-bold text-mostlyblack text-4xl">Developments</p>
      <div className="mx-auto w-fit pt-20">
        <Link to={"/allprojects"}>
          <SecondaryCTA name={"See all projects"}/>
        </Link>
      </div>
     </div>

      <div className='sm:px-4 mx-auto grid sm:grid-cols-2 xl:grid-cols-3  h-fit w-fit gap-10 md:gap-16 xl:gap-20 mt-20 mb-40'>
          
          <DevelopmentCard 
            name = {"Project 2-1"}
            imageUrl = {"images/2br/2br.jpg"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"3 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 3-1"}
            imageUrl = {"images/3br/3br1.jpg"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"3 bedrooms"}
          />
          
          <DevelopmentCard 
            name = {"Project 3-2"}
            imageUrl = {"images/3br/3br4.jpg"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"3 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 3-3"}
            imageUrl = {"images/3br/3br5.jpg"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"3 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 4-1"}
            imageUrl = {"images/4br/4br1.png"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"4 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 4-2"}
            imageUrl = {"images/4br/4br3.png"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"4 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 4-3"}
            imageUrl = {"images/4br/4br5.jpg"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"4 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 4-4"}
            imageUrl = {"images/4br/4br6.jpg"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"4 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 4-5"}
            imageUrl = {"images/4br/4br10.png"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"4 bedrooms"}
          />

          <DevelopmentCard 
            name = {"Project 4-6"}
            imageUrl = {"images/4br/4br12.jpg"}
            year = {"2023"}
            category = {"Residential design"}
            bedrooms = {"4 bedrooms"}
          />

      </div>
      <Footer/>

    </div>
    </AnimatedPage>
  )
}
