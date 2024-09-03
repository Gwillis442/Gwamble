const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../database/gwambleDB.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Get_Data Connected to the database.');
    }
});

function getSessionInfo(session_id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM session WHERE session_id = ?`;
        console.log('Executing query:', query, 'with session_id:', session_id);
        db.get(query, [session_id], (err, row) => {
            if (err) {
                console.log('Error getting session info', err);
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function getUserInfo(user_id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE user_id = ?`;
        console.log('Executing query:', query, 'with user_id:', user_id);
        db.get(query, [user_id], (err, row) => {
            if (err) {
                console.log('Error getting user info', err);
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function getUserBet(user_id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM session_bets WHERE user_id = ?`;
        console.log('Executing query:', query, 'with user_id:', user_id);
        db.all(query, [user_id], (err, rows) => {
            if (err) {
                console.log('Error getting user bet', err);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });    
}

function getSessionBets(session_id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM session_bets WHERE session_id = ?`;
        console.log('Executing query:', query, 'with session_id:', session_id);
        db.all(query, [session_id], (err, rows) => {
            if (err) {
                console.log('Error getting session bets', err);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
    
}

function getBetInfo() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM session_bets`;
        console.log('Executing query:', query);
        db.all(query, (err, rows) => {
            if (err) {
                console.log('Error getting bet info', err);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports = { getSessionInfo, getUserInfo, getUserBet, getSessionBets, getBetInfo };