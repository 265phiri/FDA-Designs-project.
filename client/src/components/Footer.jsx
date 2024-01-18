import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='mx-auto md:px-20 bg-gray w-full h-[720px] grid grid-cols-1 sm:pt-20 md:grid-cols-3 px-10'>
        <section className=' md:w-40'>
            <p className='font-urbanist text-xl font-semibold text-md mt-24 ml-8 sm:mt-8'>FDA Designs</p>
        </section>

        <section className=' text-sm mt-10 ml-8 flex flex-col font-roboto font-semibold'>
            <p className='font-urbanist font-semibold mb-10 text-seventeen'>Pages</p>
            <Link to={'/'} className='pb-3 text-sm'>Home</Link>
            <Link to={'/about'} className='pb-3 text-sm'>About Us</Link>
            <Link to={'/developments'} className='pb-3 text-sm'>Developments</Link>
            <Link to={'/categories'} className='pb-3 text-sm'>Categories</Link>
            <Link to={'/contact'}>Contact</Link>
        </section>
        
        <section className=' text-sm mt-10 ml-8 flex flex-col font-roboto font-semibold sm:px-10 md:px-0'>
            <p className='font-urbanist font-semibold mb-10 text-seventeen'>Follow Us</p>
            <a href='https://www.facebook.com/fdadesigns?mibextid=hIlR13' className='flex w-24 justify-between mb-4 items-center'><FaFacebookF/>Facebook</a>
            <a href='https://www.instagram.com/fda_designs?igsh=YzFyeTBheGxndHpz' className='flex w-24 justify-between items-center '><FaInstagram/>Instagram</a>
        </section>

        <div className="h-20 w-full mt-24 sm:col-span-3 sm:w-[90%] md:w-full">
          <p className='w-full  font-roboto text-ten font-semibold text-center py-8'>FDA Designs 2023 &#169;</p>
        </div>

    </div>


  )
}
