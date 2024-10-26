import React from "react";
import workers from "/src/assets/images/main-photo.webp";
import workers2 from "/src/assets/images/photo.jpeg";
import Call from "../../components/call/Call";
import { Link } from "react-router-dom";
import HomeComp from "../../components/home/HomeComp";
import { IoMdTime } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-48 px-10 pt-10 md:mt-28 mt-20 bg-gradient-to-l from-blue-400">
        <div className="pt-10">
          <h1 className="md:text-6xl text-3xl">Sizning sog'ligingiz - bizning ishimiz</h1>
          <p className="mt-5">
            «Vatan Tibbiyot Markazi – частная клиника в ташкенте, где трудится
            блестящая команда докторов. Мы очень хотим, чтобы жителям нашей
            страны стали доступны все достижения мировой медицины»
          </p>
          <div className="flex pt-20 gap-5">
            <Link
              to={"/contact"}
              className="border-black border-2 px-4 rounded-2xl"
            >
              Manzil
            </Link>
            <Call />
          </div>
        </div>
        <div>
          <img src={workers} alt="employee" className="w-[40rem]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-16 ">
        <HomeComp
          icon={IoMdTime}
          head={"Ish vaqti"}
          body={
            "Мы работаем круглосуточно без выходных. Поэтому вам будет легко подобрать удобное вам время приема."
          }
        />
        <HomeComp
          icon={IoMdTime}
          head={"Ish vaqti"}
          body={
            "Мы работаем круглосуточно без выходных. Поэтому вам будет легко подобрать удобное вам время приема."
          }
        />
        <HomeComp
          icon={IoMdTime}
          head={"Ish vaqti"}
          body={
            "Мы работаем круглосуточно без выходных. Поэтому вам будет легко подобрать удобное вам время приема."
          }
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-48 px-10 py-10 mt-20 bg-gradient-to-l from-blue-400">
        <div>
          <img src={workers2} alt="employee" className="w-[37rem]" />
        </div>
        <div>
          <h1 className="md:text-6xl text-4xl">Klinika haqida</h1>
          <p className="mt-5">
            Медицинский центр “Vatan Tibbiyot Markazi” – это учреждение,
            предлагающее широкий спектр медицинских услуг, включая амбулаторную
            диагностику. В состав центра входят врачи и кандидаты медицинских
            наук с многолетним опытом работы, которые в короткие сроки смогут
            правильно поставить диагноз и предложить оптимальный курс лечения
            для лечения любых заболеваний.
          </p>
          <p className="mt-2">
            В центре используется новейшее оборудование, включая экспертный
            класс УЗИ, доплер-эхокардиографию, ЭКГ, автоматизированную
            лабораторию и многое другое.
          </p>
          <p className="mt-2">
            В отделении физиотерапии центра проводятся все виды электролечения,
            парафино-озокеритового лечения и лечебно-оздоровительного массажа,
            которые помогут вам избавиться от любых болезней и улучшить
            здоровье.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
