import React from "react";
import ServicePrice from "../../components/price/ServicePrice";

const Lor = () => {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center px-28 md:mt-20 gap-5">
        <div className="flex flex-col gap-5 font-sans">
          <h1 className="font-serif">
            «Estelife medical center»da 24/7 LOR xizmati
          </h1>
          <p>
            Estelife medical center barcha yoshdagi quloq, burun va tomoq
            kasalliklariga chalingan bemorlarga yuqori malakali tibbiy yordam
            ko’rsatadi. Siz otolaringologga siz uchun qulay bo’lgan vaqtda,
            navbatlarsiz, ma’lumotnomalar va yo’nalishlarsiz tashrif
            buyurishingiz mumkin. Barcha mutaxassislarimiz zamonaviy minimal
            invaziv davolash usullari va eng yangi uskunalardan foydalanadilar.
            Toshkentdagi eng yaxshi LOR shifokorlari kunu tun maslahatlar berib,
            faol tibbiy va ilmiy faoliyat olib bormoqdalar.
          </p>
          <p>
            Asoratlari qolishi xavfini va LOR kasalliklarining surunkali shaklga
            o’tishini bartaraf etish uchun ularni o’z vaqtida tashxislash juda
            muhim, shuning uchun otorinolaringologga tashrifingizni
            kechiktirmang – Estelife medical center klinikasining eng yaxshi LOR
            shifokorlari sizni kutmoqda!
          </p>
        </div>
        <div>
          <img src="/images/doctor.jpg" className="w-[30rem]" alt="lor" />
        </div>
      </div>
      <div className="md:px-48 px-10 py-10">
        <h1>Lor xizmat narxlari</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <ServicePrice type={"Burun ichi blokadasi"} price={"70.000"} />
          <ServicePrice type={"Burunni yuvish"} price={"70.000"} />
          <ServicePrice type={"Eshitish naychasini puflash"} price={"40.000"} />
          <ServicePrice
            type={"Hiqildoqqa shifobaxsh eritmalarni quyish"}
            price={"60.000"}
          />
          <ServicePrice type={"Ingalyasiya/tubus"} price={"30.000"} />
          <ServicePrice type={"Kompress"} price={"25.000"} />
          <ServicePrice type={"Limfotrop in'yeksiya"} price={"70.000"} />
          <ServicePrice type={"LOR maslahati"} price={"110.000"} />
          <ServicePrice
            type={"LOR shifokorining qayta maslahati"}
            price={"55.000"}
          />
          <ServicePrice type={"Quloq orqasiga in'yeksiya"} price={"40.000"} />
          <ServicePrice
            type={"Quloq/tomoq/burun bo'shlig'idan begona jismni olib tashlash"}
            price={"100.000"}
          />
          <ServicePrice type={"Quloqni yuvish"} price={"70.000"} />
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-center">Tashxis turlari va bosqichlari</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 place-items-center mt-3 w-full ">
          <div className="w-64 flex flex-col items-center">
            <img
              src="https://www.biogenmed.uz/wp-content/uploads/2022/04/our-services-otolar.svg"
              alt="ko'rik"
            />
            <p className="text-xl font-semibold my-3">Ko'rik</p>
            <p className="text-center text-slate-400">
              Bemorning umumiy holatini baholash va organlar va tizimlarning
              fizik tekshiruvi o’tkaziladi
            </p>
          </div>
          <div className="w-64 flex flex-col items-center">
            <img
              src="https://www.biogenmed.uz/wp-content/uploads/2022/04/our-services-ultrasound.svg"
              alt="tekshiruv"
            />
            <p className="text-xl font-semibold my-3">Tekshiruv</p>
            <p className="text-center text-slate-400">
              Tashxisni tasdiqlash uchun turli xil laboratoriya va instrumental
              tekshirish usullari qo’llaniladi
            </p>
          </div>
          <div className="w-64 flex flex-col items-center">
            <img
              src="https://www.biogenmed.uz/wp-content/uploads/2022/04/doctor-2-r.svg"
              alt="davolash"
            />
            <p className="text-xl font-semibold my-3">Davolash</p>
            <p className="text-center text-slate-400">
              Tekshiruv natijalariga ko’ra, tashxis qo’yiladi va davolash
              taktikasi tanlanadi
            </p>
          </div>
          <div className="w-64 flex flex-col items-center">
            <div className="text-[#00959B]">
              <img
                src="	https://www.biogenmed.uz/wp-content/uploads/2022/04/our-services-otolar.svg"
                alt="natija"
              />
            </div>
            <p className="text-xl font-semibold my-3">Natija</p>
            <p className="text-center text-slate-400">
              Shifokorning ko’rsatmalariga qat’iy rioya qilish va
              ko’rsatkichlarni kuzatish muvaffaqiyatli davolanishning kalitidir
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lor;
