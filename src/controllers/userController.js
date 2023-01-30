require('dotenv/config');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const createUser = async (req, res) => {
    const user = await UserService.createUser(req.body);
     if (user.type === 400) return res.status(user.type).json({ message: user.message }); 
     if (user.type === 409) return res.status(user.type).json({ message: user.message });
      const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig); 
        return res.status(201).json({ token });
 };
 
 const getUsers = async (_req, res) => {
     const user = await UserService.getUsers();
      return res.status(200).json(user);
 };

 const getByUserId = async (req, res) => {
      const user = await UserService.getByUserId(req.params.id);
        if (!user) {
         return res.status(404).json({ message: 'User does not exist' });
} 

return res.status(200).json(user);
 };

 module.exports = {
    createUser,
    getUsers,
    getByUserId,
 };