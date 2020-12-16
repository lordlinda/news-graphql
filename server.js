const { ApolloServer } = require("apollo-server");
const express = require("express");
const app = express();
const path = require("path");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const datasources = require("./datasources");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ...datasources,
  }),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log("server is listening ...");
});
