import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterVm => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  comment: character.comment,
})

export const mapCharacterFromVmToApi = (
  character: viewModel.CharacterVm, comment: string):
  apiModel.Character => (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    image: character.image,
    comment: comment,
  } as unknown) as apiModel.Character);
