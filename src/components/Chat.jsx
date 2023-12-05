import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, database } from "../firebase-config";

function Chat(params) {
  const { server } = params;
  const [newMsg, setNewMsg] = useState("");

  const msgDb = collection(database, "messages");

  const Submit = async (e) => {
    e.preventDefault();
    if (newMsg === "") return;

    await addDoc(msgDb, {
      text: newMsg,
      time: serverTimestamp(),
      user: auth.currentUser.displayName,
      server,
    });

    setNewMsg("");
  };

  return (
    <div className="chat_app">
      <form onSubmit={Submit} className="message__form">
        <input
          classname="message__input"
          placeholder="Type message"
          onChange={(e) => setNewMsg(e.target.value)}
          value={newMsg}
        />
        <button type="submit" className="message__button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
