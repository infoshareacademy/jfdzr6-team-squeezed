import { useState, useEffect } from "react";

import {
  OfferListContainer,
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
  StyledNoResultsError,
} from "./SearchResultsList.Styled";
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

import { Carousel, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavouriteBtn } from "./FavouriteBtn/FavouriteBtn";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export const SearchResultsList = ({
  flats,
  favourites,
  userId,
  activeFlat,
}) => {
  const [currentPhotoInfo, setCurrentPhoto] = useState([]);
  const [flatsToRender, setFlatsToRender] = useState([]);

  if (!flats) {
    return <Spinner />;
  }

  // const addFlatToFavorite = (flat) => {};
  const caruselInterval = 36000000;

  useEffect(() => {
    // favourites ? (flatsToRender = favourites) : (flatsToRender = flats);

    if (favourites === true) {
      setFlatsToRender(JSON.parse(localStorage.getItem("favourites")));
    } else {
      setFlatsToRender(flats);
    }
    if (activeFlat != "") {
      moveActiveFlatOnTop();
    } 
  }, [favourites, flats, activeFlat]);
  const handleDeleteFlat = async (flatId) => {
    await deleteDoc(doc(db, "flats", flatId));
    setFlatsToRender((prevFlats) => prevFlats.filter((f) => f.id !== flatId));
  };

  const moveActiveFlatOnTop = () => {
    let activeFlatIndex = flatsToRender.indexOf(
      flatsToRender.find((flat) => flat.id === activeFlat)
    );
    let firstFlatOnTheList = flatsToRender.find(
      (flat) => flat.id === activeFlat
    );
    flatsToRender.splice(activeFlatIndex, 1);
    setFlatsToRender([firstFlatOnTheList, ...flatsToRender]);
  };

  return (
    <OfferListContainer>
      <OfferList
        className={!!userId ? "twoColumnLayout" : "singleColumnLayout"}>
        {flats.length > 0 &&
          flatsToRender?.map((flat) => {
            return (
              <OfferBackground
                key={flat.id}
                className={
                  !!userId
                    ? "twoColumnLayoutBox"
                    : "singleColumnLayoutBox" &&
                      (activeFlat !== "" && activeFlat === flat.id
                        ? "activeFlat"
                        : "inactiveFlat")
                }>
                {!!flat.photos && flat.photos.length > 0 ? (
                  <>
                    <CarouselContainer key={flat.photos.id}>
                      <Carousel interval={caruselInterval}>
                        {flat.photos.map((photoSrc, index) => (
                          <Carousel.Item key={index}>
                            <div className='carouselItemImg'>
                              <img src={photoSrc} alt='First slide' />
                            </div>
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <FontAwesomeIcon
                        className='zoomIcon'
                        icon={faMagnifyingGlassPlus}
                        onClick={() =>
                          setCurrentPhoto(flat.photos)
                        }></FontAwesomeIcon>
                    </CarouselContainer>
                  </>
                ) : (
                  <></>
                )}

                <InfoBox>
                  <h3>
                    {" "}
                    <b>{flat.title}</b>
                  </h3>
                  <div>
                    <p>
                      <b>
                        <img className='icon' src={citySVG} alt='' /> Miasto :{" "}
                      </b>
                      {flat.city}
                    </p>
                    <p>
                      <b>
                        <img className='icon' src={streetSVG} alt='' /> Ulica:
                      </b>{" "}
                      {flat.street}
                    </p>
                    <p>
                      <b>
                        {" "}
                        <img className='icon' src={roomsSVG} alt='' /> ilo????
                        pokoi:
                      </b>{" "}
                      {flat.rooms}
                    </p>
                    <p>
                      <b>
                        <img className='icon' src={flatsizeSVG} alt='' /> m2:
                      </b>{" "}
                      {flat.size} m2
                    </p>

                    <PriceBox>
                      {" "}
                      <img className='icon' src={priceSVG} alt='' /> Cena:{" "}
                      {flat.price} z??/msc
                    </PriceBox>
                  </div>

                  <div className='btnContainer'>
                    <a href={`/details/${flat.id}`} target='_blank'>
                      Wi??cej
                    </a>

                    {userId && (
                      <>
                        <Button onClick={() => handleDeleteFlat(flat.id)}>
                          Usu??
                        </Button>

                        <Link to={`/editoffer/${flat.id}`}>Edytuj</Link>
                      </>
                    )}

                    {!userId && <FavouriteBtn flat={flat} key={flat.id} />}
                  </div>
                </InfoBox>
              </OfferBackground>
            );
          })}
        {flats.length === 0 && (
          <OfferBackground>
            <InfoBox>Brak wynik??w do wy??wietlenia</InfoBox>
          </OfferBackground>
        )}
        {currentPhotoInfo.length > 0 ? (
          <MoreInfoBox>
            <div className='closeIcon'>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setCurrentPhoto([])}></FontAwesomeIcon>
            </div>
            <CarouselContainerInMsgBox>
              <Carousel interval={caruselInterval}>
                {currentPhotoInfo.map((photoSrc) => (
                  <Carousel.Item>
                    <img src={photoSrc} alt='First slide' />
                  </Carousel.Item>
                ))}
              </Carousel>
            </CarouselContainerInMsgBox>
          </MoreInfoBox>
        ) : (
          ""
        )}
      </OfferList>
    </OfferListContainer>
  );
};
