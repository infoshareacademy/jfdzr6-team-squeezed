import React, { useEffect, useState } from "react";

import { SearchResultsList } from "../OffersList/SearchResults/SearchResultsList";

import { db } from "../../utils/firebase";

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

export const ClientPanel = ({userId, favourites, activeFlat}) => {
  const [flatsFromDb, setFlatsFromDb] = useState([]);
  const getFlats = () => {
    const flatsCollection = collection(db, "flats");
    const currentLoginUserId = userId;

    const userDoc = doc(db, "users", currentLoginUserId);
    const q = query(flatsCollection, where("userId", "==", userDoc));
    getDocs(q).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFlatsFromDb(result);
    });
  };

  useEffect(() => {

    getFlats();
  }, []);

  return (
    <div>
      <SearchResultsList flats={flatsFromDb} userId={userId} favourites={favourites} activeFlat={activeFlat} />
    </div>
  );
};
