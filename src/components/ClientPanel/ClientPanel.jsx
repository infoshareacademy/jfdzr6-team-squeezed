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

export const ClientPanel = (props) => {
  const [flatsFromDb, setFlatsFromDb] = useState([]);
  const getFlats = () => {
    const flatsCollection = collection(db, "flats");
    const currentLoginUserId = props.userId;

    const userDoc = doc(db, "users", currentLoginUserId);
    const q = query(flatsCollection, where("userId", "==", userDoc));
    getDocs(q).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(result);
      setFlatsFromDb(result);
    });
  };

  useEffect(() => {
    console.log(props.userId);

    getFlats();
  }, []);

  return (
    <div>
      <SearchResultsList flats={flatsFromDb} userId={props.userId} />
    </div>
  );
};
