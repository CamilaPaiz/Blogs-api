const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const createUser = async ({ email, password }) => {
    const user = await User.create({ email, password });
    const { password: _password, ...userWithoutPassword } = user;
    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);
    return { token };
};

const getUsers = async () => {
    const user = await User.getAll();
    return user;
};

const getByUserEmail = async (email) => {
    const userEmail = await User.findOne({ where: { email } });
    return userEmail;
};

const getByUserId = async (id) => {
    const userId = await User.findByPK(id);
    return userId;
};

module.exports = {
    createUser,
    getUsers,
    getByUserEmail,
    getByUserId,
};