const { client } = require('../client');

async function categoryIdByName(name) {
    try {
        const {
            rows: [index],
        } = await client.query(
            `
    SELECT id FROM categories
    WHERE name=$1;
`,
            [name],
        );
        // console.log('index from categoryIdByName ', index);
        if (index) {
            // console.log("im returning that index from categoryIdByName");
            return index.id;
        } else {
            // console.log('index from categoryIdByName returning false');
            return false;
        }
    } catch (error) {
        throw error;
    }
}

async function addCategory(name) {
    try {
        var {
            rows: [newCategory],
        } = await client.query(
            `
    INSERT INTO categories (name)
    VALUES ($1)
    ON CONFLICT DO NOTHING
    RETURNING *;
`,
            [name],
        );
        // console.log('adding Category is adding ', newCategory);
        if (newCategory) {
            // console.log('newCategory is returning true');
            return newCategory;
        } else {
            // console.log('newCategory is returning false');
            return false;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { categoryIdByName, addCategory };