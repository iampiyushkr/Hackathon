import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import axios from "axios"

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid grey;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
  border-bottom: none;
`;

const TextArea = styled.textarea`
  width: 78%;
  height: 30px;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 17px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid grey;
  outline: none;
  color: #555555;
  letter-spacing: 1px;
  line-height: 20px;
  border-top-right-radius:0;
  border-bottom-right-radius:0;
  ::placeholder {
    color: grey;
  }
`;

const Button = styled.button`
  background-color: #00bcc6;
  width: 23%;
  border: none;
  height: 51px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  border-top-left-radius:0;
  border-bottom-left-radius:0;

`;

const Form = styled.form`
  width: 410px;
  display: flex;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #00bcc6;
  color: white;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: #292929;
  border: 1px solid #292929;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

const Socket = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:8000");

    socketRef.current.on("your id", (id) => {
      setYourID(id);
    });

    socketRef.current.on("message", (message) => {
      console.log("Message received");
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    axios.get("http://localhost:2367/chats").then((res) => {
      console.log(typeof res.data.data, res.data.data)
      let array = []
      res.data.data.forEach((e) => {
        array.push(e.body)
      })
      console.log("array", array)
    })
    setMessages((oldMsgs) => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    axios.post("http://localhost:2367/chats", messageObject)
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <Page>
      <Container>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow key={index}>
                <MyMessage>
                  {message.body}
                </MyMessage>
              </MyRow>
            );
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>{message.body}</PartnerMessage>

            </PartnerRow>
          );
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea
          value={message}
          onChange={handleChange}
          placeholder="Start Chatting......"
        >
        </TextArea>
          <Button>Send</Button>
      </Form>
    </Page>
  );
};

export default Socket;
