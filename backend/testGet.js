const {getSessionInfo, getUserInfo, getUserBet, getSessionBets, getBetInfo} = require('./get_Data');

const sessionId='3e63ca';
const userId='0751316083bf1159';

async function testGet() {
    try{
    const sessionInfo = await getSessionInfo(sessionId); // Session info: { session_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', session_name: 'Test Session', choice_a: 'Choice A', choice_b: 'Choice B', min_bet: 1, max_bet: 100 }
    console.log('Session info:', sessionInfo);
    } catch (err) {
        console.log('Error getting session info', err);
    }

    try {
    const userInfo = await getUserInfo(userId); // User info: { user_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', user_name: 'Test User', coin_count: 100 }
    console.log('User info:', userInfo);
    } catch (err) {
        console.log('Error getting user info', err);
    }

    try {
    const userBet = await getUserBet(userId); // Bet info: [ { session_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', user_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', bet_choice: 'Choice A', bet_amount: 10 } ]
    console.log('User bet info:', userBet);
    } catch (err) {
        console.log('Error getting bet info', err);
    }

    try {
        const sessionBets = await getSessionBets(sessionId); // Session bets: [ { session_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', user_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', bet_choice: 'Choice A', bet_amount: 10 } ]
        console.log('Session bets:', sessionBets);
    } catch (err) {
        console.log('Error getting session bets', err);
    }

    try{
        const betInfo = await getBetInfo(sessionId, userId); // Bet info: { session_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', user_id: 'c4b0b0c8-5c8b-4a8c-8b4f-9d4f1f3f4f7d', bet_choice: 'Choice A', bet_amount: 10 }
        console.log('Bet info:', betInfo);
    } catch (err) {
        console.log('Error getting bet info', err);
    }
}

testGet();
