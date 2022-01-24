import axios from 'axios';
import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from 'pods/character-collection/api/character-collection.api-model';
import { gql } from 'graphql-request'
// const url = '/api/results/';

// export const getCharacter = async (id: number): Promise<Character> => {
//   return axios.get(`${url}${id}`).then((res) => res.data)
// }

interface getCharacterResponse {
  character: CharacterEntityApi
}

interface CharacterInputResponse {
  id: number;
  name: string
  image: string
  status: string
  species: string
  gender: string
  comment: string
}

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const query = gql`
    query {
        character(id: ${id}){
            id
            name
            image
            status
            species
            gender
            comment
        }
    }
`;

  const { character } = await graphQLClient.request<getCharacterResponse>(query)
  return character;
};

export const saveCharacter = async (character: CharacterInputResponse): Promise<boolean> => {

  const mutation = gql`
    mutation {
        saveCharacter(character : ${character}) :Boolean 
    },
`
  return true
}
