import styled from "styled-components";

export const SocialMedia = styled.div`
  padding: 5px;
  font-size: 20px;
  display: flex;

  flex-direction: column;

  margin: 0px auto 10px auto;

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
  background-color: #0975c3;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  p,
  a {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bolder;
    text-decoration: none;
  }

  .fontsAwesomContainer {
    display: flex;
    margin: 10px;
    justify-content: space-between;
  }
`;
