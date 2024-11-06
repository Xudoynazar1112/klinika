import React from 'react'

const ServicePrice = ({type, price}) => {
  return (
    <div className='border-3 shadow-md w-[23rem] flex justify-between items-end p-5 rounded-xl'>
        <p className='w-2/3 font-semibold'>{type}</p>
        <p className='font-semibold'>{price} so'm</p>
    </div>
  )
}

export default ServicePrice