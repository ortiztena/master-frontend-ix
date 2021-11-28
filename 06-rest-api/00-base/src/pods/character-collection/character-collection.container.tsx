import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
// import { CharacterCollectionComponent } from './character-collection.component';

export const HotelCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

//   const handleCreateCharacter = () => {
//     history.push(linkRoutes.createCharacter);
//   };

//   const handleEdit = (id: number) => {
//     history.push(linkRoutes.editHotel(id));
//   };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  return (
    // <CharacterCollectionComponent/>}
    //   onCreateHotel={handleCreateHotel}
    // //   onEdit={handleEdit}
    //   onDelete={handleDelete}
    // />
  );
};
