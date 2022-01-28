
import { mockCharacters } from './mock-data';
import { Character } from './models';

const characters = [...mockCharacters];


interface CharacterInput {
  id: number
  comment?: string
}


export const getCharacterList = async (): Promise<Character[]> => characters;

export const getCharacter = async (id: number): Promise<Character> =>
  characters.find((c) => c.id === id);

export const updateComment = async (character): Promise<CharacterInput> =>

  mockCharacters.find((c) => c.id === character.id).comment = character.comment;



