import React, { useEffect, useState } from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import Call from "../components/call/Call";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaSun } from "react-icons/fa6";
import { MdNightsStay } from "react-icons/md";

const Header = () => {
  const [t, i18n] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const language = localStorage.getItem("i18nextLng");
  const handleChange = (event) => {
    const selectLanguage = event.target.value;
    i18n.changeLanguage(selectLanguage);
  };
  const toggleHandle = () => {
    setIsOpen(!isOpen);
  };

  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or default to light mode
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  useEffect(() => {
    // Apply dark mode class on initial load based on localStorage value
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <div className="flex justify-between items-center w-full md:px-48 px-5  bg-white text-black dark:text-white dark:bg-black">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="md:w-24 w-16" />
        </Link>
        <ul className="md:flex md:gap-5 md:text-2xl hidden">
          <li>
            <Link
              to={"/haqida"}
              className="bg-white text-black dark:bg-black dark:text-white"
            >
              {t("header.haqida")}
            </Link>
          </li>
          <li className="group relative">
            <Link
              to={"/services"}
              className="bg-white text-black dark:bg-black dark:text-white"
            >
              {t("header.xizmatlar")}
            </Link>
            <ul className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 bg-white dark:bg-black">
              <li className="hover:bg-blue-700 transition-all p-2">
                <Link to={"/urologiya"} className="dark:text-white">
                  {t("header.services.urologiya")}
                </Link>
              </li>
              <li className="hover:bg-blue-700 transition-all p-2">
                <Link to={"/gnikologiya"} className="dark:text-white">
                  {t("header.services.gnikologiya")}
                </Link>
              </li>
              <li className="hover:bg-blue-700 transition-all p-2">
                <Link to={"/endokrinologiya"} className="dark:text-white">
                  {t("header.services.endokrinologiya")}
                </Link>
              </li>
              <li className="hover:bg-blue-700 transition-all p-2">
                <Link to={"/nevrologiya"} className="dark:text-white">
                  {t("header.services.nevrologiya")}
                </Link>
              </li>
              <li className="hover:bg-blue-700 transition-all p-2">
                <Link to={"/pediatriya"} className="dark:text-white">
                  {t("header.services.pediatriya")}
                </Link>
              </li>
              <li className="hover:bg-blue-700 transition-all p-2">
                <Link to={"/lor"} className="dark:text-white">
                  {t("header.services.lor")}
                </Link>
              </li>
              <li className="hover:bg-blue-700 transition-all p-2">
                <Link to={"/stamotologiya"} className="dark:text-white">
                  {t("header.services.stamotoliya")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="bg-white text-black dark:bg-black dark:text-white"
            >
              {t("header.aloqa")}
            </Link>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-1 mr-2 dark:text-white dark:bg-black md:text-3xl text-xl rounded"
            >
              {darkMode ? <FaSun /> : <MdNightsStay />}
            </button>
          </li>
          <li>
            <Call />
          </li>
          <li>
            <select
              name="Lang"
              id="lang"
              onChange={handleChange}
              value={language}
              className="rounded-xl px-1 bg-white text-black dark:bg-gray-800 dark:text-white"
            >
              <option value="uz">{t("header.uz")}</option>
              <option value="ru">{t("header.ru")}</option>
              <option value="en">{t("header.en")}</option>
            </select>
          </li>
        </ul>
        <div className="md:hidden flex justify-around items-center pl-5">
          <p className="text-[#006769] text-center uppercase">
            Estelife medical center
          </p>
          <button
            onClick={toggleHandle}
            className="text-sm ml-7 transition-colors duration-300 bg-white text-black dark:bg-gray-800 dark:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-full bg-white text-black dark:bg-black dark:text-white z-10">
          <div className="text-end px-5 pt-5">
            <button
              onClick={toggleHandle}
              className="text-sm ml-7 transition-colors duration-300 text-end bg-white text-black dark:bg-gray-800 dark:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
          <ul className="flex flex-col pt-16 items-start pl-10 gap-5 text-xl ">
            <li className="flex justify-between items-center gap-32">
              <Link
                onClick={toggleHandle}
                to={"/about"}
                className="bg-white text-black dark:bg-black dark:text-white"
              >
                {t("header.haqida")}
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-1 mr-2 dark:text-white dark:bg-black md:text-3xl text-xl rounded"
              >
                {darkMode ? <FaSun /> : <MdNightsStay />}
              </button>
            </li>
            <li onClick={toggleHandle}>
              <Link
                to={"/services"}
                className="bg-white text-black dark:bg-black dark:text-white"
              >
                {t("header.xizmatlar")}
              </Link>
              <ul className="list-disc pl-5 transition-all">
                <li onClick={toggleHandle}>
                  <Link
                    to={"/urologiya"}
                    className="bg-white text-black dark:bg-black dark:text-white"
                  >
                    {t("header.services.urologiya")}
                  </Link>
                </li>
                <li onClick={toggleHandle}>
                  <Link
                    to={"/gnikologiya"}
                    className="bg-white text-black dark:bg-black dark:text-white"
                  >
                    {t("header.services.gnikologiya")}
                  </Link>
                </li>
                <li onClick={toggleHandle}>
                  <Link
                    to={"/endokrinologiya"}
                    className="bg-white text-black dark:bg-black dark:text-white"
                  >
                    {t("header.services.endokrinologiya")}
                  </Link>
                </li>
                <li onClick={toggleHandle}>
                  <Link
                    to={"/nevrologiya"}
                    className="bg-white text-black dark:bg-black dark:text-white"
                  >
                    {t("header.services.nevrologiya")}
                  </Link>
                </li>
                <li onClick={toggleHandle}>
                  <Link
                    to={"/pediatriya"}
                    className="bg-white text-black dark:bg-black dark:text-white"
                  >
                    {t("header.services.pediatriya")}
                  </Link>
                </li>
                <li onClick={toggleHandle}>
                  <Link
                    to={"/lor"}
                    className="bg-white text-black dark:bg-black dark:text-white"
                  >
                    {t("header.services.lor")}
                  </Link>
                </li>
                <li onClick={toggleHandle}>
                  <Link
                    to={"/stamotologiya"}
                    className="bg-white text-black dark:bg-black dark:text-white"
                  >
                    {t("header.services.stamotoliya")}
                  </Link>
                </li>
              </ul>
            </li>
            <li onClick={toggleHandle}>
              <Link
                to={"/contact"}
                className="bg-white text-black dark:bg-black dark:text-white"
              >
                {t("header.aloqa")}
              </Link>
            </li>
            <li onClick={toggleHandle}>
              <Call />
            </li>
            <li>
              <select
                name="Lang"
                id="lang"
                onChange={handleChange}
                value={language}
                className="rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white p-2"
              >
                <option value="uz">{t("header.uz")}</option>
                <option value="ru">{t("header.ru")}</option>
                <option value="en">{t("header.en")}</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
