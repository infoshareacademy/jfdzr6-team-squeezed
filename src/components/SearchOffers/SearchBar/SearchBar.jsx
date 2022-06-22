import { useState, useEffect } from "react";
import { CheckoxFilter } from "../SearchFilters/CheckboxFilter/CheckboxFilter";
import { InputFilter } from "../SearchFilters/InputFilter/InputFilter";
import { StyledInputFilterPrice } from "../SearchFilters/InputFilter/InputFilter.Styled";
import { StyledLabel } from "../SearchFilters/Label.Styled";
import { SearchFilters } from "../SearchFilters/SearchFilters";
import {
  StyledInputWrapper,
  StyledSearchWrapper1,
  StyledShowMoreFilters,
} from "../SearchFilters/SearchFilters.Styled";
import { StyledSelectFilterBtn } from "../SearchFilters/SelectFilter/SelectFilter.Styled";
import {
  StyledSearchSuggestion,
  StyledSearchSuggestionsWrapper,
  StyledSearchInput,
  StyledSearchWrapper,
} from "./SearchBar.Styled";
import arrowDown from "./double-down-arrow-4854.svg";

export const SearchBar = ({ setFlats, flatsFromDb, setFilters }) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [suggestionsToPrint, setSuggestionsToPrint] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState(null);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  let suggestions = [];

  //show more filters handler
  const handleShowMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters);
  };

  //check if input matches cities from offers and return matching results to state
  const handleCitySuggestions = (e) => {
    e.preventDefault();
    //allow only letters
    const hasOnlyLetters = /^[a-zA-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]+$/;
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
    //continue with filtering results
    setFlats(flatsResults);

      setSelectedFilters({
        ...selectedFilters,
        [e.target.name]: e.target.value
      })
      console.log(selectedFilters)


    e.target.reset();
    setSuggestionsToPrint([]);
  };

  useEffect(() => {
    setSearchSuggestions([...new Set(flatsFromDb.map(({ city }) => city))]);
  }, [flatsFromDb, pickedSuggestion]);

  return (
    <form onSubmit={handleCitySearch} autoComplete='off'>
      <StyledSearchWrapper>
        <label htmlFor='searchCity' />
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
              <StyledSearchSuggestion onClick={handleSuggestionPick} key={city}>
                &#x1f4cd; {city}
              </StyledSearchSuggestion>
            ))}
          </StyledSearchSuggestionsWrapper>
        )}
        {/* <SearchFilters setFilters={setFilters} /> */}
      </StyledSearchWrapper>
      {/* przerzucone */}
      <StyledSearchWrapper1>
        <label htmlFor='text'></label>
        <StyledInputWrapper>
          <InputFilter placeholder='powierzchnia od' name='sizeMin' />
          <StyledLabel htmlFor='text'>m2</StyledLabel>
        </StyledInputWrapper>
        <label htmlFor='text'></label>
        <StyledInputWrapper>
          <InputFilter placeholder='powierzchnia do' name='sizeMax' />
          <StyledLabel htmlFor='text'>m2</StyledLabel>
        </StyledInputWrapper>
        <label htmlFor='text'></label>
        <StyledInputWrapper>
          <StyledInputFilterPrice placeholder='cena od' />
          <StyledLabel htmlFor='text'>zł</StyledLabel>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledInputFilterPrice placeholder='cena do' />
          <StyledLabel htmlFor='text'>zł</StyledLabel>
        </StyledInputWrapper>
        <label htmlFor='text' />
        <StyledInputWrapper>
          <StyledSelectFilterBtn
            style={{ color: "#8e8e8e" }}
            // onClick={{ handleOptions }}
          >
            liczba pokoi
          </StyledSelectFilterBtn>
          <StyledLabel htmlFor='text'>
            <img
              src='https://img.icons8.com/material-sharp/344/circled-chevron-down.png'
              width='20'
            />
          </StyledLabel>
        </StyledInputWrapper>
      </StyledSearchWrapper1>

      <StyledShowMoreFilters onClick={handleShowMoreFilters}>
        <img src={arrowDown} width='30' />
      </StyledShowMoreFilters>
      {showMoreFilters && (
        <div>
          <StyledInputWrapper>
            <StyledInputFilterPrice
              placeholder='piętro od...'
              name='floorMin'
            />
            <StyledLabel htmlFor='text'>od</StyledLabel>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledInputFilterPrice
              placeholder='piętro do...'
              name='floorMax'
            />
            <StyledLabel htmlFor='text'>do</StyledLabel>
          </StyledInputWrapper>
          <StyledLabel>Klimatyzacja</StyledLabel>
          <CheckoxFilter name='isAC' />
          <StyledLabel>Winda</StyledLabel>
          <CheckoxFilter name='isElevator' />
          <StyledLabel>Meble / urządzone</StyledLabel>
          <CheckoxFilter name='isFurnished' />
          <StyledLabel>Loggia / balkon</StyledLabel>
          <CheckoxFilter name='isLoggia' />
          <StyledLabel>Parking</StyledLabel>
          <CheckoxFilter name='isParking' />
        </div>
      )}
    </form>
  );
};
