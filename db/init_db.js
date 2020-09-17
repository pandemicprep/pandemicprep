// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./client');
const { seed } = require('./');

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    await dropTables();



    // build tables in correct order
    await createTables();

    


    
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    await client.query(`

    CREATE TABLE images (
      id SERIAL PRIMARY KEY,
      name varchar(255) NOT NULL,
      image BYTEA
    );

      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title varchar(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(9,2) NOT NULL,
        "imageId" INTEGER REFERENCES images(id)
      );
      
      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        "imageId" INTEGER REFERENCES images(id)
      );

      CREATE TABLE cart (
        id SERIAL PRIMARY KEY,
        status varchar(255) NOT NULL,
        "lastUpdated" DATE,
        total NUMERIC(9,2) NOT NULL,
        "userId" INTEGER REFERENCES users(id)
      ); 

      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        "isAdmin" BOOLEAN DEFAULT false,
        email varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        "firstName" varchar(255) NOT NULL,
        "lastName" varchar(255) NOT NULL,
        "addressLine1" varchar(255),
        "addressLine2" varchar(255),
        city varchar(255),
        state varchar(255),
        zipcode varchar(255),
        country varchar(255),
        phone varchar(255) UNIQUE,
        "creditCard" INTEGER UNIQUE
      );

      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        "creatorId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES products(id),
        score INTEGER NOT NULL
      );

      CREATE TABLE products_categories (
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        "categoryId" INTEGER REFERENCES categories(id)
      );

      CREATE TABLE products_carts (
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        "cartId" INTEGER REFERENCES cart(id),
        quantity INTEGER NOT NULL,
        "unitPrice" INTEGER NOT NULL,
        "itemTotal" INTEGER NOT NULL
      );

      
    `);
    
  } catch (error) {
    throw error;
  }
}

async function dropTables() {
  try {
    await client.query(`
      DROP TABLE IF EXISTS products_carts;
      DROP TABLE IF EXISTS products_categories;
      DROP TABLE IF EXISTS reviews;
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS cart;
      DROP TABLE IF EXISTS categories;
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS images;
    `);
    
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
    seed();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());