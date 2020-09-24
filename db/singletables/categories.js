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
    //     const categoryByName = await getCategoryByName(name);
    //     console.log('category by name: ', categoryByName)
    //     if (categoryByName) {
    //         console.log('returning because caught by category by name')
    //         return categoryByName;
    //     } else {
    //         var {
    //             rows: [newCategory],
    //         } = await client.query(
    //             `
    //     INSERT INTO categories (name)
    //     VALUES ($1)
    //     ON CONFLICT DO NOTHING
    //     RETURNING *;
    // `,
    //             [name],
    //         );
    //         console.log('LOOK HERE tsest', newCategory)
    //         return newCategory;
    //     }

        
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
        
        if (newCategory) {
            
            return newCategory;
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

module.exports = { categoryIdByName, addCategory, getCategoryByName };