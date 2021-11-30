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
});

// NO HACE FALTA "CREO" //  SE USA PARA CREAR PERSONA Y SUBIR API
// pero quiza para almacenar comentario

// export const mapCharacterByIdToVM = (data: apiModel.Character): viewModel.CharacterVm => {
//   return mapCharacterFromVmToApi(data);
// };

// export const mapCharacterFromVmToApi = (character: viewModel.CharacterVm): apiModel.Character =>
// (({
//   ...character,
//   comment: character.comment
// } as unknown) as apiModel.Character);
