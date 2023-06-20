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
      
      <section className="pt-2">
        {meaningsArr.map((meaning: any) => {
          if (meaning.partOfSpeech === selectedPartOfSpeech) {
            return (
              
              <React.Fragment key={meaning.partOfSpeech}>
                <h4 className="divide-solid text-yellow-600 font-bold">
                  DEFINITIONS <span className="text-sm text-purple-300"> {meaning.definitions.length}</span>
                </h4>
                {meaning.definitions.map((def: Definition, index: number) => (
                  <li className=" flex flex-col pb-1 text-slate-700" key={def.definition}>
                   {index+1}.  {def.definition}
                    <em className="text-sm mt-1 ml-4 text-charcoal-700">
                      {def.example ? def.example : ""}
                    </em>
                  </li>
                ))}

                <h4 className="divide-solid text-yellow-600 font-bold">
                  SYNONYMS <span className="text-sm text-purple-300"> {meaning.synonyms.length}</span>
                </h4>
                {meaning.synonyms.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {meaning.synonyms.map((synonym: string) => (
                      <li className="list-none text-slate-700" key={synonym}>
                        ∙ {synonym}
                      </li>
                    ))}
                  </div>
                ) : (
                  <span className="text-slate-700">No synonyms found..</span>
                )}

                <h4 className="divide-solid text-yellow-600 font-bold">
                  ANTONYMS <span className="text-sm text-purple-300">{meaning.antonyms.length} </span>
                </h4>
                {meaning.antonyms.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"> {meaning.antonyms.map((antonym: string) => (
                      <li className="list-none text-slate-700" key={antonym}>
                      ∙ {antonym}
                    </li>
                  ))} 
                    </div>
                   
                ) : (
                  <span className="text-slate-700">No antonyms found..</span>
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
