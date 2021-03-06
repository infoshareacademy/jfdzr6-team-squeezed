import styled, { keyframes } from "styled-components";

export const OfferListContainer = styled.div`
  .twoColumnLayout {
    background-color: #e3dddd;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 15px;
  }

  .twoColumnLayoutBox {
    margin: 15px 7px 0px 7px;
    width: calc(50% - 15px);


    @media (max-width: 800px) {
      width: 100%;
      height: auto;
    }
  }

  .singleColumnLayout {
    flex-direction: column;
    flex-wrap: nowrap;
    padding-top: 1px;
  }

  .singleColumnLayoutBox {
    width: 100%;
  }
`;




export const OfferList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px 0 15px;
  background-color: #e3dddd;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    overflow-y: hidden;
  }

  @media (min-width: 1200px) {
    display: flex;
    width: auto;
    margin: 0px auto;
  }
  .activeFlat {
    background-color: white;
    box-shadow: 5px 5px 5px black;


  }
  .inactiveFlat {
    background-color: white;
  box-shadow: 5px 5px 5px gray;
  }
`;

export const OfferBackground = styled.div`
  /* background-color: white; */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px gray;
  flex-wrap: wrap;
  margin-bottom: 15px;
  border-radius: 20px;

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }


`;

export const OfferImg = styled.div`
  margin: 10px;
  width: 100%;
  height: auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  @media (min-width: 768px) {
    height: 200px;
    width: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const InfoBox = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
  @media (min-width: 768px) {
    /* width: 75% !important; */
  }

  .icon {
    height: 20px;
    align-self: center;
  }

  .btnContainer {
    display: flex;
    justify-content: flex-end;
    a,
    button {
      text-decoration: none;
      width: auto;
      border-radius: 20px;
      text-align: center;
      padding: 10px 20px;
      background-color: #0975c3;
      color: #fff;
      font-size: 14px;
      font-weight: 900;
      margin: 5px 5px;
      box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
      border: none;
      transition: all 0.3s ease;
      outline: 0;
      &:hover {
        background-color: #0976c3a4;
        transform: translateY(-3px);
        box-shadow: 0 2px 6px -1px rgba($primary, 0.65);
        &:active {
          transform: scale(0.99);
        }
      }
    }
  }
`;

export const Arrow = styled.div`
  color: black;
  font-size: 40px;
  display: none;
  cursor: pointer;
  &:hover {
    color: gray;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
  }
`;

export const StyledFavouriteBtn = styled.div`
  .likeIcon {
    margin: 0px 10px;
  }
  .like {
    color: green;
  }
  .fa-user--liked {
    color: #e40a0a;
  }
`;
export const PriceBox = styled.div`
  font-weight: 900;
`;

export const MoreInfoBtn = styled.button`
  width: 100px;
  background-color: #0975c3;
  color: white;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
`;

export const MoreInfoBox = styled.div`
  background-color: white;
  box-shadow: 5px 5px 5px gray;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  font-family: "Open Sans", sans-serif;
  z-index: 100;
  justify-content: space-between;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 10px;

  .closeIcon {
    font-size: 20px;
    display: flex;
    justify-content: end;
    svg {
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    width: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: false;
  position: relative;
  padding: 15px;

  .zoomIcon {
    cursor: pointer;
    font-size: 100px;
    position: absolute;
    color: rgba(255, 255, 255, 0.505);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .zoomIcon:hover {
    color: rgba(255, 255, 255, 0.834);
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 330px;
  }

  .carouselItemImg {
    background-color: lightgray;
    width: fit-content;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    @media (min-width: 768px) {
      height: 300px;
    }
  }
`;

export const CarouselContainerInMsgBox = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    width: 700px;
    height: 400px;
  }
`;

export const StyledNoResultsError = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  margin-top: 20px;
`;
