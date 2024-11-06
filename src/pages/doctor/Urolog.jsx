import React from "react";
import HomeComp from "../../components/home/HomeComp";
import { Link } from "react-router-dom";
import Call from "../../components/call/Call";
import doctor from "/doctor/urolog-doc.webp";
import { IoMdTime } from "react-icons/io";
import { FaLaptopMedical, FaPhoneAlt } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import ServicePrice from "../../components/price/ServicePrice";

const Urolog = () => {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-10 md:px-48 px-10 py-10 bg-gradient-to-l from-blue-400 to-white dark:to-black">
        <div data-aos="fade-up" className="pt-10">
          <h1 className="md:text-6xl text-3xl text-black dark:text-white">
            Toshkentdagi urolog
          </h1>
          <p className="mt-5 text-black dark:text-white text-wrap w-full">
            В нашей клинике “Estelife medical center” прием ведут опытные
            высококвалифицирован- ные врачи-урологи, которые ответят на все
            интересующие вас вопросы. Мы гарантируем индивидуальный подход к
            каждому пациенту и высокое качество обслуживания!
          </p>
          <div data-aos="flip-up" className="flex pt-20 gap-5">
            <Link
              to={"/contact"}
              className="border-black dark:border-white border-2 px-4 rounded-2xl text-2xl text-black dark:text-white"
            >
              Manzil
            </Link>
            <Call />
          </div>
        </div>
        <div data-aos="fade-up">
          <img
            src={doctor}
            alt="employee"
            className="w-[20rem] overflow-clip"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row gap-10 my-16 justify-center items-center"
      >
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
      <div className="flex md:flex-row flex-col gap-10 md:px-48 px-10 py-10 bg-gradient-to-l from-blue-400 to-white dark:to-black">
        <div className="flex flex-col gap-4 md:w-2/3">
          <h2 className="text-3xl font-semibold">Urologiya mutaxasisi</h2>
          <p>
            В нашей клинике прием ведут опытные высококвалифицированные
            врачи-урологи, которые ответят на все интересующие вас вопросы. Мы
            гарантируем индивидуальный подход к каждому пациенту и высокое
            качество обслуживания!
          </p>
          <h1 className="text-3xl font-semibold">Bizning xizmatlar</h1>
          <ul className="list-disc ml-5">
            <li>
              Полное обследование и лечение пациентов с доброкачественной
              гиперплазией предстательной железы.
            </li>
            <li>
              Ранняя диагностика рака предстательной железы (УЗИ, ТРУЗИ,
              определение ПСА и свободного ПСА).
            </li>
            <li>
              Лечение заболеваний, передающихся половым путем, уретритов,
              простатитов, баланитов и баланопоститов.
            </li>
            <li>Лечение и профилактика мочекаменной болезни.</li>
            <li>Комплексное лечение воспаления яичка и его придатков.</li>
            <li>Лечение недержания мочи.</li>
            <li>Лечение бесплодия.</li>
            <li>
              Лечение острых и хронических заболеваний почек и мочевого пузыря
              (нефритов, пиелонефритов, циститов).
            </li>
            <li>Лечение бесплодию</li>
          </ul>
        </div>
        <div className="bg-blue-100 rounded-2xl flex flex-col gap-3 items-center p-5">
          <img src={doctor} className="w-56 rounded-full" alt="urolog" />
          <h2 className="text-3xl">Allayorov Javohir</h2>
          <span>Vrach-urolog-hirurg</span>
          <p className="text-center">
            Ведущий специалист с опытом работы 6 лет
          </p>
          <div>
            <a href="tel:+998934301695" className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-700" />
              +998 93 430 16 95
            </a>
            <a href="tel:+998905305033" className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-700" />
              +998 90 530 50 33
            </a>
          </div>
          <a
            href="https://t.me/support"
            className="py-3 px-6 bg-green-500 rounded-xl hover:bg-blue-700 hover:text-white transition-all duration-400"
          >
            Urologga savol
          </a>
        </div>
      </div>
      <div className="md:px-48 px-10 py-10">
        <h2 className="text-3xl">Xizmat narxlari:</h2>
        <div className="flex justify-between items-center md:flex-row flex-col gap-5 w-full mt-5">
          <ServicePrice
            type={"Прием (осмотр) врача-уролога первичный"}
            price={"110 000"}
          />
          <ServicePrice
            type={"Прием (осмотр) врача-уролога повторный"}
            price={"60 000"}
          />
          <ServicePrice
            type={"Урологический Массаж простаты"}
            price={"50 000"}
          />
        </div>
      </div>
    </div>
  );
};

export default Urolog;
