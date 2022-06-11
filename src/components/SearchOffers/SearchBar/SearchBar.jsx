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
  const [flatsFromDb, setFlatsFromDb] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState(null);
  let suggestions = [];

  //check if input matches cities from offers and return matching results to state
  const handleCitySuggestions = (e) => {
    e.preventDefault();
    suggestions = flatsFromDb.filter(({ city }) => {
      if (e.target.value.length > 0 && city.includes(e.target.value)) {
        return city
        ;
      }
    });
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
    flatsFromDb.filter((flat) =>
      flat.city === e.target.searchCity.value ? console.log(flat) : null
    );
    e.target.reset();
  };
  //get flats list and set it to state
  const getFlats = () => {
    const flatsCollection = collection(db, "flats");
    getDocs(flatsCollection).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFlatsFromDb(result);
    });
    console.log(flatsFromDb);
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
          defaultValue={pickedSuggestion ? pickedSuggestion : null}
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
