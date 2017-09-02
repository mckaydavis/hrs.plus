const bodyParser = require("body-parser");
const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");

const schema = require("./schema");

const React = require("react");

const { GRAPHQL_USE_MOCK_DATA, GRAPHQL_ENABLE_GRAPHIQL_ENDPOINT } = process.env;

if (GRAPHQL_USE_MOCK_DATA == 1) {
  console.warn("Using Mock Mode");
  const { addMockFunctionsToSchema } = require("graphql-tools");
  addMockFunctionsToSchema({
    schema,
    mocks: require("./schema/_mocks")
  });
}

const app = express();

app.use(bodyParser.json());

if (GRAPHQL_ENABLE_GRAPHIQL_ENDPOINT == 1) {
  console.warn(
    "GraphiQL endpoint enabled! http://localhost:8080/graphql/graphiql"
  );
  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql",
      schema
    })
  );
}
app.use("/", graphqlExpress(req => ({ schema })));

module.exports = app;
