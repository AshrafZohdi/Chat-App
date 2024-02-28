import "./App.css";
import { connect, sendMsg } from "./api";

function App() {
  connect();
  const send = () => {
    console.log("hello");
    sendMsg("hello");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={send}>Hit</button>
      </header>
    </div>
  );
}

export default App;
