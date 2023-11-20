import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { schema } from "./schema";

const port = Number(process.env.API_PORT) || 4000;

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

server.listen(port, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
