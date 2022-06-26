import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";
import { Spinner } from "react-bootstrap";
import { SearchResultsList } from "../components/OffersList/SearchResults/SearchResults";
import { SearchBar } from "../components/SearchOffers/SearchBar/SearchBar";
import { SearchWrapper } from "../components/SearchOffers/SearchWrapper/SearchWrapper";

const libraries = ["places"];
export const SearchResults = ({flats, flatsFromDb, setFlats, setFavourites}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBS9ENJtnxhEwwTw5YcFb8Ml57rjHZbxuA",
    libraries,
  });

  if (loadError) return "Błąd ładowania mapy";
  if (!isLoaded) return <Spinner />;

  return (
      <div>
      <SearchWrapper >
            <SearchBar
          flatsFromDb={flatsFromDb}
          setFlats={setFlats}
          setFavourites={setFavourites}
        />
      </SearchWrapper>
    <div style={{ width: "100vw", heigth: '100vh', display: 'flex' }}>
      {isLoaded ? <Map flats={flats} /> : null}
      <div style={{ width: "40%" }}><SearchResultsList flats={flats} /></div>
    </div></div>
  );
};
