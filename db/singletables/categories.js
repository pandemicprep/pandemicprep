const { client } = require('../client');

async function categoryIdByName(name) {
    try {
        if (name) {
            if (name.length > 0) {
        const {
            rows: [index],
        } = await client.query(
            `
    SELECT id 
    FROM categories
    WHERE name=$1;
`,
            [name],
        );
       
        if (index) {
            
            return index.id;
        } else {
            const { rows: [ newIndex ]} = await client.query(`
            INSERT INTO categories (name)
            VALUES ($1)
            ON CONFLICT DO NOTHING
            RETURNING *;
            `, [ name ]);
            if (newIndex) {
                return newIndex.id;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
 } else {
        return false;
    }
    } catch (error) {
        throw error;
    }
}



async function getCategoryByName(name) {
    try {
        const {
            rows: [category]
        } = await client.query(`
            SELECT * FROM categories
            WHERE name=$1;
        `, [name]);

        return category;
    } catch (error) {
        throw error;
    }
}

module.exports = { categoryIdByName, getCategoryByName };