import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { inputContext } from "../App";

const Header = () => {
  const [value, setValue] = useState("");
  const {inputValue, setInputValue} = useContext(inputContext)

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };
  const handleInputKeyDown = (e: any) => {
    if(e.key ==="Enter") {
        setInputValue(value)
        setValue("")

    }
  }
  return (
    <div className="bg-yellow-600  font-space ">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Lingual Lookup
        </h1>
        <p className="text-center mt-1 mb-10 text-slate-300 text-lg">
          Find the definitions for words
        </p>

        <div className="flex items-center justify-center mt-5">
          <div className="flex border-2 border-gray-300 rounded">
            <input
              className="px-4 py2 md:w-80"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown}
            />

            <button
              className="bg-purple-500 border-l px-4 py-2 text-white"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
        {inputValue && (
            <h3 className="text-gray-50 text-center mt-4">
            Result for: <span className="text-white font-bold">{inputValue}</span>{" "}
          </h3>
        )}

        
      </div>
    </div>
  );
};

export default Header;
