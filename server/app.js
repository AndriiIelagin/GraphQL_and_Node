const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')

// connect to mlab database
mongoose.connect('mongodb://admin:test123@ds239157.mlab.com:39157/gql-test-project');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

const app = express();
const PORT = 4000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log('now listening for requests on port ', PORT);
});
