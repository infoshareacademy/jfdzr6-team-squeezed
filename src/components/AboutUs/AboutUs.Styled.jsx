import styled from "styled-components";

export const AboutPhoto = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #ffffff;

  box-shadow: 10px gray;
  border-radius: 20px;
  margin: 50px 50px;

  .photoIcons {
    display: flex;
    margin: 20px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    img {
      border-radius: 50%;
      width: 70%;
      height: auto;
      @media (min-width: 768px) {
        width: 460px;
        height: 460px;
      }
    }
  }

  .aboutLink {
    background-color: #0975c3;
    color: white;
    text-decoration: none;
    font-weight: 900px;
    padding: 10px;
    border-radius: 20px;
    margin: 20px;
  }
`;
