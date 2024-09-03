const crypto = require('crypto');


function generateSessionId(user_ID){

    const randomValue = `${Date.now()}${user_ID}${Math.random()}`;

    const hash = crypto.createHash('sha256').update(randomValue).digest('hex');

    return hash.substring(0, 6);
}

function generateUserId(){

    const randomValue = `${Date.now()}${Math.random()}`;

    const hash = crypto.createHash('sha256').update(randomValue).digest('hex');

    return hash.substring(0, 16);

}

module.exports= { generateSessionId, generateUserId };