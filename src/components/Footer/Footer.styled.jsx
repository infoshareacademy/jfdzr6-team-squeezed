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
`;

export const FooterContainer = styled.div`
  display: flex;
  background-color: #0975c3;
  align-items: center;
  justify-content: flex-end;
  padding-left: 20px;

  p {
    display: flex;
    justify-content: flex-end;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: bolder;
  }
`;
