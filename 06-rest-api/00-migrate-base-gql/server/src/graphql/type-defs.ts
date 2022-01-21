import { gql } from 'apollo-server-express';

export const typeDefs = gql`

  type CharacterList {
    id:ID!
    name: String!
    image: String!
  }
 
  type Query {
    characters: [CharacterList!]!
  }

 
`;

//   input Character {
//   id: ID!
//   name: String!
//   image: String!
//   status: String!
//   species: String!
//   gender: String!
//   comment: String
// }

// type Query {
//   character: Character!
// }
  
  

//   input CharacterInput {
//   id: ID!
//   comment: String
// }

// type Mutation {
//   saveComment(character: CharacterInput): Boolean
// }