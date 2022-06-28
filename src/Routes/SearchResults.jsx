import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";
import { Spinner } from "react-bootstrap";
import { SearchResultsList } from "../components/OffersList/SearchResults/SearchResults";
import { SearchBar } from "../components/SearchOffers/SearchBar/SearchBar";
import { SearchWrapper } from "../components/SearchOffers/SearchWrapper/SearchWrapper";
import { ResultsWrapper, SearchResultsContainer } from "./SearchResults.Styled";

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
      <SearchResultsContainer>
      <SearchWrapper >
            {/* <SearchBar
          flatsFromDb={flatsFromDb}
          setFlats={setFlats}
          setFavourites={setFavourites}
          flats={flats}
        /> */}
      </SearchWrapper>
    <ResultsWrapper>
      {isLoaded && flats ? <Map isLoaded={isLoaded} flats={flats} /> : null}
      <SearchResultsContainer><SearchResultsList flats={flats} /></SearchResultsContainer>
    </ResultsWrapper></SearchResultsContainer>
  );
};
