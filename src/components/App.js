import React, {useState, useEffect} from "react";
import Emoji from "./Emoji";
import emojis from "../emojis.js";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <script type="text/javascript" src="emojis.js"></script>
      <h1 className="heading">How are you feeling today?</h1>
      {emojis.map(emoji => (
          <Emoji 
            emoji={emoji.emoji}
            label={emoji.label}
          />
        ))}
      <h3>{message}</h3>
    </div>
  );
}

export default App;
