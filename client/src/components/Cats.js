import React from "react";

const Cats = ({ img1, img2 }) => {
  return (
    <div>
      <img src={img1.url} />
      <img src={img2.url} />
    </div>
  );
};

export default Cats;
