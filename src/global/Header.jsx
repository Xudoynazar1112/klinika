import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import Call from "../components/call/Call";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between items-center w-full md:px-48 px-5 py-3">
        <img src={logo} alt="logo" className="md:w-48 w-28" />
        <ul className="md:flex md:gap-5 md:text-lg hidden">
          <li>
            <Link to={"#"}>Klinika haqida</Link>
          </li>
          <li>
            <Link to={"#"}>Xizmatlar</Link>
          </li>
          <li>
            <Link to={"#"}>Aloqa</Link>
          </li>
          <li>
            <Call />
          </li>
          <li>
            <select name="Lang" id="lang">
              <option value="uz">O'zbek</option>
              <option value="ru">Rus</option>
            </select>
          </li>
        </ul>
        <div className="md:hidden inline">
          <button
            onClick={toggleHandle}
            className="text-4xl transition-colors duration-300 "
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col pt-16 items-start pl-10 gap-5 text-xl fixed right-0 top-20 bg-slate-50 h-full w-[70%]">
          <li>
            <Link to={"#"}>Klinika haqida</Link>
          </li>
          <li>
            <Link to={"#"}>Xizmatlar</Link>
            <ul className="list-disc pl-5">
              <li><Link to={'#'}>Urologiya</Link></li>
              <li><Link to={'#'}>Gnikologiya</Link></li>
              <li><Link to={'#'}>Endokrinologiya</Link></li>
              <li><Link to={'#'}>Nevrologiya</Link></li>
              <li><Link to={'#'}>Pediatriya</Link></li>
              <li><Link to={'#'}>Lor</Link></li>
              <li><Link to={'#'}>Stamotoliya</Link></li>
            </ul>
          </li>
          <li>
            <Link to={"#"}>Aloqa</Link>
          </li>
          <li>
            <Call />
          </li>
          <li>
            <select name="Lang" id="lang">
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
