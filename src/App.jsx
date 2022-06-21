import { SearchBar } from "./components/SearchOffers/SearchBar/SearchBar"
import { SearchResults } from "./components/OffersList/SearchResults/SearchResults";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddOffer } from "./components/ClientPanel/AddOffer/AddOffer";
import { NavBarClientPanel } from "./components/ClientPanel/NavBarClientPanel/NavBarClientPanel";
import { Home } from "./Routes/Home";
import { NewOffer } from "./Routes/NewOffer";
import { OfferDetails } from "./components/OffersList/OfferDetails/OfferDetails"
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
  return (
    <BrowserRouter>
      <NavBarClientPanel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<OfferDetails />} />
        <Route path="newoffer" element={<NewOffer />}>
          {/* </Routes>/<Route path="newoffer/:flatsId" element={<AddOffer />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
