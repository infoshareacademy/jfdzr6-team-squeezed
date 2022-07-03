import { Navigation } from "./Nav"
import styled from "styled-components";
import { useState } from "react";


const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 25px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;

div {
    @media (max-width: 860px) {
    width: 2rem;
    height:0.25rem;
   background-color: ${({ open }) => open ? "#fff" : "#ffffff"};
   border-radius: 20px;
   transform-origin: 1px;
    transition: all 0.3s linear;

   &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}
}


`

const Burger = ({ open, setOpen }) => {

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>

        </>
    )
}

export default Burger;