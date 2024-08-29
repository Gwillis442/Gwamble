const { generateSessionId } = require('./get_Hash');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database/gwambleDB.db');

function createSession(user_Id, session_Name, choice_A, choice_B, min_Bet, max_Bet) {
    const session_Id = generateSessionId(user_Id);
    const query1 = 
        `INSERT INTO session (session_id, owner_id, in_progress) 
        VALUES (?, ?, ?)`
        ;

    db.run(query1, [session_Id, user_Id, 1], function(err) {
        if (err) {
            console.log('Error creating session', err);
        } else {
            console.log('Session created');
        }
    });

    const query2 =
        `INSERT INTO session_info (session_id, session_name, choice_a, choice_b, min_bet, max_bet)
        VALUES (?, ?, ?, ?, ?, ?)`
        ;

    db.run(query2, [session_Id, session_Name, choice_A, choice_B, min_Bet, max_Bet], function(err) {
        if (err) {
            console.log('Error creating session info', err);
        } else {
            console.log('Session info created');
        }
    });

    db.close();

    return session_Id;
  };

  module.exports = { createSession };