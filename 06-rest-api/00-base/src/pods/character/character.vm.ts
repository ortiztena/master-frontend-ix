export interface CharacterVm {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  // comment?: string;
}

export const createEmptyCharacterVm = (): CharacterVm => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  // comment: '',
});
