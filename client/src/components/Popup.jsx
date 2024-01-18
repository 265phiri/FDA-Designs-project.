import React from 'react'

export default function Popup() {
  return (
    <div className=' bg-white max-w-[200px] h-12 w-56 flex flex-col justify-center items-center font-inter gap-6 text-sm relative drop-shadow-xl '>
        <p>Email sent successfully</p>
        <div className='h-4 w-4 rounded-full bg-gold absolute -top-1 -right-1'>
        <div className='h-6 w-6 rounded-full bg-gold absolute -top-1 -right-1 animate-pulse'></div>
        </div>
    </div>
  )
}
