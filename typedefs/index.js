const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    articleBySource(id: ID!, source: String!): Article
    articlesBySource(ids: [Int!]!, source: String!): [Article!]
    allArticles: [Article!]
    allArticlesBySource(source: String!): [Article!]
  }
  # an article has an id title author url time source
  type Article {
    id: ID!
    title: String
    author: String
    url: String
    time: String
    source: String
  }
`;

module.exports = typeDefs;
