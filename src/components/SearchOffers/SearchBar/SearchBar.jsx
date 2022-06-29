import { useState, useEffect } from "react";
import { CheckoxFilter } from "../SearchFilters/CheckboxFilter/CheckboxFilter";
import { InputFilter } from "../SearchFilters/InputFilter/InputFilter";
import { StyledInputFilterPrice } from "../SearchFilters/InputFilter/InputFilter.Styled";
import { StyledLabel } from "../SearchFilters/Label.Styled";
import { SearchFilters } from "../SearchFilters/SearchFilters";
import {
  StyledInputWrapper,
  StyledSearchFiltersWrapper,
  StyledShowMoreFilters,
} from "../SearchFilters/SearchFilters.Styled";
import {
  StyledSearchSuggestion,
  StyledSearchSuggestionsWrapper,
  StyledSearchInput,
  StyledSearchWrapper,
  SearchForm,
} from "./SearchBar.Styled";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({
  setFlats,
  flatsFromDb,
  setFilters,
  setFavourites,
  flats,
}) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [suggestionsToPrint, setSuggestionsToPrint] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState(null);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const navigate = useNavigate();
  let suggestions = [];

  //show more filters handler
  const handleShowMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters);
  };

  const handleFilterFavourites = (e) => {
    e.target.checked ? setFavourites(true) : setFavourites(false);
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
    const {
      searchCity,
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      roomsMin,
      roomsMax,
      floorMin,
      floorMax,
      isAC,
      isElevator,
      isFurnished,
      isLoggia,
      isParking,
    } = e.target;

    let flatsResults = [];
    console.log(flatsFromDb);
    flatsResults = flatsFromDb.filter(
      (flat) => flat.city === searchCity.value
      // (sizeMin.value === "" || sizeMin.value <= flat.size) &&
      // (sizeMax.value === "" || sizeMax.value >= flat.size) &&
      // (priceMin.value === "" || priceMin.value <= flat.price) &&
      // (priceMax.value === "" || priceMax.value >= flat.price) &&
      // (roomsMin.value === "" || roomsMin.value <= flat.rooms) &&
      // (roomsMax.value === "" || roomsMax.value >= flat.rooms)
      // (floorMin.value === "" || floorMin.value <= flat.floor) &&
      // (floorMax.value === "" || floorMax.value >= flat.floor)
    );

    //continue with filtering results
    setFlats(flatsResults);
    navigate("/search-results");
    setSuggestionsToPrint([]);
  };
  const handleFilters = (e) => {
    e.target.type === "checkbox"
      ? setSelectedFilters({
        ...selectedFilters,
        [e.target.name]: e.target.checked,
      })
      : setSelectedFilters({
        ...selectedFilters,
        [e.target.name]: e.target.value,
      });
    console.log(selectedFilters);
  };

  useEffect(() => {
    setSearchSuggestions([...new Set(flatsFromDb?.map(({ city }) => city))]);
  }, [flatsFromDb, pickedSuggestion, selectedFilters]);

  return (
    <SearchForm
      style={{ width: "40%" }}
      onSubmit={handleCitySearch}
      autoComplete='off'>
      <StyledSearchWrapper>
        
      <StyledShowMoreFilters>
        
        <label htmlFor='searchCity' />
        <StyledSearchInput
          onChange={handleCitySuggestions}
          type='text'
          name='searchCity'
          id='searchCity'
          value={pickedSuggestion ? pickedSuggestion : null}
          defaultValue={
            flats != undefined && flats.length > 0 ? flats[0].city : ""
          }
          placeholder='Wpisz miasto i znajdź swoje mieszkanie...'
        />
          <button className="search-submit-Btn" type='submit'>Szukaj</button>
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
 </StyledShowMoreFilters>
        </StyledSearchWrapper>

       
      {/* przerzucone */}

      {showMoreFilters && (
        <>
          <StyledSearchFiltersWrapper>
            <label htmlFor='text'></label>
            <StyledInputWrapper>
              <input
                placeholder='powierzchnia od'
                name='sizeMin'
                onChange={handleFilters}
                type='number'
              />
              <StyledLabel htmlFor='text'>m2</StyledLabel>
            </StyledInputWrapper>
            <label htmlFor='text'></label>
            <StyledInputWrapper>
              <input
                type='number'
                placeholder='powierzchnia do'
                name='sizeMax'
                onChange={handleFilters}
              />
              <StyledLabel htmlFor='text'>m2</StyledLabel>
            </StyledInputWrapper>
            <label htmlFor='text'></label>
            <StyledInputWrapper>
              <input
                placeholder='cena od'
                name='priceMin'
                onChange={handleFilters}
              />
              <StyledLabel htmlFor='text'>zł</StyledLabel>
            </StyledInputWrapper>
            <StyledInputWrapper>
              <input
                placeholder='cena do'
                name='priceMax'
                onChange={handleFilters}
              />
              <StyledLabel htmlFor='text'>zł</StyledLabel>
            </StyledInputWrapper>
            <label htmlFor='text' />
            <StyledInputWrapper>
              <input
                placeholder='liczba pokoi od'
                name='roomsMin'
                onChange={handleFilters}
              />
              <StyledLabel htmlFor='text'></StyledLabel>
            </StyledInputWrapper>
            <StyledInputWrapper>
              <input
                placeholder='liczba pokoi do'
                name='roomsMax'
                onChange={handleFilters}
              />
              <StyledLabel htmlFor='text'></StyledLabel>
            </StyledInputWrapper>
          </StyledSearchFiltersWrapper>
          <StyledSearchFiltersWrapper>
            <StyledInputWrapper>
              <input
                placeholder='piętro od...'
                name='floorMin'
                onChange={handleFilters}
              />
              <StyledLabel htmlFor='text'>od</StyledLabel>
            </StyledInputWrapper>

            <StyledInputWrapper>
              <input
                placeholder='piętro do...'
                name='floorMax'
                onChange={handleFilters}
              />
              <StyledLabel htmlFor='text'>do</StyledLabel>
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel>Klimatyzacja</StyledLabel>
              <input
                className='checkbox'
                type='checkbox'
                name='isAC'
                onChange={handleFilters}
              />
              <StyledLabel>Winda</StyledLabel>
              <input
                className='checkbox'
                onChange={handleFilters}
                type='checkbox'
                name='isElevator'
              />
              <StyledLabel>Meble / urządzone</StyledLabel>
              <input
                className='checkbox'
                type='checkbox'
                onChange={handleFilters}
                name='isFurnished'
              />
              <StyledLabel>Loggia / balkon</StyledLabel>
              <input
                className='checkbox'
                onChange={handleFilters}
                type='checkbox'
                name='isLoggia'
              />
              <StyledLabel>Parking</StyledLabel>
              <input
                className='checkbox'
                onChange={handleFilters}
                type='checkbox'
                name='isParking'
              />
              <StyledLabel>Pokaż ulubione</StyledLabel>
              <input
                className='checkbox'
                onChange={handleFilterFavourites}
                type='checkbox'
                name='favouriteFlats'
              />
            </StyledInputWrapper>
          </StyledSearchFiltersWrapper>
        </>
      )}
    </SearchForm>
  );
};
