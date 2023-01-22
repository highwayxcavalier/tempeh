import { applyGraphQL } from './deps.ts';
import { Application, Router } from './deps.ts';
import { types } from './schema/schema.ts';
import { resolvers } from './resolvers/index.ts';
import mongoose from 'npm:mongoose@^6.7';
import { oakCors } from './deps.ts';
import { config } from './config.ts';
import { parse } from './deps.ts';
import "https://deno.land/std@0.173.0/dotenv/load.ts";

const app = new Application();

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers,
});

app.use(oakCors()); // Enable CORS for All Routes
app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

try {
  await mongoose.connect(Deno.env.get("MONGODB_URL"));

  console.log(`Connected: ${mongoose.connection.readyState}`);
} catch (error) {
  console.error(Deno.env.get("MONGODB_URL"), error);
}

const DEFAULT_PORT=8000
const argsPort = parse(Deno.args)?.port;
await app.listen({ port: argsPort || DEFAULT_PORT });
