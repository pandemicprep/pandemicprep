// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'doomsday'
const DB_URL = process.env.DATABASE_URL || `postgres://${ doomsday }`;
const client = new Client(DB_URL);

// database methods

// export
module.exports = {
  client,
  // db methods
}