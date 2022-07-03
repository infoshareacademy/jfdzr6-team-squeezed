import { useState, useEffect } from "react";
import { sliderData } from "./slider-data";
import { SearchBar } from "../SearchOffers/SearchBar/SearchBar";
import { MegaSlider } from "./Slider.Styled";

export const Slider = ({ flats, flatsFromDb, setFlats, setFavourites, setIsLanding }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 7000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
    setFlats([]);
    setIsLanding(true)
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <MegaSlider>
      <div className="slider">
        {flatsFromDb ? <>
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="slide" className="image" />
                </div>
              )}
            </div>
          );
        })}</> : <Spinner /> }


        <div className="content">
          <h1>ZAMIESZKAJ W WYMARZONYM MIEJSCU</h1>
          <SearchBar
            flatsFromDb={flatsFromDb}
            flats={flats}
            setFlats={setFlats}
            setFavourites={setFavourites}
            setIsLanding={setIsLanding}
          />
        </div>
      </div>
    </MegaSlider>
  );
};
