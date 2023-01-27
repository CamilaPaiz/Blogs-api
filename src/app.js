const express = require('express');
const { loginController } = require('./controllers');
const { userController } = require('./controllers');
 
const errorMiddleware = require('./middlewares/error'); 
 const authenticateMiddleware = require('./middlewares/auth.middleware');
 
const app = express();

app.use(express.json());
app.post('/login', loginController.login);

app.post('/user', userController.createUser);
app.get('/user', authenticateMiddleware, userController.getUsers);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use(errorMiddleware); // sempre por último
module.exports = app;
