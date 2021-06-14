import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import ResultList from "./components/ResultList";
import InfoBox from "./components/InfoBox";

function App() {
  return (
    <div>
      <Nav />
      <ResultList />
      <InfoBox />
    </div>
  );
}

export default App;
