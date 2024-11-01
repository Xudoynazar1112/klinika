import React from "react";
import logo from "/images/logo.jpg";
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
              <b>Orientr:</b>
            </p>
            <p>Oqtepa lavashni to'g'risida (namuna)</p>
          </div>
          <div>
            <p>
              <b>Ish vaqti:</b>
            </p>
            <p>Du-Yak 24/7 ish vaqti</p>
          </div>
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill />{" "}
            <a href="tel:+998991100033">+998 (99) 110-00-33</a>
          </div>
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill />{" "}
            <a href="tel:+998991100030">+998 (99) 110-00-30</a>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail /> <p>esterlifemedicalcenter@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegAddressCard /> <p>https://estelifemedicalcenter.uz</p>
          </div>
          <div className="pt-5">
            <Call />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d16085.118637508229!2d69.24815590937108!3d41.33500183876555!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzAzLjQiTiA2OcKwMTUnMDMuMSJF!5e0!3m2!1sen!2s!4v1729940251670!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowfullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="md:px-48 px-10 bg-[#DBDCDE] grid md:grid-cols-3 grid-cols-1 gap-5 justify-items-center items-center py-10 border-t-blue-700 border-t-4">
        <div className="flex md:items-start items-canter flex-col">
          <img src={logo} alt="logo" className="w-24" />
          <p>
            ХК «Estelife medical center» ОГРН 1187746719610 ИНН 9723058626 Лицензия
            Л041-01148-78/00287864 от 25.12.2020 Учтепинский район, 26-й
            квартал, 24а/1 стр 1 этаж Мўлжал: рядом с Октепа лаваш
          </p>
        </div>
        <div className="flex flex-col">
          <Link to={"/about"}>Klinika haqida</Link>
          <Link to={"/contact"}>Aloqa</Link>
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
