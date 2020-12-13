import React, { useState, useEffect } from "react";
import "./App.css";

const emojiDict = {
  "🍇": " Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",

  "🥝": "Kiwi",
  "🍅": "Tomato",
};
var emojis = Object.keys(emojiDict);
const App = () => {
  const [meaning, setMeaning] = useState("");

  const changeHandler = (event) => {
    var mean = event.target.value;
    if (emojiDict[mean] === undefined) {
      setMeaning("Emoji doesnt exist 😞, search another fruit!");
      setTimeout(() => {
        setMeaning("");
      }, 3000);
    } else {
      setMeaning(emojiDict[mean]);
    }
    // setTimeout(() => {
    //   setMeaning("");
    // }, 5000);
  };

  const clickHandler = (item) => {
    setMeaning(emojiDict[item]);
  };

  return (
    <div>
      <h1>Frutoji</h1>
      <input
        placeholder="Find the name of the fruit"
        onChange={changeHandler}
        style={{ width: 15 + "rem" }}
      />
      <h3>{meaning}</h3>
      <h2>Frutojis we know</h2>
      {emojis.map((item) => {
        return (
          <span
            onClick={() => {
              clickHandler(item);
            }}
            key={item}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default App;
