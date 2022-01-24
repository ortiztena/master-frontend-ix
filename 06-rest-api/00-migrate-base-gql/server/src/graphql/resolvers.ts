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
    character: async (_, args): Promise<Character> => {
      const characterSingle = await getCharacter(parseInt(args.id));
      return characterSingle;
    }

  },

  Mutation: {
    saveComment: async (parent, args): Promise<boolean> => {
      if (args.character.id) {
        await insertComment(args.character);
      }
      return true;
    },
  },
};
