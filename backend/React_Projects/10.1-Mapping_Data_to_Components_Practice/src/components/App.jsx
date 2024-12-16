import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emojiCard(emojipedia) {
  return <Entry 
  emoji={emojipedia.emoji}
  emojiName={emojipedia.name}
  emojiDetail={emojipedia.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiCard)}
      </dl>
    </div>
  );
}

export default App;
