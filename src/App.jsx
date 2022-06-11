import { SearchResults } from "./components/OffersList/SearchResults/SearchResults";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddOffer } from "./components/ClientPanel/AddOffer/AddOffer";
import { NavBarClientPanel } from "./components/ClientPanel/NavBarClientPanel/NavBarClientPanel";
import { Home } from "./Routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="newoffer" element={<AddOffer />}>
          {/* </Routes>/<Route path="newoffer/:flatsId" element={<AddOffer />} /> */}
          {/* <AddOffer /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
