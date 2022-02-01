import { CharacterEntityApi } from './character-collection.api-model';
import { gql } from 'graphql-request'
import { graphQLClient } from 'core/api';

// const characterCollection = '/api/results';

interface getCharacterCollectionResponse {
    characters: CharacterEntityApi[]
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
    const query = gql`
    query {
        characters {
            id
            name
            image
        }
    }
`;

    const { characters } = await graphQLClient.request<getCharacterCollectionResponse>(query)
    return characters;
};


