import styled, { withTheme } from "styled-components";
// import React, { Component } from 'react';



export const Container = styled.div`
  display:grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(300px, auto) auto;
  font-size:14px;
  box-shadow:  2px 2px 6px 4px rgba(0,0,0,0.13);
  max-width: 1240px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color:#e3dddd; */

.colorStar{
  color:red;
  font-weight: bold;
}



.box1{
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  margin: 0 10px 0 10px;
  padding-top:22px;

  input {
    border:0;
    min-width: 330px;
    width:100%;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    margin-bottom:auto;
    height:41px;
    font-size: 12px;
    border-radius: 20px;
    padding: 1px 10px;
    
  }
  

  label.title {
    margin-bottom:2px;
  }

  label.description {
    margin-bottom:2px;
    margin-top:5px;
  }

  textarea {
    border:0;
    width:100%;
    min-width: 340px;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    height:500px;
    margin-bottom:2px;
    min-height:385px;
    max-height:385px;
    border-radius: 20px;
    padding: 6px 10px;
    font-size: 12px;
  }
}

.box2 {
  display:grid;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  grid-template-columns: 1fr;
  margin: 0 10px 0 10px;
  padding-top:22px;

  .labelStyle {
    width:100%;
    margin: 0 auto;
    padding-bottom: 0px;
    height: auto;
  }

  input {
    border:0;
    min-width: 160px;
    width:100%;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    margin-bottom:7px;
    height:auto;
    font-size:12px;
    height:41px;
    border-radius: 20px;
    padding: 1px 10px;
  }

  .labelStyle__left {
    display:flex;
    text-align:left;
  }

}
.box3 {
  display:grid;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  grid-template-columns: 1fr;
  margin: 0 10px 0 10px;
  padding-top:22px;
  
  .checkboxStyles {
    width:100%;
    margin: 0 auto;
    height: 24px;
  }
  .checkboxStyles__checkbox {
    display:flex;
    justify-content:left;
    align-items: center;
    margin-left: 80px;

    .checkboxInput {
      margin-right: 10px;
    }
  }
  input.userData {
    border:0;
    width:100%;
    min-width: 160px;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    margin-bottom:7px;
    height:auto;
    font-size:12px;
    height:41px;
    border-radius: 20px;
    padding: 1px 10px;
  }
}

.box4 {
  display:grid;
  grid-column: 1 / 5;
  grid-row: 2 / 3;
  background-color:white;
  margin: 0 10px 0 10px;

  .submitButton {

  display:flex;
  flex-direction:right;
  align-items:right;
  margin: 0 auto;
  border: none;
  border-radius:20px;
  background-color: #0975C3;
  color: white;
  height:41px;
  padding: 10px 30px;
  cursor: pointer;
}


.box4styles {
 
display:flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: center;
  justify-content: center;

}

.infoAboutAddingPictures {
  color:red;
  margin: 5px auto 0px auto;
  
}

.photosLabel {
  background-color: white;
  margin: 0 auto;
  

}

.upload-btn {
  cursor: pointer;
  display:block;
  margin: 0 auto;
  border: none;
  width: 12rem;
  height:3rem;
  color: white;
  background-color:#0975C3;
  border-radius: 20px;
}

label.hover,
.upload-btn:hover {
  box-shadow:rgba(0,0,0,0.1) 0px 10px 15px 3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;
}

.error {
  margin-top:0;
  text-align:center;
}

.error span {
  color: red;
}

img {
  padding:0;
  margin:0;
}

.photo {
  margin: 1rem 0.5rem;
  position: relative;
  box-shadow: rgba(0,0,0,0.05) 0px 1px 2px 0px;
}

.photo button {
  position:absolute;
  bottom:0;
  right:0;
  cursor:pointer;
  border:none;
  color: white;
  font-size: 12px;
  background-color: #0975C3;
  border-radius: 20px;
  padding: 1px 4px;
   &:hover {
        background-color: white;
        color: #0975C3;
        
      }
  
  
}
.photo button:hover {
  background-color:#0975C3;
  color: white;
  border-radius: 20px;
}

.photo p {
  padding: 0 0.5rem;
  margin: 0;
  color: white;
  height: 25px;
  /* color: #9E9E9E; */
}
.photos {
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
}
}
`

export const MainDiv = styled.div`
background-color:white;
margin:0px 100px;
padding:20px;
`;


export const PhotoLabel = styled.label`
 
  margin: 10px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0975C3;
  cursor: pointer;
  width: 12rem;
  height: 3rem;
  font-size: 14px;
  color: white;
  text-align: center;
  border-radius:20px;
  
  
`
export const PhotoSpan = styled.span`
  font-weight:lighter;
  font-size:10px;
  padding-top: 0.5rem;
  margin: 0 auto;
`

export const PhotoInput = styled.input`
  display:none;
`

