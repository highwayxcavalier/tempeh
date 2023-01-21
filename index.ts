import { applyGraphQL } from 'https://deno.land/x/oak_graphql/mod.ts';
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { types } from './schema/schema.ts';
import { resolvers } from './resolvers/index.ts';
import mongoose from 'npm:mongoose@6.7';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import { handler } from 'https://deno.land/x/serverless_oak/mod.ts';
import { config } from './config.ts';

const app = new Application();

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers,
});

app.use(oakCors()); // Enable CORS for All Routes
app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

try {
  await mongoose.connect(
    config.MONGODB_URL ?? 'mongodb://127.0.0.1:27017/tofu'
  );
  console.log(`Connected: ${mongoose.connection.readyState}`);
} catch (error) {
  console.error(error);
}

console.log('Server start at http://192.168.0.211:8080');
await app.listen({ port: 8080 });
