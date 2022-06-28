import styled from "styled-components";

export const SocialMedia = styled.div`
  padding: 20px;
  margin: 10px 10px;
  color: black;
  font-size: 30px;
  display: flex;
  

  flex-direction: row;
  div {
    margin: 0 20px;
    
  }
  svg {
    color: white;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  background-color: #0975c3;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  p {
    display: flex;
    justify-content: center;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bolder;
  }

  a {
    color: white !important;
    text-decoration: none;
  }
`;
