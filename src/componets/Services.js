import React from "react";
import shin from "../images/services/shinra.png";
import paint from "../images/services/paint.png";

function Services() {
  const services = {
    service1: ["Bricklaying", paint],
    service2: ["Capentry", shin],
    service3: ["Electrical", shin],
    service4: ["Waterproofing", shin],
  };

  // ["Bricklaying", "Capentry", "Electrical", "Waterproofing"]

  return (
    <div className="services">
      <h2>Our Unlimited Services</h2>
      <h3>Here is a trail of what we do:</h3>

      <div className="services__container">
        <div className="services__container-service">
          <div className="img">
            <img src={services.service1[1]} alt="Bricklaying" />
          </div>
          <span>{services.service1[0]}</span>
        </div>

        <div className="services__container-service">
          <div className="img">
            <img src={services.service2[1]} alt="Bricklaying" />
          </div>
          <span>{services.service2[0]}</span>
        </div>

        <div className="services__container-service">
          <div className="img">
            <img src={services.service3[1]} alt="Bricklaying" />
          </div>
          <span>{services.service3[0]}</span>
        </div>

        <div className="services__container-service">
          <div className="img">
            <img src={services.service4[1]} alt="Bricklaying" />
          </div>
          <span>{services.service4[0]}</span>
        </div>
      </div>
      {/* < */}
    </div>
  );
}

export default Services;
