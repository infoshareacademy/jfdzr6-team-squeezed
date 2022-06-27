import { useState, useEffect } from "react";
import { sliderData } from "./slider-data";
import { SearchBar } from "../SearchOffers/SearchBar/SearchBar";
import "./Slider.css";

export const Slider = ({ flats, flatsFromDb, setFlats, setFavourites }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 7000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <div className='slider'>
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt='slide' className='image' />
                </div>
              )}
            </div>
          );
        })}

        <div className='content'>
          <h2>WYMARZONE MIESZKANIE NA WYCIĄGNIĘCIE RĘKI</h2>
          <p>Wpisz nazwę miasta, które Cię interesuję</p>
          <hr />
          <SearchBar
            flatsFromDb={flatsFromDb}
            setFlats={setFlats}
            setFavourites={setFavourites}
          />
        </div>
      </div>
    </>
  );
};
