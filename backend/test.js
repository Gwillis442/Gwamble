
const {createSession} = require('./create_Session');
const {createUser} = require('./generate_User_Id');
const {addBet} = require('./add_Bet');

const testUser = 'Test User';
const user = createUser(testUser); // User created

console.log('created user:', user);

const session_Id = createSession(user, 'Test Session', 'Choice A', 'Choice B', 1, 100); // Session created, Session info created

addBet(user, session_Id , 'Choice A', 10); // Bet added

