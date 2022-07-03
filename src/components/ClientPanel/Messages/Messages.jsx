import {
  MessagesWrapper,
  StyledInboxContainer,
  AuthorContainer,
  MessageContainer,
  MessageTitle,
  TimeContainer,
} from "./Messages.styled";
import { useEffect, useState } from "react";
import {
  getDocs,
  getDoc,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { Link } from "react-router-dom";

export const Messages = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [userFlats, setUserFlats] = useState([]);
  const messagesCollection = collection(db, `contacts`);
  const userFlatsDoc = doc(db, "users", userId);

  const getUserFlats = () => {
    getDoc(userFlatsDoc)
      .then((querySnapshot) => {
        return {
          id: querySnapshot.id,
          ...querySnapshot.data(),
        };
      })
      .then((result) => setUserFlats(result.flats))
      .catch((err) => console.log(err));
  };

  //   let flatsQueries = userFlats.map(flat => where("flatId", "==", flat))
  //   let q = query(
  //       messagesCollection,
  //       where("flatId", "==", "Df1XDvcqO6mlPKhQFOUp"),
  //   )
  //   const allQueries = userFlats.map((flat) =>
  //     query(messagesCollection, where("userId", "==", flat))
  //   );

  // let q = query(messagesCollection, where("flatId", "==", flatId))
  const getMessages = (q) => {
    return getDocs(q)
      .then((querySnapshot) => {
        const result = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('result', result)
        return result;
      })
      .catch((err) => console.log(err));
  };
  console.log(userFlats);
  // console.log(flatsQueries)

  //   const querieAllFlatsMessages = () => {
  //     allQueries.forEach((q) => getMessages(q));
  //   };
  console.log(messages);

  const header = true;
  const renderMessageList = messages.map((arr) => ( arr.map(({name, message, createAt}) =>
    <MessageContainer>
      <TimeContainer>{createAt.toDate().toDateString()}</TimeContainer>

      <AuthorContainer>
        <h5>{name}</h5>
      </AuthorContainer>
      <Link className='message-header' to='/'>
        <MessageTitle>
          <h5>{message?.slice(0, 60)} (...)</h5>
        </MessageTitle>
      </Link>
    </MessageContainer>
  )));
  useEffect(() => {
    getUserFlats();
  
  }, []);


  useEffect(() => {
    const promises = userFlats.map(id=>id.slice(1)).map((flatId) => {
      const q = query(messagesCollection, where("flatId", "==", flatId));
      return getMessages(q);
    });
    Promise.all(promises).then(data => {
        setMessages(data)
    })
  }, [userFlats])

  return (
    <>
      <MessagesWrapper>
        <h1>wiadomości</h1>
        <StyledInboxContainer>
          <MessageContainer header={header}>
            <TimeContainer>
              <p>Godzina</p>
            </TimeContainer>
            <AuthorContainer>
              <h5>Nadawca</h5>
            </AuthorContainer>
            <MessageTitle>
              <h5>Wiadomość</h5>
            </MessageTitle>
          </MessageContainer>
        </StyledInboxContainer>
        <StyledInboxContainer>{renderMessageList}</StyledInboxContainer>
      </MessagesWrapper>
    </>
  );
};
