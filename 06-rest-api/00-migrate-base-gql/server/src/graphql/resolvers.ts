import {
  getCharacter,
  getCharacterList,
  updateComment,
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
    saveComment: async (_, args): Promise<boolean> => {

      if (args.character) {
        await updateComment(args.character.id, args.character.comment);
      }
      return true;
    },
  },

};
