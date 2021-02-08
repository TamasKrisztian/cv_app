import "./App.css";
import { useState } from "react";

import ResetBtn from "./components/Resetbtn";
import TextInput from "./components/Textinput";
import ShowText from "./components/Showtext";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <ResetBtn onClick={(event) => setText("")} />

      <div className="container">
        <TextInput
          value={text}
          onInput={(event) => setText(event.target.value)}
        />

        <ShowText>{text}</ShowText>
      </div>
    </div>
  );
}

export default App;
