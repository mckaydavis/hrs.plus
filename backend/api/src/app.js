const express = require('express');

const graphqlApp = require('./graphql/app');

const app = express();

app.use('/graphql', graphqlApp);

module.exports = app;
