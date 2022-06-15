import styled from "styled-components";
// import React, { Component } from 'react';


export const ElementListTitle = styled.ul`
background-color:white;

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

li {
list-style:none;
padding:10px;
margin: 10px auto 10px auto;
background-color:#e7e7e7;
font-size: 14px;

input {
border:0;
width:100%;
justify-content:left;
}

textarea {
border:0;
width:100%;
justify-content:left;
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
  background-color: white;
  border-radius: 5px;
  padding: 2px;
}
.photo button:hover {
  background-color:#0975C3;
  color: white;
}

.photo p {
  padding: 0 0.5 rem;
  margin: 0;
  color: white;
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

export const Sections = styled.section`
  margin: 2px 100px auto 100px;
  padding: 15px;
  justify-content: center;
  background-color: white;
`;

export const PhotoLabel = styled.label`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #e7e7e7;
  cursor: pointer;
  width: 8rem;
  height: 5rem;
  font-size: large;
`
export const PhotoSpan = styled.span`
  font-weight:lighter;
  font-size:small;
  padding-top: 0.5rem;
`

export const PhotoInput = styled.input`
  display:none;
`