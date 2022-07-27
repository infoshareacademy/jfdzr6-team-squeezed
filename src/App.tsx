import { SearchBar } from "./components/SearchOffers/SearchBar/SearchBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AddOffer } from "./components/ClientPanel/AddOffer/AddOffer";
import { EditOffer } from "./components/ClientPanel/EditOffer/EditOffer";
import { Home } from "./Routes/Home";
import { OfferDetails } from "./components/OffersList/OfferDetails/OfferDetails";
import { Navigation } from "./components/Nav/Nav";
import { Contact } from "./components/Contact/Contact";
import { AboutUs } from "./components/AboutUs/AboutUs.tsx";
import { Auth } from "./components/auth/Auth";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Admin } from "./components/Admin/Admin";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { SearchResults } from "./Routes/SearchResults";
import { db } from "./utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Slider } from "./components/Landing/Slider";
import { Footer } from "./components/Footer/Footer";
import { Privacy } from "./components/Privacy/Privacy";
import { Statute } from "./components/Statute/Statute";
import { ClientPanel } from "./components/ClientPanel/ClientPanel";
import { Messages } from "./components/ClientPanel/Messages/Messages";
import React from "react";

function App() {
  const [user, setUser] = useState<Object | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [flats, setFlats] = useState<Object[]>([]);
  const [flatsFromDb, setFlatsFromDb] = useState<Object[]>([]);
  const [favourites, setFavourites] = useState<Object[] | null>(null);
  const [isLanding, setIsLanding] = useState<boolean>(true);
  const [activeFlat, setActiveFlat] = useState<string>("");

  const getFlats = (): void => {
    const flatsCollection = collection(db, "flats");
    getDocs(flatsCollection).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFlatsFromDb(result);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        console.log(user);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
    getFlats();
  }, []);

  return (
    <BrowserRouter>
      <Navigation
        isAuth={isAuth}
        email={user?.email}
        flatsFromDb={flatsFromDb}
        setFlats={setFlats}
        setFavourites={setFavourites}
        flats={flats}
        isLanding={isLanding}
        setIsLanding={setIsLanding}
        favourites={favourites}
        setActiveFlat={setActiveFlat}
        activeFlat={activeFlat}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Slider
              setFlats={setFlats}
              flatsFromDb={flatsFromDb}
              setIsLanding={setIsLanding}
              setActiveFlat={setActiveFlat}
              activeFlat={activeFlat}
            />
          }
        />
        <Route
          path='/o-nas'
          element={<AboutUs setIsLanding={setIsLanding} />}
        />
        <Route
          path='/kontakt'
          element={<Contact setIsLanding={setIsLanding} />}
        />
        <Route
          path='/details/:id'
          element={<OfferDetails setIsLanding={setIsLanding} />}
        />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/statute' element={<Statute />} />

        <Route
          path='/search-results'
          element={
            <SearchResults
              flats={flats}
              setFlats={setFlats}
              flatsFromDb={flatsFromDb}
              setFavourites={setFavourites}
              favourites={favourites}
              setActiveFlat={setActiveFlat}
              activeFlat={activeFlat}
            />
          }
        />

        <Route
          path='auth'
          element={isAuth ? <Navigate to='/mypanel' /> : <Auth />}>
          <Route
            path='register'
            element={isAuth ? <Navigate to='/mypanel' /> : <Register />}
          />
          <Route
            path='login'
            element={
              isAuth ? (
                <Navigate to='/mypanel' />
              ) : (
                <Login setActiveFlat={setActiveFlat} />
              )
            }
          />
          <Route
            path='forgot-password'
            element={
              isAuth ? <Navigate to='/auth/login' /> : <ForgotPassword />
            }
          />
        </Route>

        <Route
          path='addoffer'
          element={
            !isAuth ? <Navigate to='/auth/login' /> : <AddOffer id={user.uid} />
          }
        />
        <Route
          path='editoffer/:id'
          element={
            !isAuth ? (
              <Navigate to='/auth/login' />
            ) : (
              <EditOffer userId={user.uid} />
            )
          }
        />
        <Route
          path='mypanel'
          element={
            !isAuth ? (
              <Navigate to='/auth/login' />
            ) : (
              <ClientPanel userId={user.uid} />
            )
          }
        />
        <Route
          path='messages'
          element={
            !isAuth ? (
              <Navigate to='/auth/login' />
            ) : (
              <Messages userId={user.uid} />
            )
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
