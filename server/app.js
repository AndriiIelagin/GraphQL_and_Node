const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = 4000;

// allow cross-origin requests
app.use(cors())

// connect to mlab database
mongoose.connect('mongodb://admin:test123@ds239157.mlab.com:39157/gql-test-project');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log('now listening for requests on port ', PORT);
});
