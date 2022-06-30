import styled from "styled-components";
export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e3dddd;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ResultsListWrapper = styled.div`

`;
