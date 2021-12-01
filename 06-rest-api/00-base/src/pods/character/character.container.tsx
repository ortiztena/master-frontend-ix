import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { CharacterVm } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';
import { Character } from './api';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterVm>(null);

  const { id } = useParams();

  const handleLoadCharacter = async (id: number) => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    handleLoadCharacter(id);
  });

  //   const handleSave = async (character: CharacterVm) => {
  //     const apiCharacter = mapCharacterFromVmToApi(character);
  //     const success = await api.saveHotel(apiCharacter);
  //     if (success) {
  //       history.goBack();
  //     } else {
  //       alert('Error on save hotel');
  //     }
  //   };

  return <CharacterComponent character={character} />;
};
// onSave={onSave}
