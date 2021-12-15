import { Character } from './character.api-model';
import { mockCharacter } from './character.mock-data';


export const getCharacter = async (id: number): Promise<Character> => {
  return mockCharacter.find((c) => c.id === id);
}

// export const saveComment = async (character: Character): Promise<void> => {
//   mockCharacter.find((c) => c.id === character.id).comment = character.comment;

// };

export const saveCharacter = async (character: Character): Promise<boolean> => {
  mockCharacter.find((c) => c.id === character.id).comment = character.comment;
  return true;
};
