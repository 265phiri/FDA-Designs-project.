import React from 'react'
import { ResidentialProperty } from '../components/ResidentialProperty'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { SecondaryCTA } from '../components/SecondaryCTA'
import { Link } from 'react-router-dom'



export const Residential2BR = () => {

    return (
        <div>
            <div className="fixed z-40 top-0">
                <Navigation/>
            </div>
    
            <div className="text-center pt-32 w-full  mx-auto">
            <p className="font-urbanist font-bold text-mostlyblack text-4xl"> Two bedroom Residential</p>
            <div className="grid md:flex justify-around mx-auto my-10 md:w-[500px] max-w-60">
                <Link to={"/residential2br"}>
                <SecondaryCTA name={"Two bedroom"}/>
                </Link>
                <Link to={"/residential3br"}>
                <SecondaryCTA name={"Three bedroom"}/>
                </Link>
                <Link to={"/residential4br"}>
                <SecondaryCTA name={"Four bedroom"}/>
                </Link>
            </div>
            </div>
    
            <div className=" mx-auto grid sm:grid-cols-2 xl:grid-cols-3  h-fit w-fit gap-10 md:gap-16 xl:gap-20 mt-20 mb-40">
                <ResidentialProperty 
                    name = {"Project 2-1"}
                    imageUrl = {"images/2br/2br.jpg"}
                    year = {"2023"}
                    category = {"Residential design"}
                    bedrooms = {"3 bedrooms"}
                />

            </div>
            <Footer/>
        </div>
      ) 
}
