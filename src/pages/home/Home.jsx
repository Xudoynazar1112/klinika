import React from "react";
import workers2 from "/images/photo.jpeg";
import doctor from "/images/doctor.jpg";
import Call from "../../components/call/Call";
import { Link } from "react-router-dom";
import HomeComp from "../../components/home/HomeComp";
import { IoMdTime } from "react-icons/io";
import { FaLaptopMedical } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-48 px-10 py-10 bg-gradient-to-l from-blue-400">
        <div className="pt-10">
          <h1 className="md:text-6xl text-3xl">
            Sizning sog'ligingiz - bizning ishimiz
          </h1>
          <p className="mt-5">
            «Estelife medical center – частная клиника в ташкенте, где трудится
            блестящая команда докторов. Мы очень хотим, чтобы жителям нашей
            страны стали доступны все достижения мировой медицины»
          </p>
          <div className="flex pt-20 gap-5">
            <Link
              to={"/contact"}
              className="border-black border-2 px-4 rounded-2xl text-2xl"
            >
              Manzil
            </Link>
            <Call />
          </div>
        </div>
        <div>
          <img src={doctor} alt="employee" className="w-[40rem]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-16 ">
        <HomeComp
          icon={IoMdTime}
          head={"ISH VAQTI"}
          body={
            "Biz kuniga 24 soat, haftada etti kun ishlaymiz. Shuning uchun, siz uchun qulay bo'lgan uchrashuv vaqtini tanlash siz uchun oson bo'ladi."
          }
        />
        <HomeComp
          icon={FaLaptopMedical}
          head={"ZAMONAVIY USKUNALAR"}
          body={
            "Biz klinikalarni eng yangi stomatologiya texnologiyalari bilan jihozlaymiz, ular birgalikda aniq tashxis qo'yish imkonini beradi."
          }
        />
        <HomeComp
          icon={FaHandHoldingMedical}
          head={"KONFOR VA DIQQAT"}
          body={
            "Biz har xil ixtisoslikdagi stomatologlar ishtirok etadigan keng qamrovli diagnostika ishlarini olib boramiz."
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
            “Vatan tibbiyot markazi” tibbiyot markazi keng turdagi tibbiy
            xizmatlar, jumladan, ambulator diagnostika xizmatlarini taklif
            etuvchi muassasa hisoblanadi. Markaz ko‘p yillik tajribaga ega
            bo‘lgan tibbiyot fanlari doktorlari va nomzodlaridan iborat bo‘lib,
            ular qisqa vaqt ichida to‘g‘ri tashxis qo‘yish va har qanday
            kasallikni davolash uchun optimal davolash kursini taklif qilish
            imkoniyatiga ega.
          </p>
          <p className="mt-2">
            Markazda eng zamonaviy uskunalar, jumladan, ekspert ultratovush
            tekshiruvi, dopller-ekokardiyografiya, EKG, avtomatlashtirilgan
            laboratoriya va boshqa ko‘plab uskunalardan foydalaniladi.
          </p>
          <p className="mt-2">
            Markazning fizioterapiya bo‘limida elektroterapiyaning barcha
            turlari, parafin-ozokerit bilan davolash va terapevtik massaj amalga
            oshirilib, har qanday kasallikdan xalos bo‘lish, salomatligingizni
            mustahkamlash imkonini beradi.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
