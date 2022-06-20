import "./App.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(Cookies.get("token"));
  }, []);

  function logout() {
    Cookies.remove("token");
  }

  return (
    <div className="App">
      <h1>App 1</h1>
      <h2>Token: {token}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
