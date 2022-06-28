import styled from "styled-components";


export const ContainerDivStyled = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
height: 100%;
margin: 20px auto;



/* background: linear-gradient(-45deg,  #e7e7e7, #fff, #e7e7e7);
	background-size: 400% 400%;
	animation: gradient 30s ease infinite;
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
} */
	


.title {
  margin: 0px auto 20px;
  width: 1358px;
  background-color: white;
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
  text-transform: uppercase;
  border-radius:  20px;
}

.title h2 {
 font-size: 20px;
  color: #0975C3;
  padding: 10px;
  text-align: center;
  padding: 20px;
}


.section-1 {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   
}


.picture {
   width: 900px;
   height: fit-content;
   border-radius:  20px; 
   background-color: white;
   box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
   &:hover {
    transform:  translateY(-3px);
    box-shadow:  0 2px 6px -1px rgba($primary, .65);
    &:active {
      transform:  scale(.99);
    }
  }
  
}

.picture img {
   width: 100%;
   height: 100%;
   background-color: white;
   border-radius:  20px; 
   
}

.form {

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 600px;
    background-color: white;
    box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
    border-radius:  20px; 
    
}

.contact {
    padding: 20px;
  

}

.contact-email {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 25px;

}


.contact-number {
  display: flex;
  flex-direction: row;
  margin-left: 25px;

 
}


.first {
  color: #0975C3;
  margin-left: 5px;
}

.firstChild {
  color:  #000; 
  opacity: 70%;
}




 .contact h3 {
    color: #0975C3;
    margin-left: 25px;
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
}


textarea {
font-size:  16px; 
  padding:  20px 0px; 
  height:  200px;
  max-height: 200px;
    max-width: 280px;
    min-width: 280px;
  border:  none; 
  border-bottom:  solid 1px rgba(0,0,0,.1);
  width:  280px; 
  color:  #000;   
  
}


button {
  width: auto;
  min-width:  100px;
  border-radius:  20px; 
  text-align:  center; 
  padding:  10px 30px;
  margin-top:  15px; 
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

.section-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

.render-div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    width: 900px;
    height: 200px;
    background-color: white;
    box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13);
    border-radius:  20px;  
}

.render-div2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    width: 900px;
    height: 200px;
    
}

  .render-list {
    list-style: none;
    
}

.render-list li { 
  border-bottom:  solid 1px rgba(0,0,0,.1); 
  background:  #fff; 
  padding: 7px;
  width:  150px; 
  color:  #000; 
  opacity: 70%;
  
}

.fetch li {
  color: #0975C3;
  opacity: 100%;
}

  .map {
    margin-top: 20px;
    width: 400px;
    height: 200px;
    background-color: white;
    box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
    background-color:#0975C3 ;
    border-radius:  20px; 
}

  .description {
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: white;
    box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
    margin: 20px auto 0;
    padding: 20px;
    width: 1358px;
    border-radius:  20px; 
    
}

.description h3 {
  color: #0975C3;
  margin-bottom: 20px;

}

.render-list div {
  display: flex;
  
}

.icon {
  height: 20px;
  align-self: center;
}

.formDiv {
  display: flex;
  
}

.iconInput {
  height: 20px;
  align-self: center;
  margin-right: 5px;
  opacity: 70%;
}

`
