import React from "react";
import workers2 from "/images/photo.jpeg";
import doctor from "/doctor/main-page.jpg";
import { Link } from "react-router-dom";
import HomeComp from "../../components/home/HomeComp";
import ServicePrice from "../../components/price/ServicePrice";
import { IoMdTime } from "react-icons/io";
import { FaLaptopMedical, FaPhoneAlt } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useTranslation } from "react-i18next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Home = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-48 px-10 py-10 bg-gradient-to-l from-blue-400 to-white dark:to-black">
        <div data-aos="fade-up" className="pt-10">
          <h1 className="md:text-6xl text-3xl text-black dark:text-white">
            {t("home.soglik")}
          </h1>
          <p className="mt-5 text-black dark:text-white">
            {t("home.soglik-body")}
          </p>
          <div data-aos="flip-up" className="flex pt-20 gap-5">
            <Link
              to={"/contact"}
              className="border-black dark:border-white border-2 py-2 px-4 rounded-2xl text-2xl w-full text-center text-black dark:text-white hover:bg-[#00959B] hover:text-white transition-all"
            >
              {t("home.manzil")}
            </Link>
            <div className="w-full">
              <div className="p-1 px-4 h-full bg-[#00959B] rounded-2xl flex gap-3 items-center justify-center text-white ">
                <a
                  href="tel:+998991100033"
                  className=" text-2xl text-white hover:text-green-300 transition-all flex gap-3 items-center justify-center"
                >
                  <FaPhoneAlt />
                  {t("call")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <img src={doctor} alt="employee" className="w-[40rem] rounded" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row gap-10 mt-16 "
      >
        <HomeComp
          icon={IoMdTime}
          head={t("homeComp.head1")}
          body={t("homeComp.body1")}
        />
        <HomeComp
          icon={FaLaptopMedical}
          head={t("homeComp.head2")}
          body={t("homeComp.body2")}
        />
        <HomeComp
          icon={FaHandHoldingMedical}
          head={t("homeComp.head3")}
          body={t("homeComp.body3")}
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-48 px-10 py-10 mt-20 bg-gradient-to-l from-blue-400">
        <div data-aos="fade-up">
          <img src='/doctor/collegee.jpg' alt="employee" className="w-[37rem]" />
        </div>
        <div data-aos="fade-up">
          <h1 className="md:text-6xl text-4xl">{t("klinika.head")}</h1>
          <p className="mt-5">{t("klinika.body1")}</p>
          <p className="mt-2">{t("klinika.body2")}</p>
          <p className="mt-2">{t("klinika.body3")}</p>
        </div>
      </div>
      
      <div className="mt-10 w-full">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <img src="/doctor/Экг.jpg" alt="doctor" />
              <div className="description">
                <h1>EKG</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Уролог.jpg" alt="doctor" />
              <div className="description">
                <h1>Urolog</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Узи.jpg" alt="doctor" />
              <div className="description">
              <h1>UZI</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Терапевт.jpg" alt="doctor" />
              <div className="description">
              <h1>Teropevt</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Стационар.jpg" alt="doctor" />
              <div className="description">
              <h1>Statsionar</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Пульмонолог.jpg" alt="doctor" />
              <div className="description">
              <h1>Pulmonolog</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Мскт.jpg" alt="doctor" />
              <div className="description">
              <h1>MSKT</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/endocrinology-2.jpg" alt="doctor" />
              <div className="description">
              <h1>Endikronolog</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/kardiolog.jpg" alt="doctor" />
              <div className="description">
              <h1>Kardiolog</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/nevrapatoliog.jpg" alt="doctor" />
              <div className="description">
              <h1>Nevropotolog</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img
                src="/doctor/yzbo7uslqlbtfkz2s9gc5xyj7yvj118w.jpg"
                alt="doctor"
              />
              <div className="description">
              <h1>Kardiolog</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Гинеколог.png" alt="doctor" />
              <div className="description">
              <h1>Ginikolog</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="container">
              <img src="/doctor/Лаборатория.jpg" alt="doctor" />
              <div className="description">
              <h1>Labaratoriya</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
