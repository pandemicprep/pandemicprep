// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    // dropTables();

    // build tables in correct order
    // createTables();

  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    await client.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title varchar(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(9,2) NOT NULL,
        imageId REFERENCES images(id)
      );
      
      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        imageId REFERENCES images(id)
      );

      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        creatorId REFERENCES users(id),
        productId REFERENCES products(id),
        score INTEGER NOT NULL
      );

      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        isAdmin BOOLEAN DEFAULT false,
        email varchar(255) UNIQUE NOT NULL,
        firstName varchar(255) NOT NULL,
        lastName varchar(255) NOT NULL,
        street TEXT NOT NULL,
        city varchar(255) NOT NULL,
        state varchar(255) NOT NULL,
        zipcode varchar(255) NOT NULL,
        country varchar(255) NOT NULL,
        phone varchar(255) UNIQUE NOT NULL,
        creditCard varchar(255) UNIQUE NOT NULL,
        cartId REFERENCES cart(id)
      );

      CREATE TABLE cart (
        id SERIAL PRIMARY KEY,
        userId REFERENCES users(id),
        quantity INTEGER,
        status varchar(255) NOT NULL,
        lastUpdated DATE,
        total NUMERIC(9,2) NOT NULL
      ); 

      CREATE TABLE products_categories (
        id SERIAL PRIMARY KEY,
        productId REFERENCES products(id),
        categoryId REFERENCES categories(id)
      );

      CREATE TABLE products_carts (
        id SERIAL PRIMARY KEY,
        productId REFERENCES products(id),
        cartId REFERENCES cart(id)
      );

      CREATE TABLE images (
        id SERIAL PRIMARY KEY,
        productId REFERENCES products(id),
        name varchar(255) NOT NULL,
        image BYTEA
      );
    `)
    
  } catch (error) {
    throw error;
  }
}

async function dropTables() {
  try {
    
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());