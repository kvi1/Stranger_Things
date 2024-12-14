import React from "react";
import img1t from "./img1t.png"; // Import your images
import img2t from "./img2t.png";
import img3t from "./img3t.png";
import img4t from "./img4t.png";
import img5t from "./img5t.png";
import "./style.css";

const Thumbnail = ({ slides, activeIndex, setActiveIndex }) => {

  const thumbnails = [img1t, img2t, img3t, img4t, img5t];

  return (
    <div className="thumbnail">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`item ${index === activeIndex ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          <img src={thumbnails[index]} />
          <div className="content">{slide.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
