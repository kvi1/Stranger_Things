import React from "react";
import "./styles.css";

const YouTubeBackground = () => {
  return (
    <div className="youtube-background">
      {/* YouTube Embed */}
      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/lkIjpM-9a7g?autoplay=1&mute=1&loop=1&playlist=lkIjpM-9a7g&controls=0&showinfo=0&modestbranding=1"
        title="YouTube Video Background"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Overlay for brightness and text */}
      <div className="overlay"></div>

      {/* Content over the video */}
      <div className="content">
        <h1>Stranger Things</h1>
        <p>
          Dive into the world of Hawkins, Indiana, where supernatural forces
          collide with everyday life in this thrilling Netflix series.
        </p>
      </div>
    </div>
  );
};

export default YouTubeBackground;
