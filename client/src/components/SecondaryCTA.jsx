import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export const SecondaryCTA = (props) => {

    const name = props.name
    

    return (
    <button className='font-monserrat flex items-center mt-8 py-2 border-b-2 border-transparent hover:border-b-2 duration-300 hover:border-black sm:scale-125 md:text-xs md:mt-2 md:text-mostlyblack'>
        <p className='mr-2 text-md'>{name}</p>
        < MdArrowOutward/>
    </button>
    )
    }
