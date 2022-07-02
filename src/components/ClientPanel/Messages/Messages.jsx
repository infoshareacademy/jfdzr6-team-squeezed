import {
  MessagesWrapper,
  StyledInboxContainer,
  AuthorContainer,
  MessageContainer,
  MessageTitle,
  TimeContainer,
} from "./Messages.styled";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../utils/firebase";
const messagesCollection = collection(db, "contacts");
export const Messages = (userId) => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    getDocs(messagesCollection).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(result);
    });
  };
  console.log(messages);
  // getDocs(messagesCollection)
  // .then((querySnapshot) => {
  //   return querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  // })
  // .then((data) => {
  //     console.log(data);
  //   return data;
  // })
  // .catch((err) => console.log(err));

  const renderMessageList = messages.map(({ name, message }) => (
    <MessageContainer>
        <TimeContainer>
            11:11:11
        </TimeContainer>
      <AuthorContainer>
       <h5>{name}</h5>
      </AuthorContainer>
      <MessageTitle>
        <h5>{message.slice(0, 60)} (...)</h5>
      </MessageTitle>
    </MessageContainer>
  ));
  useEffect(() => {
    getMessages();
  }, []);
  return (
    <>
      <MessagesWrapper>
        <h1>wiadomości</h1>
        <StyledInboxContainer>{renderMessageList}</StyledInboxContainer>
      </MessagesWrapper>
    </>
  );
};
