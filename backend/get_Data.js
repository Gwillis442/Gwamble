

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database/gwambleDB.db');

function getSessionId(user_Id) {
    const query = 
        `SELECT session_id 
        FROM session 
        WHERE owner_id = ?`
        ;

    db.get(query, [user_Id], function(err, row) {
        if (err) {
            console.log('Error getting session id', err);
        } else {
            console.log('Session id:', row.session_id);
        }
    });

    db.close();

    return row.session_Id;
}

function getOwnerId(session_Id) {
    const query = 
        `SELECT owner_id 
        FROM session 
        WHERE session_id = ?`
        ;

    db.get(query, [session_Id], function(err, row) {
        if (err) {
            console.log('Error getting owner id', err);
        } else {
            console.log('Owner id:', row.owner_id);
        }
    });

    db.close();

    return row.owner_Id;
}