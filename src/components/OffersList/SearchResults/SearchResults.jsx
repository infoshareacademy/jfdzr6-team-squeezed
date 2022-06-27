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
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { async } from "@firebase/util";

export const SearchResults = ({ flats, favourites, userId }) => {
  const [currentPhotoInfo, setCurrentPhoto] = useState([]);
  const [flatsToRender, setFlatsToRender] = useState([]);

  // const addFlatToFavorite = (flat) => {};
  const caruselInterval = 36000000;

  console.log(flats);

  useEffect(() => {
    // favourites ? (flatsToRender = favourites) : (flatsToRender = flats);
    console.log(flatsToRender);

    if (favourites === true) {
      setFlatsToRender(JSON.parse(localStorage.getItem("favourites")));
    } else {
      setFlatsToRender(flats);
    }
  }, [favourites, flats]);

  const handleDeleteFlat = async (flatId) => {
    await deleteDoc(doc(db, "flats", flatId));
    setFlatsToRender((prevFlats) => prevFlats.filter((f) => f.id !== flatId));
  };
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
                  <b>
                    <img className="icon" src={streetSVG} alt="" /> Ulica:
                  </b>{" "}
                  {flat.street}
                </p>
                <p>
                  <b>
                    {" "}
                    <img className="icon" src={roomsSVG} alt="" /> ilość pokoi:
                  </b>{" "}
                  {flat.rooms}
                </p>
                <p>
                  <b>
                    <img className="icon" src={flatsizeSVG} alt="" /> m2:
                  </b>{" "}
                  {flat.size} m2
                </p>

                <PriceBox>
                  {" "}
                  <img className="icon" src={priceSVG} alt="" /> Cena:{" "}
                  {flat.price} zł/msc
                </PriceBox>
              </div>

              <div className="btnContainer">
                <NavLink to={`/details/${flat.id}`}>
                  <Button> Więcej</Button>
                </NavLink>

                {userId && (
                  <>
                    <Button onClick={() => handleDeleteFlat(flat.id)}>
                      Usuń
                    </Button>

                    <Button>Edytuj</Button>
                  </>
                )}

                {!userId && <FavouriteBtn flat={flat} key={flat.id} />}
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
