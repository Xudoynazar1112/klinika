import React, { useState } from "react";
import logo from "/images/logo.jpg";
import { Link } from "react-router-dom";
import Call from "../components/call/Call";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation()
  const [isOpen, setIsOpen] = useState(false);
  const language = localStorage.getItem("i18nextLng");
  const handleChange = (event) => {
    const selectLanguage = event.target.value;
    i18n.changeLanguage(selectLanguage);
  };
  const toggleHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between items-center w-full md:px-48 px-5 py-3 bg-[#DBDCDE] fixed top-0">
        <img src={logo} alt="logo" className="md:w-24 w-16" />
        <ul className="md:flex md:gap-5 md:text-2xl hidden">
          <li>
            <Link to={"/haqida"}>{t('header.haqida')}</Link>
          </li>
          <li className="group relative">
            <Link to={"/services"}>{t('header.xizmatlar')}</Link>
            <ul className="absolute group-hover:flex group-hover:flex-col hidden bg-[#DBDCDE]">
              <li className="hover:bg-blue-700 p-2"><Link to={'/urologiya'}>{t('header.services.urologiya')}</Link></li>
              <li className="hover:bg-blue-700 p-2"><Link to={'/gnikologiya'}>{t('header.services.gnikologiya')}</Link></li>
              <li className="hover:bg-blue-700 p-2"><Link to={'/endokrinologiya'}>{t('header.services.endokrinologiya')}</Link></li>
              <li className="hover:bg-blue-700 p-2"><Link to={'/nevrologiya'}>{t('header.services.nevrologiya')}</Link></li>
              <li className="hover:bg-blue-700 p-2"><Link to={'/pediatriya'}>{t('header.services.pediatriya')}</Link></li>
              <li className="hover:bg-blue-700 p-2"><Link to={'/lor'}>{t('header.services.lor')}</Link></li>
              <li className="hover:bg-blue-700 p-2"><Link to={'/stamotoliya'}>{t('header.services.stamotoliya')}</Link></li>
            </ul>
          </li>
          <li>
            <Link to={"/contact"}>{t('header.aloqa')}</Link>
          </li>
          <li>
            <Call />
          </li>
          <li>
            <select name="Lang" id="lang" onChange={handleChange} value={language} className="rounded-xl px-1">
              <option value="uz">{t('header.uz')}</option>
              <option value="ru">{t('header.ru')}</option>
            </select>
          </li>
        </ul>
        <div className="md:hidden flex justify-around items-center pl-5">
          <p className="text-[#006769] text-center uppercase">Estelife medical center</p>
          <button
            onClick={toggleHandle}
            className="text-sm ml-7 transition-colors duration-300 bg-[#DBDCDE]"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col pt-16 items-start pl-10 gap-5 text-xl fixed right-0 top-20 bg-[#DBDCDE] h-full w-[70%]">
          <li onClick={toggleHandle}>
            <Link to={"/about"}>Klinika haqida</Link>
          </li>
          <li onClick={toggleHandle}>
            <Link to={"/services"}>Xizmatlar</Link>
            <ul className="list-disc pl-5">
              <li onClick={toggleHandle}><Link to={'/urologiya'}>Urologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'/gnikologiya'}>Gnikologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'/endokrinologiya'}>Endokrinologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'/nevrologiya'}>Nevrologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'/pediatriya'}>Pediatriya</Link></li>
              <li onClick={toggleHandle}><Link to={'/lor'}>Lor</Link></li>
              <li onClick={toggleHandle}><Link to={'/stamotoliya'}>Stamotoliya</Link></li>
            </ul>
          </li>
          <li onClick={toggleHandle}>
            <Link to={"#"}>Aloqa</Link>
          </li>
          <li onClick={toggleHandle}>
            <Call />
          </li>
          <li>
            <select name="Lang" id="lang" className="rounded-lg">
              <option value="uz">O'zbek</option>
              <option value="ru">Rus</option>
            </select>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
