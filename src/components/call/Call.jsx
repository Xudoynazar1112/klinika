import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Call = () => {
  return (
    <div className='p-1 px-4 bg-green-700 rounded-2xl flex gap-3 items-center justify-center text-white hover:text-green-300'><FaPhoneAlt /><a href='tel:+998991100033' className=' text-2xl text-white hover:text-green-300'>Qo'ng'iroq</a></div>
  )
}

export default Call