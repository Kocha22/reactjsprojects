import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Square from "./components/Square";
import Form from "./components/Form";
import Starwar from "./components/Starwar";
import Meme2 from "./components/Meme2";
import Tracker from "./components/Tracker";

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
      <Contact/>
      <Counter/>
      <Square darkMode={false}/>
      <Form/>
      <Starwar/>
      <Meme2/>
      <Tracker/>
    </div>
  );
}

export default App;
