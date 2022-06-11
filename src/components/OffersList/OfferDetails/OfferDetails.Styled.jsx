import styled from 'styled-components';

export const ContainerDivStyled = styled.div`
background-color: #c4c4c4;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 70%;
margin: 20px auto;

h2 {
    background-color: #f7f7f7;
    text-align: center;

}

.section-1 {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.picture {
   width: 40%;
   height: 200px;
   background-color: #e4e4e4;
   box-shadow: 7px 7px 19px -14px rgba(66, 68, 90, 1);
}

.picture img {
   width: 100%;
   max-width: 100%;
   max-height: 100%;
   background-color: #e4e4e4;
   
}

.form {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 200px;
    background-color: #e4e4e4;
    box-shadow: 7px 7px 19px -14px rgba(66, 68, 90, 1);
    
}

.section-2 {
    display: flex;
   flex-direction: row;
   justify-content: space-around;
   
}

.render-div {
    margin-top: 20px;
    width: 40%;
   height: 200px;
   background-color: #e4e4e4;
   box-shadow: 7px 7px 19px -14px rgba(66, 68, 90, 1);
}

.render-list {
    list-style: none;
}

.map {
    margin-top: 20px;
    width: 40%;
   height: 200px;
   background-color: #e4e4e4;
   box-shadow: 7px 7px 19px -14px rgba(66, 68, 90, 1);
}

.description {
    display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 30px;
}

`