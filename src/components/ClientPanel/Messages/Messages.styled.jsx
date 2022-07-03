import styled from "styled-components";

export const StyledInboxContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    gap: 10px;
`

export const MessagesWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #EEEAEA;    
    padding-top: 30px;
    

`
export const MessageContainer = styled.div`
    padding: 3px;
    display: flex;
    justify-content: flex-start;
    background-color: #FFF;
    border-radius: 20px;
    gap: 10px;
    box-shadow: 0px 1px 11px -3px rgba(66, 68, 90, 1);
    &:hover {
            background-color: ${({header}) => header ? 'none' : '#a1afdb'};
            border-radius: 20px;
        }
        .message-header {
            text-decoration: none;
            color: #0975c3;
        }
`
export const AuthorContainer = styled.div`
    padding: 3px;
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
export const MessageTitle = styled.div`
    padding: 3px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    .message-header {
        text-decoration: none;
        color: black;
    padding: 3px;
       
    }
`

export const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
`