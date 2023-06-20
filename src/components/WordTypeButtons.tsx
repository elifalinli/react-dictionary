import React from "react";

  export interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example: string;
  }

  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
    
  }
  interface Props {
    meaningsArr: any;
    handleButtonClick: any;
    selectedPartOfSpeech: string;
  }

  // interface Word {
  //   meanings: Meaning[];
  // }

const WordTypeButtons: React.FC<Props> = ({ meaningsArr, handleButtonClick, selectedPartOfSpeech }) => {


  if (!meaningsArr) {
    return <div>No data available.</div>;
  }

  
  return (
    <div className="flex-space-x-0.5">
      { meaningsArr.map((meaningObj: any) => (
        <button
          key={meaningObj.partOfSpeech}
          onClick={() => handleButtonClick(meaningObj.partOfSpeech)}
          className={`p-2 border-2 border-purple-600 rounded-lr ${
            selectedPartOfSpeech === meaningObj.partOfSpeech
              ? "bg-purple-500 text-white"
              : "bg-white"
          }`}
        >
          {meaningObj.partOfSpeech}
        </button>
      ))}
    </div>
  );
};

export default WordTypeButtons;
