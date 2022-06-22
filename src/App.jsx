import { SearchBar } from "./components/SearchOffers/SearchBar/SearchBar"
import { SearchResults } from "./components/OffersList/SearchResults/SearchResults";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AddOffer } from "./components/ClientPanel/AddOffer/AddOffer";
import { Home } from "./Routes/Home";
import { OfferDetails } from "./components/OffersList/OfferDetails/OfferDetails"
<<<<<<< HEAD
import { Navigation } from "./components/Nav/Nav";
import { Contact } from "./components/Contact/Contact";
import { AboutUs } from "./components/AboutUs/About";
import { Auth } from "./components/auth/Auth";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Admin } from "./components/Admin/Admin";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { ForgotPassword } from "./components/auth/ForgotPassword";



function App() {

  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('auth user', user)
      if (user) {
        setIsAuth(true)
        setUser(user)
      } else {
        setIsAuth(false)
        setUser(null)
      }
    })
  }, [])



=======
import { useState, useEffect } from 'react'
import { db } from "./utils/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
const [flatsFromDb, setFlatsFromDb] = useState([])
  const getFlats = () => {
    const flatsCollection = collection(db, "flats");
    getDocs(flatsCollection).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFlatsFromDb(result)
      
    });
    
  };
  console.log(flatsFromDb)

  useEffect(() => {
    getFlats();
  }, []);
>>>>>>> main
  return (
    <BrowserRouter>
      <Navigation isAuth={isAuth} email={user?.email} />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/details" element={<OfferDetails />} />
<<<<<<< HEAD

        <Route path="auth" element={isAuth ? <Navigate to="/offer" /> : <Auth />} >
          <Route path="register" element={isAuth ? <Navigate to="/offer" /> : <Register />} />
          <Route path="login" element={isAuth ? <Navigate to="/offer" /> : <Login />} />
          <Route path="forgot-password" element={isAuth ? <Navigate to="/auth/login" /> : <ForgotPassword />} />
=======
        <Route path="newoffer" element={<AddOffer />}>
          {/* </Routes>/<Route path="newoffer/:flatsId" element={<AddOffer />} /> */}
          {/* <AddOffer /> */}
>>>>>>> main
        </Route>
        <Route path="offer" element={!isAuth ? <Navigate to="/" /> : <AddOffer />} />
        <Route path="admin" element={!isAuth ? <Navigate to="/admin" /> : <Admin />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;