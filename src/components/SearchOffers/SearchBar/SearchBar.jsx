import { useState, useEffect } from "react";
import { CheckoxFilter } from "../SearchFilters/CheckboxFilter/CheckboxFilter";
import { InputFilter } from "../SearchFilters/InputFilter/InputFilter";
import { StyledInputFilterPrice } from "../SearchFilters/InputFilter/InputFilter.Styled";
import { StyledLabel } from "../SearchFilters/Label.Styled";
import { SearchFilters } from "../SearchFilters/SearchFilters";
import markerSVG from "../../Map/ts-map-pin.svg";
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

import { db } from "../../../utils/firebase";
export const SearchBar = ({
  setFlats,
  flatsFromDb,
  setFilters,
  setFavourites,
  flats,
  setIsLanding,
  isLanding,
  favourites,
  setActiveFlat,
  activeFlat
}) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [suggestionsToPrint, setSuggestionsToPrint] = useState([]);
  const [pickedSuggestion, setPickedSuggestion] = useState("");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    sizeMin: "",
    sizeMax: "",
    priceMin: "",
    priceMax: "",
    roomsMin: "",
    roomsMax: "",
    floorMin: "",
    floorMax: "",
    isAC: false,
    isElevator: false,
    isFurnished: false,
    isLoggia: false,
    isParking: false,
  });
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
    const hasOnlyLetters = /^[a-zA-Za-z????????????????????????????????????\s]+$/;
    if (hasOnlyLetters.test(e.target.value) === false) {
      setPickedSuggestion(
        (e.target.value = e.target.value.slice(0, e.target.value.length - 1))
      );
    } else {
      setPickedSuggestion(e.target.value);
    };
    

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
    setActiveFlat("")
    e.preventDefault();
    showMoreFilters === true ? setShowMoreFilters(!showMoreFilters) : null;
    const {
      searchCity,

    } = e.target;

    //filter flats
    let flatsResults = flatsFromDb
      .filter((flat) => flat.city === searchCity.value)
      .filter(
        (flat) =>
          selectedFilters.sizeMin === "" ||
          parseInt(selectedFilters.sizeMin) <= parseInt(flat.size)
      )
      .filter(
        (flat) =>
          selectedFilters.sizeMax === "" || selectedFilters.sizeMax >= flat.size
      )

      .filter(
        (flat) =>
          selectedFilters.priceMin === "" ||
          selectedFilters.priceMin <= flat.price
      )
      .filter(
        (flat) =>
          selectedFilters.priceMax === "" ||
          selectedFilters.priceMax >= flat.price
      )
      .filter(
        (flat) =>
          selectedFilters.roomsMin === "" ||
          selectedFilters.roomsMin <= flat.rooms
      )
      .filter(
        (flat) =>
          selectedFilters.roomsMax === "" ||
          selectedFilters.roomsMax >= flat.rooms
      )
      .filter(
        (flat) =>
          selectedFilters.floorMin === "" ||
          selectedFilters.floorMin <= flat.floor
      )
      .filter(
        (flat) =>
          selectedFilters.floorMax === "" ||
          selectedFilters.floorMax >= flat.floor
      )
      .filter((flat) => selectedFilters.isAC === false || flat.isAC === true)
      .filter((flat) => selectedFilters.isElevator === false || flat.isElevator === true)
      .filter((flat) => selectedFilters.isFurnished === false || flat.isFurnished === true)
      .filter((flat) => selectedFilters.isLoggia === false || flat.isLoggia === true)
      .filter((flat) => selectedFilters.isParking === false || flat.isParking === true);

    //continue with filtering results

    setFlats(flatsResults);
    setSuggestionsToPrint([]);
    setIsLanding(false);
    // setFavourites(false)

    navigate("/search-results");
  };
  //handle all filters
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
    if (flats?.[0]) {
      setPickedSuggestion(flats[0].city);
    }
  }, [flatsFromDb]);

  return (
    <SearchForm onSubmit={handleCitySearch} autoComplete='off'>
      <StyledSearchWrapper>
        <StyledShowMoreFilters>
          <label htmlFor='searchCity' />
          <StyledSearchInput
            onChange={handleCitySuggestions}
            onClick={() =>
              showMoreFilters === true
                ? setShowMoreFilters(!showMoreFilters)
                : "null"
            }
            type='text'
            name='searchCity'
            id='searchCity'
            flats={flats}
            value={pickedSuggestion}
            placeholder='Wpisz miasto i znajd?? swoje mieszkanie...'
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
            <button
              type='button'
              className='filters-Btn'
              onClick={handleShowMoreFilters}>
              Filtry
            </button>
          )}

          {/* przerzucone */}

          {showMoreFilters && (
            <StyledSearchFiltersWrapper>
              <StyledInputCheckboxWrapper>
                <StyledInputWrapper>
                  <StyledInputTitle>
                    <label htmlFor='text'>Metra??</label>
                  </StyledInputTitle>
                  <StyledInputTitle>
                    <input
                      placeholder='min'
                      name='sizeMin'
                      value={selectedFilters.sizeMin}
                      onChange={handleFilters}
                      type='number'
                    />
                    <StyledLabel htmlFor='text'></StyledLabel>
                    <label htmlFor='text'></label>

                    <input
                      type='number'
                      placeholder='max'
                      value={selectedFilters.sizeMax}
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
                      value={selectedFilters.priceMin}
                      name='priceMin'
                      onChange={handleFilters}
                    />

                    <StyledLabel htmlFor='text'></StyledLabel>
                    <input
                      placeholder='max'
                      value={selectedFilters.priceMax}
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
                      value={selectedFilters.roomsMin}
                      onChange={handleFilters}
                    />
                    <StyledLabel htmlFor='text'></StyledLabel>
                    <input
                      placeholder='max'
                      value={selectedFilters.roomsMax}
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
                    <label htmlFor='text'>Pi??tro</label>
                  </StyledInputTitle>
                  <StyledInputTitle>
                    <input
                      placeholder='min'
                      name='floorMin'
                      value={selectedFilters.floorMin}
                      onChange={handleFilters}
                    />
                    <StyledLabel htmlFor='text'></StyledLabel>

                    <input
                      placeholder='max'
                      value={selectedFilters.floorMax}
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
                    onChange={handleFilterFavourites}
                    type='checkbox'
                    name='favouriteFlats'
                    checked={favourites}

                  />
                  <StyledLabel>Poka?? ulubione</StyledLabel>
                </SingleCheckboxContainer>
                <SingleCheckboxContainer>
                  <input
                    className='checkbox'
                    type='checkbox'
                    name='isAC'
                    checked={selectedFilters.isAC}
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
                    checked={selectedFilters.isElevator}

                  />
                  <StyledLabel>Winda</StyledLabel>
                </SingleCheckboxContainer>
                <SingleCheckboxContainer>
                  <input
                    className='checkbox'
                    type='checkbox'
                    onChange={handleFilters}
                    name='isFurnished'
                    checked={selectedFilters.isFurnished}

                  />
                  <StyledLabel>Meble</StyledLabel>
                </SingleCheckboxContainer>
                <SingleCheckboxContainer>
                  <input
                    className='checkbox'
                    onChange={handleFilters}
                    type='checkbox'
                    name='isLoggia'
                    checked={selectedFilters.isLoggia}

                  />
                  <StyledLabel>Loggia</StyledLabel>
                </SingleCheckboxContainer>
                <SingleCheckboxContainer>
                  <input
                    className='checkbox'
                    onChange={handleFilters}
                    type='checkbox'
                    name='isParking'
                    checked={selectedFilters.isParking}

                  />
                  <StyledLabel>Parking</StyledLabel>
                </SingleCheckboxContainer>
              </StyledInputCheckboxWrapper>
            </StyledSearchFiltersWrapper>
          )}
        </StyledShowMoreFilters>
      </StyledSearchWrapper>
    </SearchForm>
  );
};
