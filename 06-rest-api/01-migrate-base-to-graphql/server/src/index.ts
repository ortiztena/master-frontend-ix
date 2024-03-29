import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { characterApi } from './api';
import { typeDefs, resolvers } from './graphql';

const PORT = 3000;
(async function () {
  const app = express();
  app.use(express.json());
  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await graphqlServer.start();
  graphqlServer.applyMiddleware({ app });

  const publicPath = path.resolve(__dirname, './public');
  app.use(express.static(publicPath));
  app.use('/api/characterList', characterApi);

  app.listen(PORT, () => {
    console.log(`Project is running on http://localhost:8080`);
    console.log(`Server running http://localhost:${PORT}`);
    console.log(
      `GraphQL server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    );
  });
})();

//add comment
