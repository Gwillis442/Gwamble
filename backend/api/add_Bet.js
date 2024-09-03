const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../database/gwambleDB.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('add_Bet connected to the database.');
    }
});

function addBet(user_Id, session_Id, choice, bet_Amount) {
    const query = 
        `INSERT INTO session_bets (session_id, user_id, bet_choice, bet_amount)
        VALUES (?, ?, ?, ?)`
        ;

    db.run(query, [user_Id, session_Id, choice, bet_Amount], function(err) {
        if (err) {
            console.log('Error adding bet', err);
        }
    });

}
    module.exports = { addBet };