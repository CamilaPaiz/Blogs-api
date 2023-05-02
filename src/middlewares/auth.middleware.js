const { authenticateToken } = require('../utils/auth');

const authenticateMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });  
        } 
          const user = await authenticateToken(token);  
         if (!user) {  
               return res.status(401).json({ message: 'Expired or invalid token' });   
        } 
        req.user = user;   
        
        next();
} catch (err) {
        next(err);
    }
};
   
module.exports = authenticateMiddleware;