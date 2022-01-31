
import { mockCharacters } from './mock-data';
import { Character } from './models';

const characters = [...mockCharacters];


interface CharacterInput {
  id: number
  name: string
  image: string
  status: string
  species: string
  gender: string
  type: string
  comment?: string
}


export const getCharacterList = async (): Promise<Character[]> => characters;

export const getCharacter = async (id: number): Promise<Character> =>
  characters.find((c) => c.id === id);

export const updateComment = async (character: CharacterInput): Promise<boolean> => {
  // console.log(character.comment)
  mockCharacters.find((c) => c.id == character.id).comment = character.comment;

  return true

}
