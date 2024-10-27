import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
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
      <div className="flex justify-between items-center w-full md:px-48 px-5 py-3 bg-[#DBDCDE] fixed top-0">
        <img src={logo} alt="logo" className="md:w-24 w-16" />
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
            <select name="Lang" id="lang" className="rounded-xl px-1">
              <option value="uz">O'zbek</option>
              <option value="ru">Rus</option>
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
            <Link to={"#"}>Klinika haqida</Link>
          </li>
          <li onClick={toggleHandle}>
            <Link to={"#"}>Xizmatlar</Link>
            <ul className="list-disc pl-5">
              <li onClick={toggleHandle}><Link to={'#'}>Urologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'#'}>Gnikologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'#'}>Endokrinologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'#'}>Nevrologiya</Link></li>
              <li onClick={toggleHandle}><Link to={'#'}>Pediatriya</Link></li>
              <li onClick={toggleHandle}><Link to={'#'}>Lor</Link></li>
              <li onClick={toggleHandle}><Link to={'#'}>Stamotoliya</Link></li>
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
