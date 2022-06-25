import styled from "styled-components";

export const ContainerStyled = styled.div`
  display:  flex; 
  flex-direction:  row; 
  width: 1440px;
  height:  auto; 
  margin:  0 auto; 
  margin-top: 20px;
  background:  #ffffff; 
  border-radius:  4px; 
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.12);
  

  
.left {
  width:  320px; 
  height:  auto; 
  min-height:  100%; 
  background-image: url("https://images.unsplash.com/photo-1600263309890-36524242f6c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80");
  background-size:  cover;
  border-top-left-radius:  4px; 
  border-bottom-left-radius:  4px; 
  }


.log-in {
 padding:  40px 30px; 
  background:  #fefefe; 
  display:  flex; 
  flex-direction:  column;
  align-items:  flex-start; 
  padding-bottom:  20px; 
  width: 300px;
}

  h4 {
    margin-bottom:  20px;
    color:  #0975C3;
  }
  p {
    line-height:  155%; 
    margin-bottom:  5px; 
    font-size:  14px; 
    color:  #000; 
    opacity:  .65;
    max-width:  250px; 
    margin-bottom:  40px; 
  }
  button {
  width:  auto;
  min-width:  100px;
  border-radius:  20px; 
  text-align:  center; 
  padding:  10px 30px;
  margin-top:  5px; 
  background-color:#0975C3;
  color:  #fff; 
  font-size:  14px;
  margin-left:  auto; 
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
  border:  none;
  transition:  all .3s ease; 
  outline: 0; 
  &:hover {
    transform:  translateY(-3px);
    box-shadow:  0 2px 6px -1px rgba($primary, .65);
    &:active {
      transform:  scale(.99);
    }
  }
}


input {
  font-size:  16px; 
  padding:  20px 0px; 
  height:  56px; 
  border:  none; 
  border-bottom:  solid 1px rgba(0,0,0,.1); 
  background:  #fff; 
  width:  280px; 
  color:  #000; 

  &:focus {
    border-bottom:  solid 1px $primary; 
    outline: 0; 
    box-shadow:  0 2px 6px -8px rgba($primary, .45);
  }
}
.floating-label {
  position:  relative; 
  margin-bottom:  10px;
  width:  100%; 
}
  label {
    position:  absolute; 
    top: calc(50% - 7px);
    left:  0; 
    opacity:  0; 
    transition:  all .3s ease; 
    padding-left:  44px; 
  }
  input {
    width:  calc(100% - 44px); 
    margin-left:  auto;
    display:  flex; 
  }
  .icon {
    position:  absolute; 
    top:  0; 
    left:  0; 
    height:  56px; 
    width:  44px; 
    display:  flex; 
  }

  .icon img {
    width: 20px;
    margin: auto;
    opacity:  .25;
  }

 
	

`