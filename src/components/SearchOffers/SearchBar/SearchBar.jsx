import { useState, useEffect } from "react";
import { CheckoxFilter } from "../SearchFilters/CheckboxFilter/CheckboxFilter";
import { InputFilter } from "../SearchFilters/InputFilter/InputFilter";
import { StyledInputFilterPrice } from "../SearchFilters/InputFilter/InputFilter.Styled";
import { StyledLabel } from "../SearchFilters/Label.Styled";
import { SearchFilters } from "../SearchFilters/SearchFilters";
import {
  SingleCheckboxContainer,
  StyledInputCheckboxWrapper,
  StyledInputTitle,
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
  setIsLanding,
  isLanding,
}) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [suggestionsToPrint, setSuggestionsToPrint] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState(null);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const navigate = useNavigate();
  let suggestions = [];

  //show more filters handler
  const handleShowMoreFilters = (e) => {
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
    handleCitySearch();
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
      (sizeMin.value === "" || sizeMin.value <= flat.size) &&
      (sizeMax.value === undefined || sizeMax.value >= flat.size) 
      // (priceMin.value === "" || priceMin.value <= flat.price) &&
      // (priceMax.value === "" || priceMax.value >= flat.price) &&
      // (roomsMin.value === "" || roomsMin.value <= flat.rooms) &&
      // (roomsMax.value === "" || roomsMax.value >= flat.rooms)
      // (floorMin.value === "" || floorMin.value <= flat.floor) &&
      // (floorMax.value === "" || floorMax.value >= flat.floor)
    );

    //continue with filtering results
    setFlats(flatsResults);
    setSuggestionsToPrint([]);
    setIsLanding(false);
    navigate("/search-results");
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
    // console.log(selectedFilters);
  };

  useEffect(() => {
    setSearchSuggestions([...new Set(flatsFromDb?.map(({ city }) => city))]);
  }, [flatsFromDb, pickedSuggestion, selectedFilters]);

  return (
    <SearchForm onSubmit={handleCitySearch} autoComplete='off'>
      <StyledSearchWrapper>
        <StyledShowMoreFilters>
          <label htmlFor='searchCity' />
          <StyledSearchInput
            onChange={handleCitySuggestions}
            type='text'
            name='searchCity'
            id='searchCity'
            flats={flats}
            value={pickedSuggestion ? pickedSuggestion : null}
            defaultValue={
              flats != undefined && flats.length > 0 ? flats[0].city : ""
            }
            placeholder='Wpisz miasto i znajdź swoje mieszkanie...'
          />
          <button className='search-submit-Btn' type='submit'>
            Szukaj
          </button>
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
          {flats != undefined && (
            <button className='filters-Btn' onClick={handleShowMoreFilters}>
              Filtry
            </button>
          )}

          {/* przerzucone */}

          {showMoreFilters && (
            <StyledSearchFiltersWrapper>
              <StyledInputCheckboxWrapper>

                <StyledInputWrapper>
                  <StyledInputTitle>
                    <label htmlFor='text'>Metraż</label>
                  </StyledInputTitle>
                  <StyledInputTitle>
                    
                    <input
                      placeholder='min'
                      name='sizeMin'
                      onChange={handleFilters}
                      type='number'
                    />
                    <StyledLabel htmlFor='text'></StyledLabel>
                    <label htmlFor='text'></label>
                    
                    <input
                      type='number'
                      placeholder='max'
                      name='sizeMax'
                      onChange={handleFilters}
                    />
                  </StyledInputTitle>

                  <StyledLabel htmlFor='text'></StyledLabel>
                </StyledInputWrapper>
                <StyledInputWrapper>
                
                <StyledInputTitle>
                
                <label htmlFor='text'>Cena</label>
                </StyledInputTitle>
                <StyledInputTitle>
                  <input
                    placeholder='min'
                    name='priceMin'
                    onChange={handleFilters}
                  />
                  
                  <StyledLabel htmlFor='text'></StyledLabel>
                  <input
                    placeholder='max'
                    name='priceMax'
                    onChange={handleFilters}
                  />
                  </StyledInputTitle>

                  <StyledLabel htmlFor='text'></StyledLabel>
                </StyledInputWrapper>
                <StyledInputWrapper>
                <StyledInputTitle>

                <label htmlFor='text'>Liczba pokoi</label>
                </StyledInputTitle>

                <StyledInputTitle>

                  <input
                    placeholder='min'
                    name='roomsMin'
                    onChange={handleFilters}
                  />
                  <StyledLabel htmlFor='text'></StyledLabel>
                  <input
                    placeholder='max'
                    name='roomsMax'
                    onChange={handleFilters}
                  />
                </StyledInputTitle>

                  <StyledLabel htmlFor='text'></StyledLabel>
                  </StyledInputWrapper>
                {/* </StyledSearchFiltersWrapper>
          <StyledSearchFiltersWrapper> */}
                <StyledInputWrapper>
                <StyledInputTitle>
                <label htmlFor='text'>Piętro</label>
                </StyledInputTitle>
                <StyledInputTitle>

                  <input
                    placeholder='min'
                    name='floorMin'
                    onChange={handleFilters}
                  />
                  <StyledLabel htmlFor='text'></StyledLabel>

                  <input
                    placeholder='max'
                    name='floorMax'
                    onChange={handleFilters}
                  />
                </StyledInputTitle>

                  <StyledLabel htmlFor='text'></StyledLabel>
                </StyledInputWrapper>
                </StyledInputCheckboxWrapper>

                <StyledInputCheckboxWrapper>
                  <SingleCheckboxContainer>
                    <input
                      className='checkbox'
                      type='checkbox'
                      name='isAC'
                      onChange={handleFilters}
                    />
                    <StyledLabel>Klimatyzacja</StyledLabel>

                  </SingleCheckboxContainer>
                  <SingleCheckboxContainer>
                    <input
                      className='checkbox'
                      onChange={handleFilters}
                      type='checkbox'
                      name='isElevator'
                    />
                    <StyledLabel>Winda</StyledLabel>

                  </SingleCheckboxContainer>
                  <SingleCheckboxContainer>
                    <input
                      className='checkbox'
                      type='checkbox'
                      onChange={handleFilters}
                      name='isFurnished'
                    />
                    <StyledLabel>Meble</StyledLabel>

                  </SingleCheckboxContainer>
                  <SingleCheckboxContainer>
                    <input
                      className='checkbox'
                      onChange={handleFilters}
                      type='checkbox'
                      name='isLoggia'
                    />
                    <StyledLabel>Loggia</StyledLabel>

                  </SingleCheckboxContainer>
                  <SingleCheckboxContainer>
                    <input
                      className='checkbox'
                      onChange={handleFilters}
                      type='checkbox'
                      name='isParking'
                    />
                    <StyledLabel>Parking</StyledLabel>

                  </SingleCheckboxContainer>
                  <SingleCheckboxContainer>
                    <input
                      className='checkbox'
                      onChange={handleFilterFavourites}
                      type='checkbox'
                      name='favouriteFlats'
                    />
                    <StyledLabel>Pokaż ulubione</StyledLabel>

                  </SingleCheckboxContainer>
                </StyledInputCheckboxWrapper>
            </StyledSearchFiltersWrapper>
          )}
        </StyledShowMoreFilters>
      </StyledSearchWrapper>
    </SearchForm>
  );
};
