import styled from "styled-components";

export const SocialMedia = styled.div`
  padding: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px auto 10px auto;


  div {
    margin: 0 20px;
  }
  svg {
    color: white;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  background-color: #0975C3;
  align-items: center;
  justify-content: space-around;
  padding-left: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  position:sticky;
  bottom:0;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  p,
  a {
    color: white !important;
    font-family: "Montserrata ", sans-serif;
    text-decoration: none;
    font-size: 16px;
    margin: 0;
  }

  a {
    padding: 20px;
  }

  .fontsAwesomContainer {
    display: flex;
    justify-content: space-between;
  }
`;
