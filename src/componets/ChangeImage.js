import React from "react";

function ChangeImage({ changeImage, number, current }) {
  return (
    <span
      className={current === number ? "hNav__line act" : "hNav__line"}
      onClick={() => {
        changeImage(number);
      }}
    ></span>
  );
}

export default ChangeImage;
