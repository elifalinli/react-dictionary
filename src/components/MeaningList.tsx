import React from "react";
import { useState } from "react";
import WordTypeButtons from "./WordTypeButtons";
import { Definition } from "./WordTypeButtons";

const MeaningList = ({ payload }: any) => {
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState<string>("");

  const meaningsArr: any = payload.meanings;

  if (!payload || !meaningsArr) {
    return null;
  }
  const handleButtonClick = (partOfSpeech: string) => {
    setSelectedPartOfSpeech(partOfSpeech);
  };
  return (
    <div className="text-base/loose pl-5 pr-5 font-space">
      <WordTypeButtons
        meaningsArr={meaningsArr}
        handleButtonClick={handleButtonClick}
        selectedPartOfSpeech={selectedPartOfSpeech}
      />
      <section className="box-border pt-2">
        {meaningsArr.map((meaning: any) => {
          if (meaning.partOfSpeech === selectedPartOfSpeech) {
            return (
              <React.Fragment key={meaning.partOfSpeech}>
                {meaning.definitions.map((def: Definition) => (
                  <li className=" flex flex-col pb-2" key={def.definition}>
                    ∙ {def.definition}
                    <em className="text-sm mt-1 ml-4">
                      {" "}
                      {def.example ? def.example : ""}{" "}
                    </em>
                  </li>
                ))}

                <h4 className="divide-solid divide-black-200 font-bold">
                  SYNONYMS <span className="text-opacity-1t0"> {meaning.synonyms.length}</span>
                </h4>
                {meaning.synonyms.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {meaning.synonyms.map((synonym: string) => (
                      <li className="list-none" key={synonym}>
                        ∙ {synonym}
                      </li>
                    ))}
                  </div>
                ) : (
                  <span>No synonyms found..</span>
                )}

                <h4 className="divide-solid divide-black-200 font-bold">
                  ANTONYMS <span>{meaning.antonyms.length} </span>
                </h4>
                {meaning.antonyms.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"> {meaning.antonyms.map((antonym: string) => (
                      <li className="list-none" key={antonym}>
                      ∙ {antonym}
                    </li>
                  ))} 
                    </div>
                   
                ) : (
                  <span>No antonyms found..</span>
                )}
              </React.Fragment>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
};

export default MeaningList;
