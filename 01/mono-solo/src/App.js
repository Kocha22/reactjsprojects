import React from "react";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Item from "./components/Item";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Contact 
          img="./images/image 12.png"
          name="Mr.Whiskerson"
          phone="996709424336"
          email="mr.whikaz@gmail.com"
          />
         <Contact 
          img="./images/image 12.png"
          name="Mr.Whiskerson"
          phone="996709424336"
          email="mr.whikaz@gmail.com"
          />
          <Contact 
          img="./images/image 12.png"
          name="Mr.Whiskerson"
          phone="996709424336"
          email="mr.whikaz@gmail.com"
          />
          <Counter/>
          <Item />
          <Header/>
    </div>
  );
}

export default App;
