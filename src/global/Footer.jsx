import React from "react";
import logo from "/images/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:mx-40 mx-10 my-10 md:p-10 p-3 bg-[#E1FDFE] text-black rounded-2xl">
        <div data-aos="fade-up" className="flex flex-col gap-3 text-xl">
          <h1 className="md:text-4xl text-2xl pb-3">
            Ko'p filialli «Estelife medical center»
          </h1>
          <div>
            <p>
              <b>Manzil:</b>
            </p>
            <p>Sebzor</p>
          </div>
          <div>
            <p>
              <b>Ish vaqti:</b>
            </p>
            <p>Du-Yak 24/7 ish vaqti</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <BsFillTelephoneFill />{" "}
            <a href="tel:+998991100033">+998 (99) 110-00-33</a>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <BsFillTelephoneFill />{" "}
            <a href="tel:+998991100030">+998 (99) 110-00-30</a>
          </div>
          <div className="flex items-center gap-2 md:text-xl text-lg">
            <MdOutlineEmail /> <p>esterlifemedicalcenter@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 md:text-xl text-lg">
            <FaRegAddressCard /> <p>https://estelifemedicalcenter.uz</p>
          </div>
          <div className="pt-5">
            <div className="py-3 bg-[#00959B] rounded-2xl flex gap-3 items-center justify-center text-white ">
              <a
                href="tel:+998991100033"
                className="text-2xl text-white hover:text-green-300 transition-all flex gap-3 items-center justify-center"
              >
                <FaPhoneAlt />
                {t("call")}
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d16085.118637508229!2d69.24815590937108!3d41.33500183876555!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzAzLjQiTiA2OcKwMTUnMDMuMSJF!5e0!3m2!1sen!2s!4v1729940251670!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="md:px-48 px-10 bg-slate-100 text-black dark:bg-gray-900 dark:text-white grid md:grid-cols-3 grid-cols-1 gap-5 justify-items-center items-center py-10 border-t-blue-700 border-t-4">
        <div className="flex md:items-start items-canter flex-col">
          <img src={logo} alt="logo" className="w-24" />
          <p>
            HC "Estelife tibbiyot markazi" OGRN 1187746719610 INN 9723058626
            2020 yil 25 dekabrdagi L041-01148-78/00287864 litsenziya Uchtepa
            tumani, 26-blok, 24a/1-bino 1-qavat
          </p>
        </div>
        <div className="flex flex-col text-xl gap-3 items-center">
          <Link
            to={"/about"}
            className="bg-slate-100 text-black dark:bg-gray-900 dark:text-white"
          >
            Klinika haqida
          </Link>
          <Link
            to={"/contact"}
            className="bg-slate-100 text-black dark:bg-gray-900 dark:text-white"
          >
            Aloqa
          </Link>
        </div>
        <div className="icons text-2xl flex flex-col gap-3">
          <p className="cursor-pointer">
            <FaTelegramPlane />
            <span>Telegram</span>
          </p>
          <p className="cursor-pointer">
            <FaInstagram /> <span>Instagram</span>
          </p>
          <p className="cursor-pointer">
            <FiYoutube />
            <span>You Tube</span>
          </p>
          <p className="cursor-pointer">
            <FaFacebook /> <span>Facebook</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
