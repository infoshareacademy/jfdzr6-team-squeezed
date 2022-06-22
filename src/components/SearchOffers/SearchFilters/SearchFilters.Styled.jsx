import styled from "styled-components";

export const StyledSearchFilters = styled.div`
  display: flex;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  padding: 5px;
  background-color: #eeeaea;
`;
export const StyledSearchWrapper1 = styled.div`
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
  &:hover {
    cursor: pointer;
  }
`

export const StyledMoreFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
`