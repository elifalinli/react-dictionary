import React from "react";
import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import ResultList from "./components/ResultList";

export const inputContext = createContext<any>(null);

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  const value: object = {
    inputValue,
    setInputValue,
  };

  return (
    <inputContext.Provider value={value}>
     <div>
      <Header/>
      <ResultList/>
    </div>
 
    </inputContext.Provider>
    );
}

export default App;
