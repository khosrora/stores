import { config } from "@blog/config";
import { resolvers } from "@blog/queries/resolvers";
import { typeDefs } from "@blog/queries/schema.graphql";
import { ApolloServer } from "apollo-server-express";
import { Application } from "express";
import http from "http";

import winstonLogger from "@blog/utils/logger";

const port = config.PORT;
const logger = winstonLogger("debug");

export async function start(app: Application) {
  server(app);
}

async function server(app: any) {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const httpServer: http.Server = new http.Server(app);
  htppServer(httpServer);
}

function htppServer(httpServer: http.Server) {
  try {
    logger.info(`blog Server has started with process id ${process.pid}`);
    httpServer.listen(port, () => {
      logger.info(`blog Server running on port ${port}`);
    });
  } catch (error) {
    logger.error("htppServer method error :", error);
  }
}
