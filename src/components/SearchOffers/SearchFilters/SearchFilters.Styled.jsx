import styled from "styled-components";

export const StyledSearchFilters = styled.div`
  display: flex;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #eeeaea;
  border-radius: 20px;
  margin-bottom: 20px;

  input {
    width: auto;
    min-width: 100px;
    border-radius: 20px;
    text-align: center;
    padding: 10px 30px;
    background-color: white;
    color: #000;
    font-size: 14px;
    margin-left: auto;
    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
    border: none;
    transition: all 0.3s ease;
    outline: 0;
    font-family: "Montserrat", sans-serif;
    &:hover {
      box-shadow: 0 2px 6px -1px rgba(0.65);
    }
  }
  .checkbox {
    box-shadow: none;
  }
`;
export const StyledSearchFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  position: absolute;
  left: 0;
  top: 113px;
  z-index: 100;
  background-color: #0976c337;

`;
export const StyledShowMoreFilters = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 20px;
  width: 600px;
  position: relative;

  @media (max-width: 1000px) {
    width: 400px;
  }

  @media (max-width: 700px) {
    width: 300px;
  }
  img {
    width: 30px;
  }
  img:hover {
    cursor: pointer;
  }

  .search-submit-Btn {
    padding: 13px;
    margin: 20px;
    width: 100px;
    position: absolute;
    right: 0;
  }
  .filters-Btn {
    padding: 13px;
    margin: 20px;
    width: 100px;
    position: absolute;
right: 100px;
  }
`;

export const StyledMoreFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
