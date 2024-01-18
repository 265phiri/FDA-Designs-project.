import React from 'react'
import { ResidentialProperty } from '../components/ResidentialProperty'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { SecondaryCTA } from '../components/SecondaryCTA'
import { Link } from 'react-router-dom'

export const Residential4BR = () => {

    return (
        <div>
            <div className="fixed z-40 top-0">
                <Navigation/>
            </div>
    
            <div className="text-center pt-32 w-full  mx-auto">
            <p className="font-urbanist font-bold text-mostlyblack text-4xl"> Four bedroom Residential</p>
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
                    name = {"Project 4-1"}
                    imageUrl = {"images/4br/4br1.png"}
                    year = {"2023"}
                    category = {"Residential design"}
                    bedrooms = {"4 bedrooms"}
                />

                <ResidentialProperty 
                    name = {"Project 4-2"}
                    imageUrl = {"images/4br/4br3.png"}
                    year = {"2023"}
                    category = {"Residential design"}
                    bedrooms = {"4 bedrooms"}
                />

                <ResidentialProperty 
                    name = {"Project 4-3"}
                    imageUrl = {"images/4br/4br5.jpg"}
                    year = {"2023"}
                    category = {"Residential design"}
                    bedrooms = {"4 bedrooms"}
                />

                <ResidentialProperty 
                    name = {"Project 4-4"}
                    imageUrl = {"images/4br/4br6.jpg"}
                    year = {"2023"}
                    category = {"Residential design"}
                    bedrooms = {"4 bedrooms"}
                />

                <ResidentialProperty 
                    name = {"Project 4-5"}
                    imageUrl = {"images/4br/4br10.png"}
                    year = {"2023"}
                    category = {"Residential design"}
                    bedrooms = {"4 bedrooms"}
                />

                <ResidentialProperty 
                    name = {"Project 4-6"}
                    imageUrl = {"images/4br/4br12.jpg"}
                    year = {"2023"}
                    category = {"Residential design"}
                    bedrooms = {"4 bedrooms"}
                />


            </div>
            <Footer/>
        </div>
      ) 
}
