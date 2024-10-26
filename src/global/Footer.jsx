import React from "react";
import logo from "../assets/images/logo.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import Call from "../components/call/Call";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:mx-40 mx-10 my-10 md:p-10 p-3 bg-[#E1FDFE] rounded-2xl">
        <div className="flex flex-col gap-3">
          <h1 className="md:text-4xl text-2xl pb-3">
            Ko'p filialli «Vatan tibbiyot markazi»
          </h1>
          <div>
            <p>
              <b>Manzil:</b>
            </p>
            <p>Uchtepa tumani, Qatortol ko'chasi</p>
          </div>
          <div>
            <p>
              <b>Orientr:</b>
            </p>
            <p>Oqtepa lavashni to'g'risida</p>
          </div>
          <div>
            <p>
              <b>Ish vaqti:</b>
            </p>
            <p>Du-Yak 24/7 ish vaqti</p>
          </div>
          <div className="flex">
            <BsFillTelephoneFill />{" "}
            <a href="tel:+998889251111">+998 (88) 925-11-11</a>
          </div>
          <div className="flex">
            <BsFillTelephoneFill />{" "}
            <a href="tel:+998889251111">+998 (88) 925-11-11</a>
          </div>
          <div className="flex">
            <MdOutlineEmail /> <p>Vatantibbiyotmarkazi@gmail.com</p>
          </div>
          <div className="flex">
            <FaRegAddressCard /> <p>https://vatantibbiyot.uz</p>
          </div>
          <div className="pt-5">
            <Call />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2998.446636264613!2d69.175495!3d41.27738300000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89671f2aea5d%3A0x444523068491c2c!2sVatan%20Tibbiyot%20Markazi!5e0!3m2!1suz!2sus!4v1729926329965!5m2!1suz!2sus"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="md:px-48 bg-green-300 grid grid-cols-3 gap-5 justify-items-center items-center py-10 border-t-blue-700 border-t-4">
        <div>
          <img src={logo} alt="logo" className="w-48" />
          <p>
            ХК «Vatan Med City» ОГРН 1187746719610 ИНН 9723058626 Лицензия
            Л041-01148-78/00287864 от 25.12.2020 Учтепинский район, 26-й
            квартал, 24а/1 стр 1 этаж Мўлжал: рядом с Октепа лаваш
          </p>
        </div>
        <div className="flex flex-col">
          <Link to={"#"}>Klinika haqida</Link>
          <Link to={"#"}>Aloqa</Link>
        </div>
        <div className="icons">
          <p>
            <FaTelegramPlane />
            <span>Telegram</span>
          </p>
          <p>
            <FaInstagram /> <span>Instagram</span>
          </p>
          <p>
            <FiYoutube />
            <span>You Tube</span>
          </p>
          <p>
            <FaFacebook /> <span>Facebook</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
