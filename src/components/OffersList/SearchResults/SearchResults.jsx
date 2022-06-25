import { useState } from "react";

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
import {
  faMagnifyingGlassPlus,
  faXmark,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const SearchResults = ({ flats }) => {
  const [currentPhotoInfo, setCurrentPhoto] = useState([]);

  const addFlatToFavorite = (flat) => { };
  const caruselInterval = 36000000;

  return (
    <OfferList>
      {flats.map((flat) => {
        return (
          <OfferBackground key={flat.id}>
            {!!flat.photos && flat.photos.length > 0 ? (
              <>
                <CarouselContainer>
                  <Carousel interval={caruselInterval}>
                    {flat.photos.map((photoSrc) => (
                      <Carousel.Item>
                        <img src={photoSrc} alt="First slide" />
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
                  <b>Miasto: </b>
                  {flat.city}
                </p>
                <p>
                  <b>Ulica:</b> {flat.street}
                </p>
                <p>
                  <b>Ilość pokoi:</b> {flat.rooms}
                </p>
                <p>
                  <b>m2:</b> {flat.size} m2
                </p>
                <PriceBox> Cena: {flat.price} zł/msc</PriceBox>
              </div>

              <div className="btnContainer">
                <NavLink to={"/details/"}>
                  <Button> Więcej</Button>
                </NavLink>

                <Button
                  className="likeIcon"
                  onClick={() => addFlatToFavorite(flat)}
                >
                  <FontAwesomeIcon c icon={faThumbsUp}></FontAwesomeIcon>
                </Button>
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
                  <img
                    style={{
                      width: "fit-contnet",
                      height: "600px",
                      wrap: false,
                    }}
                    src={photoSrc}
                    alt="First slide"
                  />
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
