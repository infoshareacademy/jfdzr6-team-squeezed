import { SearchResults } from "../components/OffersList/SearchResults/SearchResults";
import { SearchBar } from "../components/SearchOffers/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";
import { Navigation } from "../Navigation";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Footer } from "../components/Footer/Footer";
import { SearchWrapper } from "../components/SearchOffers/SearchWrapper/SearchWrapper";
import { SearchFilters } from "../components/SearchOffers/SearchFilters/SearchFilters";

const libraries = ["places"];
export const Home = () => {

  const [flats, setFlats] = useState([]);
  const [filters, setFilters] = useState([]);
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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBS9ENJtnxhEwwTw5YcFb8Ml57rjHZbxuA",
    libraries,
  });

  if (loadError) return "Błąd ładowania mapy";
  if (!isLoaded) return "Ładowanie mapy";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Navigation />
      {isLoaded ? <Map flats={flats} /> : null}
      <SearchWrapper>
        <SearchBar
          flatsFromDb={flatsFromDb}
          setFlats={setFlats}
          filters={filters}
          setFilters={setFilters}
        />
      </SearchWrapper>
      {/* <SearchFilters /> */}
      <SearchResults flats={flats} />
      <Footer />
    </div>
  );
};
