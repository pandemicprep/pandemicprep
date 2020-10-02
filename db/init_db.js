/** @format */

// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./client");
const { seed } = require("./");

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
    console.log("Creating tables");
    await client.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title varchar(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(9,2) NOT NULL,
        image varchar(255),
        "imageDescription" varchar(255),
        "isHighlighted" BOOLEAN DEFAULT false,
        "isActive" BOOLEAN DEFAULT true
      );
      
      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        image varchar(255),
        "imageDescription" varchar(255)
      );

      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        "isAdmin" BOOLEAN DEFAULT false,
        "isUser" BOOLEAN DEFAULT false,
        email varchar(255) UNIQUE NOT NULL,
        password varchar(255),
        "firstName" varchar(255) NOT NULL,
        "lastName" varchar(255) NOT NULL,
        "addressLine1" varchar(255),
        "addressLine2" varchar(255),
        city varchar(255),
        state varchar(255),
        zipcode varchar(255),
        country varchar(255),
        phone varchar(255),
        "creditCard" varchar(255)
      );

      CREATE TABLE carts (
        id SERIAL PRIMARY KEY,
        status varchar(255) NOT NULL,
        "lastUpdated" DATE,
        total NUMERIC(9,2) NOT NULL,
        "userId" INTEGER REFERENCES users(id)
      ); 

      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        "creatorId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES products(id),
        score INTEGER NOT NULL,
        description TEXT
      );

      CREATE TABLE products_categories (
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        "categoryId" INTEGER REFERENCES categories(id),
        UNIQUE ("productId", "categoryId")
      );

      CREATE TABLE products_carts (
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        "cartId" INTEGER REFERENCES carts(id),
        quantity INTEGER NOT NULL,
        "unitPrice" NUMERIC(9,2) NOT NULL,
        "itemTotal" NUMERIC(9,2) NOT NULL
      );

      
    `);
    console.log("Tables created");
  } catch (error) {
    throw error;
  }
}

async function dropTables() {
  try {
    console.log("Dropping tables");
    await client.query(`
      DROP TABLE IF EXISTS products_carts;
      DROP TABLE IF EXISTS products_categories;
      DROP TABLE IF EXISTS reviews;
      DROP TABLE IF EXISTS carts;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS categories;
      DROP TABLE IF EXISTS products;
    `);
    console.log("Tables dropped");
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
    await seed();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(seed)
  .catch(console.error)
  .finally(() => client.end());
