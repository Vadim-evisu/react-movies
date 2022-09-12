import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Child from "./components/Child";
import Preloader from "./components/Preloader";
import AppClass from "./components/AppClass";

// Native Without JSx Examples
const MyHeading = React.createElement(
  "h1",
  { className: "class1" },
  "Created by React heading"
);

const Book = React.createElement("div", {}, [
  React.createElement("h2", { key: 1 }, "Js for beginners"),
  React.createElement("p", { key: 2 }, 2020),
  React.createElement("p", { key: 3 }, "100$"),
]);

const Item = (props) => {
  return React.createElement("div", {}, props.name);
};

// Native Without JSx Examples

const MyBook = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      {/* <p>{props.year}</p> */}
      <div>{props.children}</div>
    </div>
  );
};



function App() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 1000)
  useEffect(() => {
    console.log("useEffect App")
  }, [])
  return (
    isLoading ? <Preloader/> :
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {MyHeading}
        {Book}
        {React.createElement(Item, { name: "First Item Props" })}
        <hr />
        <MyBook name="Java" year="2022" >
          <p>Chilren</p>
          <p>Chilren</p>
        </MyBook>
        <Child name="Petro"/>
        <Child/>
      </header>
      <main>
        <AppClass/>
      </main>
    </div>
  );
}

export default App;
