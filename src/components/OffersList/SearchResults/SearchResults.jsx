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
// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// export const SearchResults = ({flats}) => {
//   const currentLoginUserId = "bJNNHzx9bmIilhl0jEIJ";
//   // const [flats, setFlats] = useState([]);
//   // const flatsRef = collection(db, "flats");

//   const OfferList = styled.div`
//     background-color: #e3dddd;
//     margin-top: 150px;
//     display: flex;
//     flex-direction: column;
//     width: fit-content;
//     justify-content: center;
//     width: 100%;
//     /* background-color: yellow; */

//     @media (min-width: 768px) {
//       /* background-color: red; */
//       display: grid;
//     }
//   `;

//   const OfferBackground = styled.div`
//     background-color: white;
//     margin: 15px;
//     padding: 0;
//     box-sizing: border-box;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 5px 5px 5px gray;
//     flex-wrap: wrap;
//     @media (min-width: 768px) {
//       flex-wrap: nowrap;
//     }
//   `;
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
  if(favourites === true) {
    flatsToRender = (JSON.parse(localStorage.getItem("favourites")))
  } else {
    flatsToRender = flats
  }
  useEffect(() => {
    favourites ? (flatsToRender = favourites) : (flatsToRender = flats);
    console.log(flatsToRender)
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
                        <img src={photoSrc} alt='First slide' />
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

              <div className='btnContainer'>
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
          <div className='closeIcon'>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setCurrentPhoto([])}></FontAwesomeIcon>
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
                    alt='First slide'
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
