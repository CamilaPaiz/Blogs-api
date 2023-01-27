require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const generateToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const authenticateToken = async (token) => {
 try { 
    const verificationResponse = await jwt.verify(token, secret);
    return verificationResponse;
 } catch (err) {
    console.log(err);
} 
};

module.exports = {
    generateToken,
    authenticateToken,
};