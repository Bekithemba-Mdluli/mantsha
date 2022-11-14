import React, { useState } from "react";
import heroItems from "../data/heroItems";
import ChangeImage from "./ChangeImage";

import "./Hero.css";

function Hero() {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(heroItems[0].image);
  const [title, setTitle] = useState(heroItems[0].title);
  const [text, setText] = useState(heroItems[0].text);

  const changeImage = (num) => {
    if (num >= 0 && num <= 3) {
      // setChange(num);
      setImage(heroItems[num].image);
      setText(heroItems[num].text);
      setTitle(heroItems[num].title);
      setCurrent(num);
    }
    // updateViews();
  };

  return (
    <>
      <div className="hero">
        <div className="hero__item">
          <img src={image} alt="demo" style={{ width: "100%" }} />
          <div className="hero__item-text">
            <h1>{title}</h1>
            <p>{text}</p>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="hNav">
          <ChangeImage changeImage={changeImage} number={0} current={current} />
          <ChangeImage changeImage={changeImage} number={1} current={current} />
          <ChangeImage changeImage={changeImage} number={2} current={current} />
          <ChangeImage changeImage={changeImage} number={3} current={current} />
        </div>
      </div>
    </>
  );
}

export default Hero;
