export interface CharacterVm {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  comment?: string;
}

// export const createEmptyComment = (character): CharacterVm => ({
//   ...character,
//   comment: '',
// });
