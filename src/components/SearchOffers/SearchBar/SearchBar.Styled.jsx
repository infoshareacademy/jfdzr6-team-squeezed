import styled from "styled-components";

export const StyledSearchSuggestion = styled.div`
  font-size: 26px;
  padding: 5px 5px 5px 2px;
  background-color: #ffffff9d;
  border-radius: 0;
  transition: background-color 0.5s;

  &:hover {
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;

export const StyledSearchSuggestionsWrapper = styled.div`
  position: absolute;
  top: 60px;
  width: 300px;
  z-index: 1;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1px;
  background-color: #ffffff9d;
  transition: background-color 0.5s;
`;

export const StyledSearchInput = styled.input`
  font-size: 26px;
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  padding: 10px 10px 10px 10px;
  border: none;
  background-color: #eeeaea;
  &:focus {
    outline: none;
    background-color: #fff;
    transition: background-color 0.5s;
  }
`;

export const StyledSearchWrapper = styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          position: relative;
          margin-left: 0 auto;
        
`
