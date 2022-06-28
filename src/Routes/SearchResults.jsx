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
    language: 'pl',
    libraries,
  });

  if (loadError) return "Błąd ładowania mapy";
  if (!isLoaded) return <Spinner />;

  return (
      <div style={{height: "100%", width: '100%'}}>
        <div style={{position: 'absolute', zIndex: '1', top: '0', left: '50%'}}>
      <SearchWrapper >
            <SearchBar
          flatsFromDb={flatsFromDb}
          setFlats={setFlats}
          setFavourites={setFavourites}
          flats={flats}
          isLanding={false}
        />
      </SearchWrapper>
      </div>
    <div style={{ width: "60%", heigth: '100vh', display: 'flex' }}>
      {isLoaded && flats ? <Map isLoaded={isLoaded} flats={flats} /> : null}
      <div style={{ width: '100%', heigth: "100%"}}><SearchResultsList flats={flats} /></div>
    </div></div>
  );
};
