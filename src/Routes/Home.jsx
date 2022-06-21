import { SearchResults } from "../components/OffersList/SearchResults/SearchResults";
import { SearchBar } from "../components/SearchOffers/SearchBar/SearchBar";
import { useState } from 'react';
import { AboutUs } from "../components/AboutUs/About";
export const Home = () => {
  const [flats, setFlats] = useState([])
  return (
    <>
      <SearchBar setFlats={setFlats} />
      <SearchResults flats={flats} />
    </>
  );
};
