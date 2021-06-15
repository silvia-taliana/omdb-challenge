import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import ResultList from "./components/ResultList";
import InfoBox from "./components/InfoBox";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <Nav />
      <ResultList />
      <InfoBox />
    </MovieProvider>
  );
}

export default App;
