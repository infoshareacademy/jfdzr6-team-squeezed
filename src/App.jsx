// import { useState } from 'react'
import {AddOffer} from "./components/ClientPanel/AddOffer/AddOffer";
import {ClientMainPage} from "./components/ClientPanel/ClientMainPage/ClientMainPage";

function App() {

  return (
  //   <BrowserRouter>
  //      <Routes>
  //       <Route path="newoffer" element={<AddOffer />} />
  //       {/* <Route path="newoffer/:flatsId" element={<AddOffer />} /> */}
  //         </Routes>
  // </BrowserRouter>
    
    <div>
      <ClientMainPage/>
      <AddOffer/>
     
    </div>
  )
}

export default App
