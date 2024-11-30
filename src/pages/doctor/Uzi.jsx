import React from "react";

const Uzi = () => {
  return (
    <div className="w-full">
      <div className="md:w-1/2 w-11/12 mx-auto bg-[#00959B] text-white rounded my-3 py-3">
        <marquee>
          Ushbu bo'lim ustida ishlamoqdamiz, sabr qilganinggiz uchun tashakkur
          ✨
        </marquee>
      </div>
      <video
        src="/images/maintence-video.webm"
        autoPlay
        muted
        loop
        className="w-11/12 mx-auto rounded"
      ></video>
    </div>
  );
};

export default Uzi;
