import axios from 'axios';
import { Character } from './character.api-model';

const url = '/api/results/';

export const getCharacter = async (id: number): Promise<Character> => {
  return axios.get(`${url}${id}`).then((res) => res.data)
}

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return axios.put(`${url}${character.id}`, character, { headers: { "Content-Type": "application/json" } })
    .then(res => res.data)

};
