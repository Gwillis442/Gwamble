const express = require('express');
const bodyParser = require('body-parser');
const { create_Session } = require('./api/create_Session');
const { createUser } = require('./api/generate_User_Id');
const { add_Bet } = require('./api/add_Bet');
const { getSessionInfo, getUserInfo, getUserBet, getSessionBets, getBetInfo } = require('./api/get_Data');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/api/createUser', async (req, res) => {
    try {
        const user = createUser(req.body.user_id, req.body.user_name, req.body.coin_count);
        res.send(user);
    } catch (err) {
        res.send('Error creating user');
    }
});

app.post('/api/createSession', async (req, res) => {
    try {
        const session_Id = create_Session(
            req.body.user, 
            req.body.sessionName, 
            req.body.choiceA, 
            req.body.choiceB, 
            req.body.minBet, 
            req.body.maxBet, 
            req.body.inProgress);
        res.send(session_Id);
    } catch (err) {
        res.send('Error creating session');
    }
});

app.post('/api/addBet', async (req, res) => {
    try {
        add_Bet(
            req.body.sessionId, 
            req.body.user, 
            req.body.choice, 
            req.body.amount);
        res.send('Bet added');
    } catch (err) {
        res.send('Error adding bet');
    }
});

app.get('/api/getSessionInfo', async (req, res) => {
    try {
        const sessionInfo = await getSessionInfo(req.query.sessionId);
        res.send(sessionInfo);
    } catch (err) {
        res.status(500).send('Error getting session info');
    }
});

app.get('/api/getUserInfo', async (req, res) => {
    try {
        const userInfo = await getUserInfo(req.query.userId);
        res.send(userInfo);
    } catch (err) {
        res.status(500).send('Error getting user info');
    }
});

app.get('/api/getUserBet', async (req, res) => {
    try {
        const userBet = await getUserBet(req.query.userId);
        res.send(userBet);
    } catch (err) {
        res.status(500).send('Error getting user bet');
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});