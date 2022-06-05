import { db } from "../../../utils/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import "./SearchResult.css";

export const SearchResults = (props) => {
  const currentLoginUserId = "bJNNHzx9bmIilhl0jEIJ";
  const [flats, setFlats] = useState([]);
  const flatsRef = collection(db, "flats");

  useEffect(() => {
    const getFlats = async () => {
      const userDoc = doc(db, "users", currentLoginUserId);
      const q = query(flatsRef, where("userId", "==", userDoc));
      const data = await getDocs(q);
      console.log(data.docs);
      const u = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFlats(u);
    };
    getFlats();
  }, []);

  console.log(db);
  return (
    <div>
      {flats.map((flat) => {
        return (
          <div className="flatbox">
            <div className="flatimg">
            
              <img
                src={
                  flat.photos && flat.photos.length > 0 ? flat.photos[0] : ""
                }
              />
            </div>
            <div>
            
              <h2>title: {flat.title}</h2>
            </div>
            <div className="basicinf">
              <p>city: {flat.city}</p>
              <p>street: {flat.street}</p>
              <p>rooms: {flat.rooms}</p>
              <p>size: {flat.size} m2</p>
              <p>price: {flat.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
