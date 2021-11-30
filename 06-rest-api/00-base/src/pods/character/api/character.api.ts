import { useHistory } from 'react-router-dom';
import { Character } from './character.api-model';
import { mockCharacter } from './character.mock-data';


export const getCharacter = async (id: number): Promise<Character> => {
  const customCharacter = mockCharacter.find((c) => c.id === id);

  return customCharacter.comment ? customCharacter : { ...customCharacter, comment: '' }
}

// export const saveComment = async (id: number, fieldtext: string): Promise<void> => {
//   mockCharacter.find((c) => c.id === id).comment = fieldtext;
//   const history = useHistory();
//   history.push('')
// };
