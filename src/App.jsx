import { SearchBar } from "./components/SearchOffers/SearchBar/SearchBar";
import { SearchResults } from "./components/OffersList/SearchResults/SearchResults";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AddOffer } from "./components/ClientPanel/AddOffer/AddOffer";
import { Home } from "./Routes/Home";
import { NewOffer } from "./Routes/NewOffer";
import { OfferDetails } from "./components/OffersList/OfferDetails/OfferDetails";
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
import { Slider } from "./components/Landing/Slider";
import { ClientPanel } from "./components/ClientPanel/ClientPanel";




function App() {

  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('auth user', user)
      console.log('auth user uid', user.uid)
      if (user) {
        setIsAuth(true)
        setUser(user)
      } else {
        setIsAuth(false)
        setUser(null)
      }
    })
  }, [])


  return (
    <BrowserRouter>
      <Navigation isAuth={isAuth} email={user?.email} />
      <Routes>

        <Route path="/" element={<Slider />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/details/:id" element={<OfferDetails />} />

        <Route path="auth" element={isAuth ? <Navigate to="/offer" /> : <Auth />} >
          <Route path="register" element={isAuth ? <Navigate to="/offer" /> : <Register />} />
          <Route path="login" element={isAuth ? <Navigate to="/offer" /> : <Login />} />
          <Route path="forgot-password" element={isAuth ? <Navigate to="/auth/login" /> : <ForgotPassword />} />
        </Route>
        <Route path="addoffer" element={!isAuth ? <Navigate to="/auth/login" /> : <AddOffer />} />
        <Route path="mypanel" element={!isAuth ? <Navigate to="/auth/login" /> : <ClientPanel userId={user.uid}/>} />
        <Route path="admin" element={!isAuth ? <Navigate to="/admin" /> : <Admin />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
