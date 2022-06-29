import styled, { withTheme } from "styled-components";
// import React, { Component } from 'react';



export const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: minmax(300px, auto) auto;
  font-size:14px;
  box-shadow:  2px 2px 6px 4px rgba(0,0,0,0.13);
   
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color:#e3dddd; */

p{
  margin-top:5%;
}

.box1{
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  margin: 0 10px 0 10px;
 
  input {
    border:0;
    width:100%;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    margin-bottom:auto;
    justify-content:left;
    height:24px;
    font-size: 10px;
  }
  

  label.title {
    margin-bottom:2px;
  }

  label.description {
    margin-bottom:2px;
    margin-top:10px;
  }

  textarea {
    border:0;
    width:100%;
    justify-content:left;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    height:500px;
    margin-bottom:2px;
    min-height:200px;
    max-height:200px;
  }
}

.box2 {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  margin: 0 10px 0 10px;
  padding-top:11%;

  .labelStyle {
   margin:0 auto;
  }

  label.street{
  
  padding: 10px 10px 0 0;
  }

    input {
    border:0;
    width:100%;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    margin-bottom:auto;
    justify-content:left;
    height:auto;
    font-size:10px;
    height:24px;
  }



}
.box3 {
  grid-column: 5 / 6;
  grid-row: 1 / 3;
  margin: 0 10px 0 10px;
  padding-top:30%;
  
  .checkboxStyles {
    margin: 0 auto;
  }

  input.userData {
    border:0;
    width:100%;
    box-shadow:  2px 2px 6px 4px rgba(0,0,0,.13);
    margin-bottom:auto;
    justify-content:left;
    height:auto;
    
  }
}


.box4 {
  
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  background-color:white;
  margin: 0 10px 0 10px;
 

.box4styles {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: right;
  justify-content: right;
 
}

.submitButton {
  margin: auto 30px;
  border: none;
  border-radius:5px;
  padding: 3px;
  
  
}

.photosLabel {
  background-color: white;
 
}

.upload-btn {
  cursor: pointer;
  display:block;
  margin: 0 auto;
  border: none;
  border-radius:10px;
  width: 10rem;
  height:3rem;
  color: black;
  background-color:#e7e7e7;
  
}

label.hover,
.upload-btn:hover {
  box-shadow:rgba(0,0,0,0.1) 0px 10px 15px 3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;
}

.error {
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
  color: #9E9E9E;
  font-size: 12px;
  background-color: #e7e7e7;
  border-radius: 5px;
  padding: 2px;
  
}
.photo button:hover {
  background-color:#0975C3;
  color: white;
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

// export const ElementListTitle = styled.ul`
// background-color:white;

// .photosLabel {
//   background-color: white;
// }

// .upload-btn {
//   cursor: pointer;
//   display:block;
//   margin: 0 auto;
//   border: none;
//   border-radius:10px;
//   width: 10rem;
//   height:3rem;
//   color: black;
//   background-color:#e7e7e7;
// }

// label.hover,
// .upload-btn:hover {
//   box-shadow:rgba(0,0,0,0.1) 0px 10px 15px 3px, rgba(0,0,0,0.05) 0px 4px 6px -2px;
// }

// .error {
//   text-align:center;
// }

// .error span {
//   color: red;
// }

// li {
// list-style:none;
// padding:10px;
// margin: 10px auto 10px auto;
// background-color:#e7e7e7;
// font-size: 14px;

// input {
// border:0;
// width:100%;
// justify-content:left;
// }

// textarea {
// border:0;
// width:100%;
// justify-content:left;
// }

// img {
//   padding:0;
//   margin:0;
// }

// .photo {
//   margin: 1rem 0.5rem;
//   position: relative;
//   box-shadow: rgba(0,0,0,0.05) 0px 1px 2px 0px;
// }

// .photo button {
//   position:absolute;
//   bottom:0;
//   right:0;
//   cursor:pointer;
//   border:none;
//   color: #9E9E9E;
//   font-size: 12px;
//   background-color: #e7e7e7;
//   border-radius: 5px;
//   padding: 2px;
// }
// .photo button:hover {
//   background-color:#0975C3;
//   color: white;
// }

// .photo p {
//   padding: 0 0.5rem;
//   margin: 0;
//   color: white;
//   height: 25px;
//   /* color: #9E9E9E; */
// }
// .photos {
//   display: flex;
//   flex-direction:row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items:center;
// }}
// `

// export const CityStreet = styled.div`
//   background-color: #e7e7e7;
//   display:block;
// `

export const MainDiv = styled.div`
background-color:white;
margin:0px 100px;
padding:20px;

`;

export const Sections = styled.section`
  margin: 2px 100px auto 100px;
  padding: 15px;
  justify-content: center;
  background-color: white;
`;


export const PhotoLabel = styled.label`
  margin: 10px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #e7e7e7;
  cursor: pointer;
  width: 8rem;
  height: 5rem;
  font-size: 14px;
`
export const PhotoSpan = styled.span`
  font-weight:lighter;
  font-size:10px;
  padding-top: 0.5rem;
`

export const PhotoInput = styled.input`
  display:none;
`

// export const ContactForm = styled.div`
//   display:flex;
//   position:relative;
//   padding: 10px;
//   margin:0 30px auto 30px;
//   background-color:#e7e7e7;
//   display:inline;

//   input {
//     border:none;
//     margin:10px;

//   }
  
// `
