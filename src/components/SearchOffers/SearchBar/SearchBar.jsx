import { useState, useEffect } from "react";
import {
  StyledSearchSuggestion,
  StyledSearchSuggestionsWrapper,
  StyledSearchInput,
} from "./SearchBar.Styled";

export const SearchBar = ({ setFlats, flatsFromDb }) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [suggestionsToPrint, setSuggestionsToPrint] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState(null);
  let suggestions = [];

  //check if input matches cities from offers and return matching results to state
  const handleCitySuggestions = (e) => {
    e.preventDefault();
    //allow only letters 
    const hasOnlyLetters = /^[a-zA-Z]+$/;
    if (hasOnlyLetters.test(e.target.value) === false) {
      setPickedSuggestion(
        (e.target.value = e.target.value.slice(0, e.target.value.length - 1))
      );
    }
    setPickedSuggestion(null);
    //compare input with cities
    suggestions = searchSuggestions.filter((city) => {
      if (
        e.target.value.length > 0 &&
        city.toLowerCase().startsWith(e.target.value.toLowerCase())
      ) {
        return city;
      }
    });
    setSuggestionsToPrint(suggestions);
  };

  //get picked suggestion, set it as an input value
  const handleSuggestionPick = (e) => {
    setPickedSuggestion(e.target.innerText.slice(3));
    setSuggestionsToPrint([]);
  };
  //filter and return flats IDs from input
  const handleCitySearch = (e) => {
    e.preventDefault();
    const flatsResults = [];
    flatsFromDb.filter((flat) =>
      flat.city === e.target.searchCity.value ? flatsResults.push(flat) : null
    );
    setFlats(flatsResults);
    e.target.reset();
  };

  useEffect(() => {
    setSearchSuggestions([...new Set(flatsFromDb.map(({ city }) => city))]);
  }, [flatsFromDb, pickedSuggestion]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleCitySearch} autoComplete='off'>
        <label htmlFor='searchCity' />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "200px",
          }}>
          <StyledSearchInput
            onChange={handleCitySuggestions}
            type='text'
            name='searchCity'
            id='searchCity'
            value={pickedSuggestion ? pickedSuggestion : null}
            placeholder='Wpisz miasto...'
          />

          {suggestionsToPrint.length > 0 && (
            <StyledSearchSuggestionsWrapper>
              {/* render matching suggestions under input field */}
              {suggestionsToPrint?.map((city) => (
                <StyledSearchSuggestion
                  onClick={handleSuggestionPick}
                  key={city}>
                  &#x1f4cd; {city}
                </StyledSearchSuggestion>
              ))}
            </StyledSearchSuggestionsWrapper>
          )}
        </div>
      </form>
    </div>
  );
};
