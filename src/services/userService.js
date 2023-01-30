/* const jwt = require('jsonwebtoken'); */
const { User } = require('../models');

const schema = require('./validations/validateSchema');
/* const errorType = require('../utils/errorMap'); */

const createUser = async ({ email, password, displayName, image }) => {
    const error = schema.validateCreateUser({ email, password, displayName });
    console.log('erro user service', error);
    if (error.type === 400) {
        return error;
    }
    const userRegistered = await User.findOne({ where: { email } });
    if (userRegistered) {
      return { type: 409, message: 'User already registered' };
    }
    const user = await User.create({ email, password, displayName, image });
    console.log('happy user', user);
    return { user };
};

const getUsers = async () => {
    const user = await User.findAll({ attributes: { exclude: ['password'] } });
    return user;
};

const getByUserEmail = async (email) => {
    const userEmail = await User.findOne({ where: { email } });
    return userEmail;
};

const getByUserId = async (id) => {
    const user = await User
    .findOne({
        where: { id },
        attributes: { exclude: ['password'] },
      });
    return user;
};

module.exports = {
    createUser,
    getUsers,
    getByUserEmail,
    getByUserId,
};