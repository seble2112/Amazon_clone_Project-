import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data"; // your slides array
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((item, index) => {
          // Check if item is a video
          if (item.endsWith(".mp4")) {
            return (
              <video
                key={index}
                src={item}
                autoPlay
                muted
                loop
                controls
                className={classes.media}
              />
            );
          } else {
            return (
              <img
                key={index}
                src={item}
                alt={`slide-${index}`}
                className={classes.media}
              />
            );
          }
        })}
      </Carousel>

      <div className={classes.hero__image}></div>
    </div>
  );
}

export default CarouselEffect;
