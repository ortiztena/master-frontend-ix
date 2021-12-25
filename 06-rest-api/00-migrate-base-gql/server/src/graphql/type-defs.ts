import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Hotel {
    id: ID!
    type: String!
    name: String!
    address1: String!
    city: String!
    hotelRating: Float!
    shortDescription: String!
    thumbNailUrl: String!
    tripAdvisorRating: Float!
    tripAdvisorRatingUrl: String!
  }

  type Character {
    id:ID!
    name: String!
    image: String!
    status: String!
    species: String!
    gender: String!
    comment: String
  }
 

  type Query {
    characters: [Character!]!
    character(id: ID!): Character!
    cities: [City!]!
  }

  input HotelInput {
    id: ID!
    name: String!
    address1: String!
    city: String!
    hotelRating: Float!
    shortDescription: String!
  }

  type Mutation {
    saveHotel(hotel: HotelInput!): Boolean
    deleteHotel(id: ID!): Boolean
  }
`;
