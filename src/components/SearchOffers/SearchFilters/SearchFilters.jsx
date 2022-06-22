// import { InputFilter } from "./InputFilter/InputFilter";
// import { SelectFilter } from "./SelectFilter/SelectFilter";
// import arrowDown from "./double-down-arrow-4854.svg";
// import {
//   StyledInputFilter,
//   StyledInputFilterPrice,
// } from "./InputFilter/InputFilter.Styled";
// import { StyledSelectFilterBtn } from "./SelectFilter/SelectFilter.Styled";
// import { useState } from "react";
// import { StyledLabel } from "./Label.Styled";
// import {
//   StyledInputWrapper,
//   StyledSearchWrapper,
//   StyledShowMoreFilters,
// } from "./SearchFilters.Styled";
// import { StyledCheckboxFilter } from "./CheckboxFilter/CheckboxFilter.Styled";
// import { CheckoxFilter } from "./CheckboxFilter/CheckboxFilter";

export const SearchFilters = ({setFilters}) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({})

  const handleOptions = () => {
    setOptionsActive(!optionsActive);
  };
  const handleShowMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters);
  };
  // const handleFilters = (e) => {
  //   // e.preventDefault();
  //   //   setSelectedFilters({
  //   //     ...selectedFilters,
  //   //     [e.target.name]: e.target.value
  //   //   })
  //     console.log(e.target)
      
  // }
  return (
    <>
      <StyledSearchWrapper>
        <label htmlFor='text'></label>
        <StyledInputWrapper>
          <InputFilter placeholder='powierzchnia od' name="sizeMin" />
          <StyledLabel htmlFor='text'>m2</StyledLabel>
        </StyledInputWrapper>
        <label htmlFor='text'></label>
        <StyledInputWrapper>
          <InputFilter placeholder='powierzchnia do' name="sizeMax" />
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
      </StyledSearchWrapper>

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
    </>
  );
};
