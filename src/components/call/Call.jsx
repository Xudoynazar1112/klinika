import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";

const Call = () => {
  const [t, i18n] = useTranslation()
  return (
    <div className='p-1 px-4 bg-green-700 rounded-2xl flex gap-3 items-center justify-center text-white hover:text-green-300'><FaPhoneAlt /><a href='tel:+998991100033' className=' text-2xl text-white hover:text-green-300'>{t('call')}</a></div>
  )
}

export default Call