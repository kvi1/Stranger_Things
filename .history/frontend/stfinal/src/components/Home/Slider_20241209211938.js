import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import img1 from "./img1.png"; 
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import './style.css'

const Slider = () => {
  const slides = [
    {
      img: img1,
      title: "Eleven",
      actor: "Millie Bobby Brown",
      description:
        "With her best ability being telepathy, Eleven is the main character of the show. From being experimented on in Hawkins to finding her new home with the Byers, she is the key to fighting evil in the upside down. She is dating Mike and the legal daughter of Jim Hopper and Joyce Byers, being a sister of Will therefore.",
    },
    {
      img: img2, 
      title: "Mike Wheeler",
      actor: "Finn Wolfhard",
      description:
        "With his best ability being the heart of the group, Mike has a certain leadership aspect that the group suffers without. He is a brother to Nancy and Molly Wheeler, and was the first one to find Eleven in the woods after she ran from the lab. They eventually formed a bond, and are in a relationship ever since.",
    },
    {
      img: img3, 
      title: "Dustin Henderson",
      actor: "Gaten Matarazzo",
      description:
        "With his best ability being the brain of the group, Dustin never fails to make the audience love his nerdy personality. He is in a relationship with Suzie who he met in a camp, and is a vital part of figuring out solutions when times get tough for the group.",
    },
    {
      img: img4, // Use the imported image
      title: "Lucas Sinclair",
      actor: "Caleb Mclaughlin",
      description:
        "With his best ability being his wrist rocket, Lucas always has an attraction to defend the group. In a relationship with Max Mayfield, Lucas dealt with the hardship of his girlfriend losing her brother, while also having a split on hanging out with his old friends or the new cool kids. He is the brother of Erica Sinclair.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
        <div className = "home">

            <h1>Home</h1>
        </div>
      <div className="list">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="content">
              <p>{slide.actor}</p>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button id="next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <Thumbnail
        slides={slides}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default Slider;
