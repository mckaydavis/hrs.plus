const cors = require('cors');
const express = require('express');

const graphqlApp = require('./graphql/app');

const app = express();

app.use(cors());

app.use('/graphql', graphqlApp);

module.exports = app;
