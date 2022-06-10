import { db } from "../../../utils/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import "./SearchResult.css";
import styled from "styled-components";
import ArrowLeftSvg from "../../../icons/arrow-left.svg";
import ArrowRightSvg from "../../../icons/arrow-right.svg";
export const SearchResults = (props) => {
  const currentLoginUserId = "bJNNHzx9bmIilhl0jEIJ";
  const [flats, setFlats] = useState([]);
  const flatsRef = collection(db, "flats");

  const OfferBackground = styled.div`
    background-color: white;
    margin: 15px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px gray;
  `;

  const OfferImg = styled.div`
    margin:25px;
    width: auto;
    height: 200px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
  `;

  const InfoBox = styled.div`
    font-family: "Open Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
    padding:25px;
  `;

  const Arrow = styled.img`
    line {
      stroke: black;
    }
    width: 25px;
    margin: 5px;
  `;

  const OfferList = styled.div`
    background-color: #e3dddd;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: fit-content;
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
      setFlats([...u, ...u, ...u]);
    };
    getFlats();
  }, []);

  console.log(db);
  return (
    <OfferList>
      {flats.map((flat) => {
        return (
          <OfferBackground>
            <OfferImg>
              <Arrow alt=" " src={ArrowLeftSvg}></Arrow>

              <img
                style={{ height: "200px" }}
                src={
                  flat.photos && flat.photos.length > 0 ? flat.photos[0] : ""
                }
              />

              <Arrow alt=" " src={ArrowRightSvg}></Arrow>
            </OfferImg>

            <InfoBox>
              <h3> {flat.title}</h3>
              <div>
                <p><b>Miasto: </b>{flat.city}</p>
                <p><b>Ulica:</b> {flat.street}</p>
                <p><b>Ilość pokoi:</b> {flat.rooms}</p>
                <p><b>m2:</b> {flat.size} m2</p>
              </div>

              <PriceBox>Cena: {flat.price} zł/msc</PriceBox>
            </InfoBox>
          </OfferBackground>
        );
      })}
    </OfferList>
  );
};
