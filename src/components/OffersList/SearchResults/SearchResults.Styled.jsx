import styled from "styled-components";

export const OfferList = styled.div`
  background-color: #e3dddd;
  display: flex;
  flex-direction: column;

  width: fit-content;
  /* background-color: yellow; */

  @media (min-width: 768px) {
    /* background-color: red; */
    display: grid;
    width: 75%;
    margin: 0px auto;
  }
`;

export const OfferBackground = styled.div`
  background-color: white;
  margin: 15px;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px gray;
  flex-wrap: wrap;
  @media (min-width: 768px) {
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
    width: 75% !important;
  }

  .btnContainer {
    display: flex;
    justify-content: flex-end;
    a {
      margin: 0 5px;
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
  margin: 0 20px;
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
    width: 800px;
    height: 330px;
  }

  .carouselItemImg {
    background-color: lightgray;
    width: fit-content;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      height: 300px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const CarouselContainerInMsgBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  img {
    object-fit: contain;
    width: 600px;
    height: 400px;
  }
`;
