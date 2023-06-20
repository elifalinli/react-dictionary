import React from "react";
import { inputContext } from "../App";
import { useState, useEffect, useContext } from "react";
import MeaningList from "./MeaningList";
import { fetchWordDefinitions } from "./api";
const sound = require("../assets/sound.png");

const ResultList = () => {
  const { inputValue } = useContext(inputContext);
  const [response, setResponse] = useState<any>(null);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setResponse(null);
    if (inputValue.trim() === "") {
      setIsLoading(false);
      return;
    }

    fetchWordDefinitions(`${inputValue}`)
      .then((definitions) => {
        setResponse(definitions);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching word definitions:", error);
        setIsLoading(false);
      });
  }, [inputValue]);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    const audioElement = new Audio(response.phonetics[0].audio);
    audioElement.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    if(!response.phonetics[0].audio) {
      return null
    }
    audioElement.play();
   
  };

  if (loading) {
    return <p>Is Loading ....</p>;
  }

  if (!response) {
    if (inputValue.trim() === "") {
      return null;
    }
    return <p className="flex justify-center pt-10">No definitions found! </p>;
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-3xl font-bold mt-4 pb-2 font-space text-slate-700">
        {inputValue.slice(0, 1).toUpperCase() + inputValue.slice(1)}{" "}
      </h2>
      <div className="flex items-center">
        <p className="text-purple-600 pb-2 text-base mr-2">{response.phonetic}</p>
        { response.phonetics[0].audio ? <button className="sound-icon pl-3 pb-2 " onClick={handlePlayAudio}>
          <img className="w-6 h-6" src={sound} alt="Sound icon" />{" "}
        </button> : null}
      </div>
      <MeaningList payload={response} />
    </div>
  );
};

export default ResultList;
