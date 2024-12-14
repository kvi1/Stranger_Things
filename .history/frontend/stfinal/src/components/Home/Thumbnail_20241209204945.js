import React from "react";
import img1 from './img1.png';
import img2 from './img2.png';

const Thumbnail = ({ slides, activeIndex, setActiveIndex }) => {
  return (
    <div className="thumbnail">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`item ${index === activeIndex ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          <img src={`img${index + 1}t.png`} alt={slide.title} />
          <div className="content">{slide.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
