import { Character } from './character.api-model';
import { mockCharacter } from './character.mock-data';


export const getCharacter = async (id: number): Promise<Character> => {
  return mockCharacter.find((c) => c.id === id);
}

export const saveComment = async (id: number, fieldtext: string): Promise<void> => {
  mockCharacter.find((c) => c.id === id).comment = fieldtext
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
