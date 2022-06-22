import styled from "styled-components";

export const StyledLabel = styled.label`
  background-color: #eeeaea;
  color: black;
  font-size: 18px;
  padding: 5px;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  transition: background-color 0.5s;

  &:focus {
    outline: none;
    background-color: #fff;
    transition: background-color 0.5s;
  }
`;

export const StyledLabelWrapper = styled.div`
  background-color: #eeeaea;
  &:focus {
    outline: none;
    background-color: #fff;
    transition: background-color 0.5s;
  }
`;
