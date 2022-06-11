import styled from "styled-components";

export const StyledSearchSuggestion = styled.div`
  font-size: 14px;
  padding-left: 2px;
  &:hover {
    background-color: #eeeaea;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const StyledSearchSuggestionsWrapper = styled.div`
  position: absolute;
  top: 15px;
  width: 200px;
  z-index: -1;
  border: 1px solid black;
  border-radius: 5px;
`;

export const StyledSearchInput = styled.input`
  width: 200px;
  padding-left: 2px;
  background-color: inherit;
  border: none;
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }

`;
