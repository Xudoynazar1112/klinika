import React from "react";
import workers2 from "/images/photo.jpeg";
import doctor from "/images/doctor.jpg";
import Call from "../../components/call/Call";
import { Link } from "react-router-dom";
import HomeComp from "../../components/home/HomeComp";
import { IoMdTime } from "react-icons/io";
import { FaLaptopMedical } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation()
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-48 px-10 py-10 bg-gradient-to-l from-blue-400 to-white dark:to-black">
        <div data-aos="fade-up" className="pt-10">
          <h1 className="md:text-6xl text-3xl text-black dark:text-white">
            {t('home.soglik')}
          </h1>
          <p className="mt-5 text-black dark:text-white">
            {t('home.soglik-body')}
          </p>
          <div data-aos="flip-up" className="flex pt-20 gap-5">
            <Link
              to={"/contact"}
              className="border-black dark:border-white border-2 px-4 rounded-2xl text-2xl text-black dark:text-white"
            >
              {t('home.manzil')}
            </Link>
            <Call />
          </div>
        </div>
        <div data-aos="fade-up">
          <img src={doctor} alt="employee" className="w-[40rem]" />
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col md:flex-row gap-10 mt-16 ">
        <HomeComp
          icon={IoMdTime}
          head={t('homeComp.head1')}
          body={
            t('homeComp.body1')
          }
        />
        <HomeComp
          icon={FaLaptopMedical}
          head={t('homeComp.head2')}
          body={t('homeComp.body2')}
        />
        <HomeComp
          icon={FaHandHoldingMedical}
          head={t('homeComp.head3')}
          body={t('homeComp.body3')}
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-48 px-10 py-10 mt-20 bg-gradient-to-l from-blue-400">
        <div data-aos="fade-up">
          <img src={workers2} alt="employee" className="w-[37rem]" />
        </div>
        <div data-aos="fade-up">
          <h1 className="md:text-6xl text-4xl">{t('klinika.head')}</h1>
          <p className="mt-5">
            {t('klinika.body1')}
          </p>
          <p className="mt-2">
          {t('klinika.body2')}
          </p>
          <p className="mt-2">
          {t('klinika.body3')}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
