import {
  getCharacter,
  getCharacterList,
  insertComment,
  Character,
} from '../db';



export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharacterList();
      return characters;
    },
    character: async (id: number): Promise<Character> => {
      const character = await getCharacter(id);
      return character;
    },
  },

  Mutation: {
    saveComment: async (id: number, sentence: string): Promise<boolean> => {
      if (id) {
        await insertComment(id, sentence);
      }
      return true;
    },
  },
};
