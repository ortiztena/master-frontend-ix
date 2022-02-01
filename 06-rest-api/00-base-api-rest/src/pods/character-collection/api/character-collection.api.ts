import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const characterCollection = '/api/results';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
    return axios.get(characterCollection).then(res => res.data);
};


