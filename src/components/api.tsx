import axios from 'axios'

const dictionaryAPI = axios.create({
    baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'
})

export const fetchWordDefinitions = (word: string) => {
    return dictionaryAPI.get(`/${word}`).then(({data}) => {
        return data[0]
    }).catch(error => {
        console.error('Error fetching word definitions:', error);
        throw error;
    });
}