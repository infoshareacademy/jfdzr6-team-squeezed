import styled from "styled-components";

export const StyledMapHeader = styled.h1`
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: white;
    z-index: 10;
`
export const InfoWindowBottomBackground = styled.div`
display: flex;
 flex-direction: row;
 justify-content: 'space-between';
 align-items: center;
 font-weight: bold;
&:hover {
    color: #fff;
    background-color: #0975C3;

    transition: all .3s;


}
`

export const InfoWindowBackground = styled.div`
  width: 240px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
        &:hover {
        background-color: #0975C3;
    color: #fff;

        transition: all .3s;
    }
`
// position: absolute;
// top: 2rem;
// left: 2rem;
// color: white;
// z-index: 10;
// `;
