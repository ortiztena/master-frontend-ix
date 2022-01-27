
import { mockCharacters } from './mock-data';
import { Character } from './models';

const characters = [...mockCharacters];


export const getCharacterList = async (): Promise<Character[]> => characters;

export const getCharacter = async (id: number): Promise<Character> =>
  characters.find((c) => c.id === id);

export const updateComment = async (idNumber: number, sentence: string) =>
  mockCharacters.find((c) => c.id === idNumber).comment = sentence;



