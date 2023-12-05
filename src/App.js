import { React, useState, useRef } from "react";
import "./App.css";
import Auth from "./components/Authentication";
import Chat from "./components/Chat";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuthenticated, setAuth] = useState(cookies.get("authentication-token"));
  const [server, setServer] = useState(null);

  const serverInputRef = useRef(null);

  if (!isAuthenticated) {
    return (
      <>
        <Auth setAuth={setAuth} />
      </>
    );
  }

  return (
    <div>
      {server ? (
        <Chat server={server}/>
      ) : (
        <div className="room">
          <label>Enter Server Name</label>
          <input ref={serverInputRef} />
          <button onClick={() => setServer(serverInputRef.current.value)}>
            Enter
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
