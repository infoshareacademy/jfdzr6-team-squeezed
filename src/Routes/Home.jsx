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
import { Spinner } from "../utils/Spinner";

const libraries = ["places"];
export const Home = () => {

  const [flats, setFlats] = useState([]);
  const [filters, setFilters] = useState([]);
  const [flatsFromDb, setFlatsFromDb] = useState([]);
  const [favourites, setFavourites] = useState(null)

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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Błąd ładowania mapy";
  if (!isLoaded) return <Spinner /> ;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {isLoaded ? <Map flats={flats} /> : null}
      <SearchWrapper>
        <SearchBar
          flatsFromDb={flatsFromDb}
          setFlats={setFlats}
          filters={filters}
          setFilters={setFilters}
          setFavourites={setFavourites}
        />
      </SearchWrapper>
      {/* <SearchFilters /> */}
      <SearchResults flats={flats} favourites={favourites} />
      <Footer />
    </div>
  );
};

