import { gql } from 'apollo-server-express';

export const typeDefs = gql`

  input CharacterList {
    id:ID!
    name: String!
    image: String!
  }

  input Character {
  id: ID!
  name: String!
  image: String!
  status: String!
  species: String!
  gender: String!
  comment: String
}


  type Query {
    characters: [CharacterList!]!
    character(id:ID!): Character!
  }

  type Mutation {
    saveCharacter : (character: Character!)  : Boolean
  }

`;






// type Mutation {
//   saveComment(character: CharacterInput): Boolean
// }