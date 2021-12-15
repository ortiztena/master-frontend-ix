import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterVm, createEmptyCharacterVm } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

interface idParams {
  id: string;
}

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacterVm()
  );

  const { id } = useParams<idParams>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(Number(id));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character} />;
};
