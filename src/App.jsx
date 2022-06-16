import { SearchBar } from "./components/SearchOffers/SearchBar/SearchBar"
import { SearchResults } from "./components/OffersList/SearchResults/SearchResults";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AddOffer } from "./components/ClientPanel/AddOffer/AddOffer";
import { Home } from "./Routes/Home";
import { OfferDetails } from "./components/OffersList/OfferDetails/OfferDetails"
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



function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setIsAuth(!!user)
    })
  }, [])



  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} >
          <Route path="register" element={<Register />} />
          <Route path="login" element={isAuth ? <Navigate to="/offer" /> : <Login />} />
        </Route>
        <Route path="admin" element={<Admin />} />


        {/* 
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/details" element={<OfferDetails />} /> */}
        <Route path="offer" element={<AddOffer />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
