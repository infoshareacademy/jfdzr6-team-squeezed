import styled from "styled-components";

export const MegaSlider = styled.div`
  .slider {
    width: 100%;
    height: 83vh;
    position: relative;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 5s ease;
  }

  .slide img {
    width: 100%;
    height: 100%;
  }

  .current {
    opacity: 1;
    transform: translateX(0);
  }

  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 30vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    padding: 3rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
`;
