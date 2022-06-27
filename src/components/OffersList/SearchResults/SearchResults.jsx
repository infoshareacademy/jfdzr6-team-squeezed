import { useState, useEffect } from "react";

import {
  OfferList,
  OfferBackground,
  OfferImg,
  Arrow,
  InfoBox,
  PriceBox,
  MoreInfoBtn,
  MoreInfoBox,
  CarouselContainer,
  CarouselContainerInMsgBox,
} from "./SearchResults.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import citySVG from "../Images/city.svg";
import sizeSVG from "../Images/size.svg";
import roomsSVG from "../Images/pokoje.svg";
import streetSVG from "../Images/street.svg";
import flatsizeSVG from "../Images/flatsize.svg";
import priceSVG from "../Images/price.svg";

import {
  faMagnifyingGlassPlus,
  faXmark,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FavouriteBtn } from "./FavouriteBtn/FavouriteBtn";

export const SearchResults = ({ flats, favourites }) => {
  const [currentPhotoInfo, setCurrentPhoto] = useState([]);

  // const addFlatToFavorite = (flat) => {};
  const caruselInterval = 36000000;

  console.log(flats);

  let flatsToRender = [];
  if (favourites === true) {
    flatsToRender = JSON.parse(localStorage.getItem("favourites"));
  } else {
    flatsToRender = flats;
  }
  useEffect(() => {
    favourites ? (flatsToRender = favourites) : (flatsToRender = flats);
    console.log(flatsToRender);
  }, [favourites, flats]);

  return (
    <OfferList>
      {flatsToRender?.map((flat) => {
        return (
          <OfferBackground key={flat.id}>
            {!!flat.photos && flat.photos.length > 0 ? (
              <>
                <CarouselContainer>
                  <Carousel interval={caruselInterval}>
                    {flat.photos.map((photoSrc) => (
                      <Carousel.Item>
                        <div className="carouselItemImg">
                          <img src={photoSrc} alt="First slide" />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <FontAwesomeIcon
                    className="zoomIcon"
                    icon={faMagnifyingGlassPlus}
                    onClick={() => setCurrentPhoto(flat.photos)}
                  ></FontAwesomeIcon>
                </CarouselContainer>
              </>
            ) : (
              <></>
            )}

            <InfoBox>
              <h3> {flat.title}</h3>
              <div>
                <p>
                  <b>
                    <img className="icon" src={citySVG} alt="" /> Miasto :{" "}
                  </b>
                  {flat.city}
                </p>
                <p>
                  <b><img className="icon" src={streetSVG} alt="" /> Ulica:</b> {flat.street}
                </p>
                <p>
                  <b>
                    {" "}
                    <img className="icon" src={roomsSVG} alt="" /> ilość pokoi:
                  </b>{" "}
                  {flat.rooms}
                </p>
                <p>
                  <b><img className="icon" src={flatsizeSVG} alt="" /> m2:</b> {flat.size} m2
                </p>
               
                <PriceBox> <img className="icon" src={priceSVG} alt="" />  Cena: {flat.price} zł/msc</PriceBox>
              </div>

              <div className="btnContainer">
                <NavLink to={`/details/${flat.id}`}>
                  <Button> Więcej</Button>
                </NavLink>

                {/* <Button
                  className="likeIcon"
                  onClick={() => addFlatToFavorite(flat)}
                >
                  <FontAwesomeIcon c icon={faThumbsUp}></FontAwesomeIcon>
                </Button> */}

                <FavouriteBtn flat={flat} key={flat.id} />
              </div>
            </InfoBox>
          </OfferBackground>
        );
      })}

      {currentPhotoInfo.length > 0 ? (
        <MoreInfoBox>
          <div className="closeIcon">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setCurrentPhoto([])}
            ></FontAwesomeIcon>
          </div>
          <CarouselContainerInMsgBox>
            <Carousel interval={caruselInterval}>
              {currentPhotoInfo.map((photoSrc) => (
                <Carousel.Item>
                  <img src={photoSrc} alt="First slide" />
                </Carousel.Item>
              ))}
            </Carousel>
          </CarouselContainerInMsgBox>
        </MoreInfoBox>
      ) : (
        ""
      )}
    </OfferList>
  );
};
