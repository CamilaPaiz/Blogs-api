require('dotenv/config');
const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = { algorithm: 'HS256', expiresIn: '15min' };

const createUser = async (req, res) => {
     const user = await UserService.createUser(req.body);
    /*  if (user.type) return res.status(user.type).json({ message: user.message }); */
      const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig); 
   return res.status(201).json({ token });
 };
 
 const getUsers = async (_req, res) => {
     console.log(res.xablau, 'user'); 
     const user = await UserService.getUsers();
     return res.status(200).json(user);
 };

 module.exports = {
    createUser,
    getUsers,
 };