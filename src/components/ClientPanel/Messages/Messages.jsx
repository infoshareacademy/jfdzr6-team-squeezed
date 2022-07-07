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
        return result;
      })
      .catch((err) => console.log(err));
  };

  const handleOpenMessage = (message) => {
    message === isMessageOpen ? setIsMessageOpen(null) : setIsMessageOpen(message);
  };
  const header = true;
  const renderMessageList = messages.map((arr) =>
    arr.map(
      ({ name, email, message, createAt }) => (
        <div key={message} style={{ borderRadius: "20px" }}>
          <MessageContainer onClick={() => handleOpenMessage(message)}>
            <div style={{ borderRadius: "20px" }}>
              <div
                className='przyciskrozwin'
                style={{display: 'flex', gap: '20px'}}>
                <DateContainer>
                  {createAt.toDate().toDateString()}{" "}
                </DateContainer>
                <span className="message-title"> {message?.slice(0, 50)} {message.length > 50 ? "(...)" : null}</span>
              </div>
              {isMessageOpen === message && (
                <FullMessage>
                  <OpenMessageHeader classname='naglowekotwartejwaidomosci'>
                    <DateContainer>Od: {email} </DateContainer>
                  </OpenMessageHeader>
                  <div className='pelna wiadomosc' style={{marginTop: '10px', paddingLeft: '3px'}}>{message}<br/>{name}</div>
                </FullMessage>
              )}
            </div>
          </MessageContainer>
        </div>
      )

      // <MessageContainer key={i}>
      //   <TimeContainer>{createAt.toDate().toDateString()}</TimeContainer>

      //   <AuthorContainer>
      //     <h5>{name}</h5>
      //   </AuthorContainer>
      //   <Link className='message-header' to='/'>
      //     <MessageTitle>
      //       <h5>{message?.slice(0, 80)} (...)</h5>
      //     </MessageTitle>
      //   </Link>
      // </MessageContainer>
    )
  );
  useEffect(() => {
    getUserFlats();
  }, []);

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
          <h1 style={{ padding: "0 15px" }}>WIADOMOŚCI</h1>
        </MessageContainer>

        <StyledInboxContainer>
          {/* <MessageContainer header={header}>
            <TimeContainer>
              <p>Godzina</p>
            </TimeContainer>
            <AuthorContainer>
              <h5>Nadawca</h5>
            </AuthorContainer>
            <MessageTitle>
              <h5>Wiadomość</h5>
            </MessageTitle>
          </MessageContainer> */}
          {renderMessageList}
        </StyledInboxContainer>
      </MessagesWrapper>
    </>
  );
};
