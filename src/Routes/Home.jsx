import { SearchResults } from "../components/OffersList/SearchResults/SearchResults";
import { SearchBar } from "../components/SearchOffers/SearchBar/SearchBar";
import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
export const Home = () => {
  const [flats, setFlats] = useState([]);
  return (
    <>
      <SearchBar setFlats={setFlats} />
      <SearchResults flats={flats} />
      <Footer></Footer>
    </>
  );
};
