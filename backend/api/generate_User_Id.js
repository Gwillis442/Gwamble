const {generateUserId} = require('./get_Hash');
const path = require('path');

const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, '../../database/gwambleDB.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('generate_User_Id connected to the database.');
    }
});

function createUser(user_name) {
    const user_id = generateUserId();
    const query = 
        `INSERT INTO users (user_id, user_name, coin_count) 
        VALUES (?,?,?)`
        ;
    
    db.run(query, [user_id, user_name, 100], function(err) {
        if (err) {
            console.log('Error creating user', err);
        }
    });
    return user_id;    
}

module.exports = { createUser };