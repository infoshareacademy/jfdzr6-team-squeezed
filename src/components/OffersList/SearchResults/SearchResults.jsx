import { db } from "../../../utils/firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const SearchResults = (props) => {
  const currentLoginUserId = "bJNNHzx9bmIilhl0jEIJ";
  const [flats, setFlats] = useState([]);
  const flatsRef = collection(db, "flats");

  const OfferList = styled.div`
    background-color: #e3dddd;
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    width: fit-content;
    /* background-color: yellow; */

    @media (min-width: 768px) {
      /* background-color: red; */
      display: grid;
    }
  `;

  const OfferBackground = styled.div`
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

  const OfferImg = styled.div`
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

  const InfoBox = styled.div`
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 25px;
    @media (min-width: 768px) {
      width: auto;
    }
  `;

  const Arrow = styled.div`
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

  const PriceBox = styled.div`
    text-align: right;
    font-weight: 900;
  `;

  useEffect(() => {
    const getFlats = async () => {
      const userDoc = doc(db, "users", currentLoginUserId);
      const q = query(flatsRef, where("userId", "==", userDoc));
      const data = await getDocs(q);
      console.log(data.docs);
      const u = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // setFlats(u);
      setFlats([...u, ...u, ...u]);
    };
    getFlats();
  }, []);

  console.log(db);
  return (
    <OfferList>
      {flats.map((flat) => {
        return (
          <OfferBackground key={flat.id}>
            <OfferImg>
              <Arrow>
                <FontAwesomeIcon icon={faAngleLeft} />
              </Arrow>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={
                  flat.photos && flat.photos.length > 0 ? flat.photos[0] : ""
                }
              />

              <Arrow>
                <FontAwesomeIcon icon={faAngleRight} />
              </Arrow>
            </OfferImg>

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
              </div>

              <PriceBox>Cena: {flat.price} zł/msc</PriceBox>
            </InfoBox>
          </OfferBackground>
        );
      })}
    </OfferList>
  );
};
