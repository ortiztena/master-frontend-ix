import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from 'pods/character-collection/api/character-collection.api-model';
import { gql } from 'graphql-request'


interface getCharacterResponse {
  character: CharacterEntityApi
}


interface SaveCharacterResponse {
  saveComment: boolean
}

interface CharacterInput {
  id: number
  name: string
  image: string
  status: string
  species: string
  gender: string
  type: string
  comment?: string
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
            type
            comment
        }
    }
`;

  const { character } = await graphQLClient.request<getCharacterResponse>(query)
  return character;
};

export const saveCharacter = async (character: CharacterInput): Promise<boolean> => {
  console.log(character)
  const mutation = gql`
    mutation ($character: CharacterInput!) {
        saveComment(character: $character)
        }
    }
`
  const { saveComment } = await graphQLClient.request<SaveCharacterResponse>(mutation, { character });
  return saveComment;
}
