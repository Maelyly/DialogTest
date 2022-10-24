import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// const db = require('../../../db.json');

const db = [
  { name: 'Test', age: 22 },
  { name: 'A', age: 30 },
];

const db2 = [{ name: 'Test', age: 22 }];

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
    type user {
    name: String, 
    age: Int,
    eyeColor: String,
    company: String,
    email: String
  }
  type Query {
    list(name: String): [user]
  }
`;
var regexp = new RegExp('^[1-9]d{0,2}$');

function filter(text, name) {
  var result = text.contais(name);
  if (result) {
    return text;
  }
  return null;
}

const resolvers = {
  Query: {
    list(name) {
      var listUserFilter = [];
      if (!name) {
        return db2;
      }
      return db;
      // if (!name) {
      //   return db;
      // } else {
      //   // var test = regexp.test(name);
      //   // if (!test) {
      //   //   return db;
      //   // }
      //   // db.filter(function (user) {
      //   //   var result = null;
      //   //   for (var element in user) {
      //   //     result = filter(element, name);
      //   //     if (result) {
      //   //       listUserFilter.push(element);
      //   //     }
      //   //   }
      //   // });
      //   // if (listUserFilter.length == 0) {
      //   //   return db;
      //   // }
      //   // return listUserFilter;
      //   return db2;
      // }
      // return db2;
    },
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
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
