import React from 'react'

export const PrimaryCTA = (props) => {

  const name = props.name
    
  return (
    <button className='py-2 px-20 text-white bg-black font-quicksand'>{name}</button>
  )
}
