const { generateSessionId } = require('./get_Hash');
const path = require('path');

const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, '../../database/gwambleDB.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('create_Session connected to the database.');
    }
});

function createSession(user_Id, session_Name, choice_A, choice_B, min_Bet, max_Bet, in_Progress) {
    const session_Id = generateSessionId(user_Id);
    const query1 = 
        `INSERT INTO session (session_id, owner_id, session_name, choice_a, choice_b, min_bet, max_bet, in_progress) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
        ;

    db.run(query1, [session_Id, user_Id, session_Name, choice_A, choice_B, min_Bet, max_Bet, in_Progress], function(err) {
        if (err) {
            console.log('Error creating session', err);
        }
    });

    return session_Id;
  };

  module.exports = { createSession };