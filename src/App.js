import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import Cookies from "js-cookie";

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
      <button onClick={() => console.log(Cookies.get("session"))}>
        Session
      </button>
    </div>
  );
}

export default App;
