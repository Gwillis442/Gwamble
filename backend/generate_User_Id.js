const {generateUserId} = require('./get_Hash');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database/gwambleDB.db');

function createUser(user_name) {
    const user_id = generateUserId();
    const query = 
        `INSERT INTO users (user_id, user_name, coin_count) 
        VALUES (?,? ,?)`
        ;
    
    db.run(query, [user_id, user_name, 100], function(err) {
        if (err) {
            console.log('Error creating user', err);
        } else {
            console.log('User created');
        }
    });

    db.close();

    return user_id;

}

module.exports = { createUser };