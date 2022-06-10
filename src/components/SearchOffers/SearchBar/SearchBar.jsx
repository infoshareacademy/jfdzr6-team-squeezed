import { db } from "../../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { cities } from "../../../utils/citySearchSuggestions";
import {
  StyledSearchSuggestion,
  StyledSearchSuggestionsWrapper,
  StyledSearchInput,
} from "./SearchBar.Styled";

export const SearchBar = () => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState(null);
  let suggestions = [];

  //check if input matches cities from offers and return matching results to state
  const handleCitySuggestions = (e) => {
    e.preventDefault();
    suggestions = searchResult.filter(({ city }) =>
      e.target.value.length > 0 && city.includes(e.target.value)
        ? city
        : console.log("nie znaleziono")
    );
    console.log(suggestions);
    setSearchSuggestions(suggestions);
  };
//get picked suggestion, set it as an input value and submit search
  const handleSuggestionPick = (e) => {
    setPickedSuggestion(e.target.innerText);
  };
  //filter and return flats IDs from input
  const handleCitySearch = (e) => {
    e.preventDefault();
    searchResult.filter(({ city, price, description, id }) =>
      city === e.target.searchCity.value
        ? console.log(id)
        : console.log("niema")
    );
    form.reset();
  };
  //get flats list and set it to state
  const getFlats = () => {
    const flatsCollection = collection(db, "flats");
    getDocs(flatsCollection).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResult(result);
    });
    console.log(searchResult);
  };

  useEffect(() => {
    getFlats();
  }, []);

  return (
    <>
      <form onSubmit={handleCitySearch} autoComplete='off'>
        <label htmlFor='searchCity'>Wpisz miasto: </label>
        <StyledSearchInput
          onChange={handleCitySuggestions}
          type='text'
          name='searchCity'
          id='searchCity'
          defaultValue={pickedSuggestion ? pickedSuggestion : 'null'}
        />
        <StyledSearchSuggestionsWrapper>
          {/* render matching suggestions under input field */}
          {searchSuggestions.map(({ city }) => (
            <StyledSearchSuggestion onClick={handleSuggestionPick} key={city}>
              {city}
            </StyledSearchSuggestion>
          ))}
        </StyledSearchSuggestionsWrapper>
      </form>
    </>
  );
};
