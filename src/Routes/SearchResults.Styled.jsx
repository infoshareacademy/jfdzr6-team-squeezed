import styled from "styled-components"
export const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    width: 100%;
`

export const ResultsWrapper = styled.div`
    display: flex;
     flex-direction: row;

     @media (max-width: 800px) {
        flex-direction: column;
     }
`