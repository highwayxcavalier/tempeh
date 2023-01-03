import { applyGraphQL } from 'https://deno.land/x/oak_graphql/mod.ts';
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { types } from './schema/schema.ts';
import { resolvers } from './resolvers/index.ts';

const app = new Application();

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log('Server start at http://localhost:8080');
await app.listen({ port: 8080 });
