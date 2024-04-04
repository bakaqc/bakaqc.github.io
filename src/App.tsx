import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
