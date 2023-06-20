import React from 'react'
import { inputContext } from '../App'
import { useState, useEffect, useContext } from 'react'
import MeaningList from './MeaningList'


import { fetchWordDefinitions } from './api'


const ResultList = () => {
    const { inputValue } = useContext(inputContext)
    const [response, setResponse] = useState<any>(null)
    const [loading, setIsLoading] = useState<boolean>(false)
    
    useEffect(() => {
        setIsLoading(true);
        fetchWordDefinitions(`${inputValue}`).then((definitions) => {
            setResponse(definitions);
            setIsLoading(false)
        }).catch((error) => {
            console.error('Error fetching word definitions:', error);
            setIsLoading(false);
          });
    }, [inputValue])

    if (loading) {
        return <p>Is Loading ....</p>;
      }

    if(!response) {
      return <p>"No definitions found!" </p>
    }
    

  return (
    <div className='container mx-auto p-4 max-w-2xl'>

    <h2 className='text-3xl font-bold mt-4 pb-2 font-space'>{inputValue.slice(0,1).toUpperCase() + inputValue.slice(1)} </h2>
    <p className='text-blue-600 pb-2 text-base'>{response.phonetic}</p>
    <MeaningList payload = {response}/>
</div>
  )
}

export default ResultList
