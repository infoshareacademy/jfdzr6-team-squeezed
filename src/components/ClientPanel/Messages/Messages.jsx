import {
  MessagesWrapper,
  StyledInboxContainer,
  AuthorContainer,
  MessageContainer,
  MessageTitle,
  TimeContainer,
  DateContainer,
  OpenMessageHeader,
  FullMessage,
} from "./Messages.styled";
import { useEffect, useState } from "react";
import {
  getDocs,
  getDoc,
  collection,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { Link } from "react-router-dom";

export const Messages = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [userFlats, setUserFlats] = useState([]);
  const [isMessageOpen, setIsMessageOpen] = useState(null);
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
  const getMessages = (q) => {
    return getDocs(q)
      .then((querySnapshot) => {
        const result = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return result;
      })
      .catch((err) => console.log(err));
  };

  const handleOpenMessage = (id) => {
    id === isMessageOpen ? setIsMessageOpen(null) : setIsMessageOpen(id);
    updateDoc(doc(db, "contacts", id), { isRead: true })
  };
  const header = true;
  const renderMessageList = messages.map((arr) =>
    arr.map(({ name, email, message, createAt, id, isRead }) => (
      <div key={id} style={{ borderRadius: "20px" }}>
        <MessageContainer onClick={() => handleOpenMessage(id)}>
          <div style={{ borderRadius: "20px" }}>
            <div
              className='przyciskrozwin'
              style={{ display: "flex", gap: "20px" }}>
              <DateContainer>{createAt.toDate().toDateString()} </DateContainer>
              <span className={isRead ? '' : 'message-title'}>
                {" "}
                {message?.slice(0, 50)} {message.length > 50 ? "(...)" : null}
              </span>
            </div>
            {isMessageOpen === id && (
              <FullMessage>
                <OpenMessageHeader classname='naglowekotwartejwaidomosci'>
                  <DateContainer>Od: {email} </DateContainer>
                </OpenMessageHeader>
                <div
                  className='pelna wiadomosc'
                  style={{ marginTop: "10px", paddingLeft: "3px" }}>
                  {message}
                  <br />
                  {name}
                </div>
              </FullMessage>
            )}
          </div>
        </MessageContainer>
      </div>
    ))
  );
  useEffect(() => {
    getUserFlats();
  }, [isMessageOpen]);

  useEffect(() => {
    const promises = userFlats.map((flatId) => {
      const q = query(messagesCollection, where("recipient", "==", flatId));
      return getMessages(q);
    });
    Promise.all(promises).then((data) => {
      setMessages(data);
      console.log(data);
    });
  }, [userFlats]);

  return (
    <>
      <MessagesWrapper>
        <MessageContainer header={header}>
          <h1 style={{ padding: "0 15px" }}>WIADOMO??CI</h1>
        </MessageContainer>
        <StyledInboxContainer>{renderMessageList}</StyledInboxContainer>
      </MessagesWrapper>
    </>
  );
};
