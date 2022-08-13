import React from "react";
import emojipedia from "../emojipedia"
import Card from "./card"
function createEmojipedia(emoji){
  return(<Card
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
 /> )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmojipedia)}

    </div>
  );
}

export default App;
