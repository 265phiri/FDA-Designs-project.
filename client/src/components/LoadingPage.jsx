import React from 'react';
import { MdArchitecture } from "react-icons/md";

export const LoadingPage = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
        <div className=" items-center mt-80 flex font-urbanist font-bold text-3xl w-60 mx-auto justify-between">
            <p className=''>FDA</p>
            <div className='animate-spin sp'><MdArchitecture color='gold'/></div>
            <p>Designs</p>
        </div>
    </div>
  )
}
