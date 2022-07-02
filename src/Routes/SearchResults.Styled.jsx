import styled from "styled-components";
export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e3dddd;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SearchResultListParent = styled.div`
  overflow-y: scroll;
  height: 85vh;
`;
