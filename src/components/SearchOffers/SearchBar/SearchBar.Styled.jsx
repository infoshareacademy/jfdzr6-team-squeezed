

import styled from "styled-components";

export const StyledSearchSuggestion = styled.div`
  font-size: 26px;
  padding: 5px 5px 5px 2px;
  background-color: #ffffff9d;
  border-radius: 0;
  transition: background-color 0.5s;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    color: #eeeaea;
    background-color: #0975C3;
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;

export const StyledSearchSuggestionsWrapper = styled.div`
  position: absolute;
  top: 95px;
  left: 45px;
  width: 540px;
  border-radius: 20px;
  z-index: 1;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #eeeaea;
  color: #0975C3;
  overflow: hidden;
  text-align: left;
  z-index: 100;

  transition: background-color 0.5s;

  @media (max-width: 1000px) {
    width: 340px;
  }

  @media (max-width: 700px) {
    width: 240px;
    font-size: 15px;
  }
`;

export const StyledSearchInput = styled.input`
  font-size: ${({isLanding}) => !isLanding ? "22px" : "6px"};
  width: 100%;
  padding: ${({isLanding}) => isLanding ? "0px 10px" : "10px 10px 10px 10px"};
  border: none;
  background-color: #eeeaea;
  border-radius: 20px;
  margin: ${({isLanding}) => !isLanding ? "20px" : "50px"};
  margin: 20px;
  &:focus {
    outline: none;
    background-color: #fff;
    transition: background-color 0.5s;
  }
  &::placeholder {
    @media (max-width: 1000px) {
      color: rgba(0, 0, 0, 0);
    }
  }
`;

export const StyledSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  margin-left: 0 auto;
  font-family: "Montserrat", sans-serif;

  button {
    border-radius: 20px;
    text-align: center;
    padding: 11px 30px;
    margin-top: 5px;
    background-color: white;
    color: #0975c3;
    font-size: 18px;
    margin-left: 0 auto;
    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
    border: none;
    transition: all 0.3s ease;
    outline: 0;
    font-family: "Montserrat", sans-serif;
  }
  button:hover {
    background-color: #0975C3;
    color: white;
  }
  button:active {
    background-color: white;
    color: #0975C3;
  }
`;

export const SearchForm = styled.form`
  top: 0;
  margin: 0 auto;
`;
