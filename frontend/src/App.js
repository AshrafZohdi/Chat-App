import React, { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header";

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msgEvent) => {
      const msg = msgEvent.data;
      console.log("New Message:", msg);
      setChatHistory((prevChatHistory) => [...prevChatHistory, msg]);
    });
  }, []);

  const send = () => {
    console.log("hello");
    sendMsg("hello");
  };

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <button onClick={send}>Hit</button>

        {/* Display chat history */}
        <div>
          <h2>Chat History</h2>
          <ul>
            {chatHistory.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
