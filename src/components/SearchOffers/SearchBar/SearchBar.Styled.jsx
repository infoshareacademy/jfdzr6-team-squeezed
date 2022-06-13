import styled from "styled-components";

export const StyledSearchSuggestion = styled.div`
  font-size: 16px;
  padding: 5px 5px 5px 2px;
  background-color: #ffffff9d;
  border-radius: 0 ;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

export const StyledSearchSuggestionsWrapper = styled.div`
  position: absolute;
  top: 45px;
  width: 200px;
  z-index: 1;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1px;
  background-color: #ffffff9d;

`;

export const StyledSearchInput = styled.input`
  width: 200px;
  margin-bottom: 200px;
  padding: 10px 10px 10px 10px;
  background-color: inherit;
  border: none;
  background-color: #eeeaea;
  &:focus {
    outline: none;
    background-color: #fff;
  }

`;
