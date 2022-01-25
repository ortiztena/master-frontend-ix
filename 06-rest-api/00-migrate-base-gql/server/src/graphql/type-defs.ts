import { gql } from 'apollo-server-express';

export const typeDefs = gql`

  type CharacterList {
    id:ID!
    name: String!
    image: String!
  }

  type Character {
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

  input CharacterInput {
  
    comment: String
  }

 type Mutation {
     saveComment(id:ID!, comment:String): Boolean
  }

`;



  // id: ID!
  //   name: String!
  //   image: String!
  //   status: String!
  //   species: String!
  //   gender: String!


// type Mutation {
//   saveComment(character: CharacterInput): Boolean
// }