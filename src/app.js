const express = require('express');
const { loginController } = require('./controllers');
const { userController } = require('./controllers');
const { categoryController } = require('./controllers');

const errorMiddleware = require('./middlewares/error'); 
 const authenticateMiddleware = require('./middlewares/auth.middleware');
 
const app = express();

app.use(express.json());
app.post('/login', loginController.login);

app.post('/user', userController.createUser);
app.get('/user', authenticateMiddleware, userController.getUsers);
app.get('/user/:id', authenticateMiddleware, userController.getByUserId);

app.get('/categories', authenticateMiddleware, categoryController.getCategory);
app.use(errorMiddleware); // sempre por último
module.exports = app;
