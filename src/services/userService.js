/* const jwt = require('jsonwebtoken'); */
const { User } = require('../models');

 /* const { validateSchema } = require('./validations/schemas');
const errorMap = require('../utils/errorMap');  */

/* const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' }; */

const createUser = async ({ email, password, displayName, image }) => {
    const user = await User.create({ email, password, displayName, image });
    /* const { password: _password, ...userWithoutPassword } = user;
    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig); */
  
 /* const { error } = validateSchema.validate(email, password, displayName, image);
  if (error) {
    console.log(error);
    return errorMap(error.message);
  }  */

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
    const userId = await User.findByPK(id, { attributes: { eclude: ['password'] } });
    return userId;
};

module.exports = {
    createUser,
    getUsers,
    getByUserEmail,
    getByUserId,
};