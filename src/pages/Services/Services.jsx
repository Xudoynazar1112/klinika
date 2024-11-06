import React from "react";

const Service = () => {
  return (
    <div>
      <div>
        <img src="/doctor/urology.png" alt="Urologiya xizmati" />
      </div>
      <div>
        <h2>Urologiya</h2>
        <p>
          Врач-уролог - Доктор, специализирующийся на урологии, занимается
          выявлением, предотвращением и лечением заболеваний мужской половой
          системы, мочевыводящих путей и области брюшной полости.
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <h1>Estelife medical center xizmatlari</h1>
      <Service />
    </div>
  );
};

export default Services;
