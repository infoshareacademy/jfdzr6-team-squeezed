import styled from "styled-components";

export const StyledSearchFilters = styled.div`
  display: flex;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #E3DDDD;
  border-radius: 20px;
  z-index: 3;
  /* -webkit-box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1);
-moz-box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1);
box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1); */

  input {
    width: auto;
    width: 70px;
    border-radius: 20px;
    text-align: center;
    padding: 10px 10px;
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

`;
export const StyledSearchFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 450px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 75px;
  border-radius: 20px;
  z-index: 1;
  background-color: #EEEAEA;
  -webkit-box-shadow: 0px 0px 65px -34px rgba(246, 246, 255, 1);
-moz-box-shadow: 0px 0px 65px -34px rgba(246, 246, 255, 1);
box-shadow: 0px 0px 65px -34px rgba(246, 246, 255, 1);

`;
export const StyledShowMoreFilters = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 10px; */
  gap: 20px;
  width: 600px;
  position: relative;
  z-index: 100;


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
    padding: ${({isLanding}) => isLanding ? "0px" : "13px"};
    margin: ${({isLanding}) => isLanding ? "0px" : "20px"};
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

export const StyledInputCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 410px;
  padding: 5px;
  border-radius: 20px;
  margin-bottom: 20px;

  

`

export const SingleCheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: #E3DDDD;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border-radius: 20px;
  padding-left: 10px;
  z-index: 3;

  /* -webkit-box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1);
-moz-box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1);
box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1); */
  .checkbox {
    box-shadow: none;
    height: 25px;
    width: 25px;
    cursor: pointer;

  }
  
`

export const StyledInputTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  z-index: 2;
  /* -webkit-box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1);
-moz-box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1);
box-shadow: 0px 0px 65px -34px rgba(0, 0, 0, 1); */
`