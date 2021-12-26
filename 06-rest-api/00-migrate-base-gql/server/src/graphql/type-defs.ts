import { gql } from 'apollo-server-express';

export const typeDefs = gql`

  type CharacterList {
    id:Number!
    name: String!
    image: String!
  }
 
  type Query {
    characters: [CharacterList!]!
  }

  input Character {
    id:Number!
    name: String!
    image: String!
    status: String!
    species: String!
    gender: String!
    comment: String
  }

  type Query {
    character: [Character!]!
  }

  type Mutation {
    insertComment(character: Character!): Boolean
  }
`;
