const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database/gwambleDB.db');

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