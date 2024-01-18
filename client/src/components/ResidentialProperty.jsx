import React from 'react'

export const ResidentialProperty = (props) => {
  const name = props.name;
  const bedrooms = props.bedrooms;
  const year = props.year;
  const imageUrl = props.imageUrl;
  return (
    <div className='h-72 w-72 bg-light mb-20'>
        <img src={imageUrl} alt="" className='h-full w-full object-cover' loading='lazy'/>
        <div className="mt-6 font-josefin text-sm">
            <p className='font-bold mb-2'>{name}</p>
            <p>{bedrooms} bedrooms</p>
            <p>{year}</p>
        </div>
    </div>
  )
}
