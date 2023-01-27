const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const login = async (req, res) => {
    const validInfo = (email, password) => email && password;
        const { email, password } = req.body;
        if (!validInfo(email, password)) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        const validUser = await UserService.getByUserEmail(email);
        if (!validUser || validUser.password !== password) {
            return res.status(400).json({ message: 'Invalid fields' });
        }
        const token = jwt.sign({ data: { userId: validUser.id } }, secret, jwtConfig);
        res.status(200).json({ token });
};

module.exports = { 
    login,
 };