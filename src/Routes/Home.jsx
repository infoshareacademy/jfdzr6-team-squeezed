import { SearchResults } from "../components/OffersList/SearchResults/SearchResults";
import { SearchBar } from "../components/SearchOffers/SearchBar/SearchBar";
<<<<<<< HEAD
import { useState } from 'react';
import { AboutUs } from "../components/AboutUs/About";
=======
import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";
import { Navigation } from "../Navigation";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Footer } from '../components/Footer/Footer'

>>>>>>> main
export const Home = () => {

  const [flats, setFlats] = useState([]);
  const [flatsFromDb, setFlatsFromDb] = useState([]);
  const getFlats = () => {
    const flatsCollection = collection(db, "flats");
    getDocs(flatsCollection).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFlatsFromDb(result);
    });
  };

  useEffect(() => {
    getFlats();
  }, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  return (
<<<<<<< HEAD
    <>
      <SearchBar setFlats={setFlats} />
      <SearchResults flats={flats} />
    </>
=======
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Navigation />
      <SearchBar flatsFromDb={flatsFromDb} setFlats={setFlats} />
      {isLoaded ? <Map flats={flats} /> : null}
      <SearchResults flats={flats} />
      <Footer></Footer>
    </div>
>>>>>>> main
  );
};
