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
  font-family: 'Montserrat', sans-serif;
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
   margin-top: 20px;
   justify-content: center;
   gap: 10px;
   
   
`
export const StyledShowMoreFilters = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  
  

  img {
    width: 30px;
  }
  img:hover {
    cursor: pointer;
  }
`

export const StyledMoreFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
`