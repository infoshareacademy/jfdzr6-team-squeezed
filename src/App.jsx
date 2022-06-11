import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { AddOffer } from "./components/ClientPanel/AddOffer/AddOffer";
import { NavBarClientPanel } from "./components/ClientPanel/NavBarClientPanel/NavBarClientPanel";

function App() {

  return (
    <BrowserRouter>
      <NavBarClientPanel />
      <Routes>
        <Route path="newoffer" element={<AddOffer />}>
          {/* </Routes>/<Route path="newoffer/:flatsId" element={<AddOffer />} /> */}
          {/* <AddOffer /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App
