import { readFileSync } from "fs";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { getDirName } from "./utils/dirname.js";
import { openConnection, listDatabases } from "./apis/mongo.js";

const dirName = getDirName(import.meta.url);

const typeDefs = readFileSync(`${dirName}/schema.graphql`, {
  encoding: "utf-8",
});

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 80 },
});

console.log(`🚀  Server ready at: ${url}`);
openConnection().then(listDatabases);
