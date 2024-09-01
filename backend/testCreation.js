
const { createSession } = require('./create_Session');
const { createUser } = require('./generate_User_Id');
const { addBet } = require('./add_Bet');
const { testGet } = require('./testGet');

const testUser = 'Test User';
let user;
let session_Id;

function testUserCreation() {
    user = createUser(testUser); // User created
    console.log('User created:', user);
}

function testSessionCreation() {
    session_Id = createSession(user, 'Test Session', 'Choice A', 'Choice B', 1, 100); // Session created, Session info created
    console.log('Session created:', session_Id);
}

function testBetCreation() {
    addBet(session_Id, user, 'Choice A', 10); // Bet added
    console.log('Bet added');
}

async function testCreation() {
    try {
        await testUserCreation();
    } catch (err) {
        console.log('Error creating user', err);
    }
    try {
        await testSessionCreation();
    } catch (err) {
        console.log('Error creating session', err);
    }
    try {
        await testBetCreation();
    } catch (err) {
        console.log('Error adding bet', err);
    }
}

testCreation();