import {
  getCharacter,
  getCharacterList,
  insertComment,
  Character,
} from '../db';



export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const charactersList = await getCharacterList();
      return charactersList;
    },
    // character: async (id: number): Promise<Character> => {
    //   const characterSingle = await getCharacter(id);
    //   return characterSingle;
    // },
  },

  // Mutation: {
  //   saveComment: async (id: number, sentence: string): Promise<boolean> => {
  //     if (id) {
  //       await insertComment(id, sentence);
  //     } else {
  //       await getCharacter(id);
  //     }
  //     return true;
  //   },
  // },
};
