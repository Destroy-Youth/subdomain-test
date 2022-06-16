import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

const domains = ["http://localhost:3000", "http://localhost:3001"];

function messageHandler(event) {
  if (!domains.includes(event.origin)) return;
  const { action, key, value } = event.data;
  if (action == "get") {
    event.source.postMessage(
      {
        action: "returnData",
        key,
        value: localStorage.getItem("session"),
      },
      "*"
    );
  }
}

function App() {
  useEffect(() => {
    window.addEventListener("message", messageHandler, false);
    localStorage.setItem("session", "session123");
  }, []);

  return (
    <div className="App">
      <header className="iframe1 host">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
