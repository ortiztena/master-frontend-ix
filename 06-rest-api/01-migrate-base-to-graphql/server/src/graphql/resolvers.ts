import {
  getCharacter,
  getCharacterList,
  updateComment,
  Character,
  CharacterEdit
} from '../db';

interface SaveCommentArgs {
  character: CharacterEdit
}

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
    saveComment: async (parent, args: SaveCommentArgs): Promise<boolean> => {

      if (args.character.id) {
        await updateComment(args.character);
      } else {
        return false
      }
      return true;
    },
  },

}
