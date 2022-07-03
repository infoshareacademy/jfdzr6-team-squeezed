import styled from "styled-components";

export const StyledInboxContainer = styled.div`
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
`

export const MessagesWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #EEEAEA;
    

    

    

`
export const MessageContainer = styled.div`
    padding: 3px;
    display: flex;
    justify-content: flex-start;
    &:hover {
            background-color: ${({header}) => header ? 'none' : 'yellow'};
        }
`
export const AuthorContainer = styled.div`
    padding: 3px;
    width: 20%;

`
export const MessageTitle = styled.div`
    padding: 3px;
    width: 80%;
    .message-header {
        text-decoration: none;
        color: black;
    padding: 3px;

       
    }
`

export const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2px;
`