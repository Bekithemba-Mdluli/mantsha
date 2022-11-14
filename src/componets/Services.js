import React from "react";
import shin from "../images/services/shinra.png";
import paint from "../images/services/paint.png";

import "./Services.css";

function Services() {
  const services = [
    { name: "Bricklaying", img: paint },
    { name: "Capentry", img: shin },
    { name: "Electrical", img: shin },
    { name: "Waterproofing", img: shin },
  ];

  return (
    <div className="services">
      <h2>Our Unlimited Services</h2>
      <h3>Here is a trail of what we do:</h3>

      <div className="services__container">
        {services.map((service, key) => (
          <div className="services__container-service" key={key}>
            <div className="img">
              <img src={service.img} alt="Bricklaying" />
            </div>
            <span>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
