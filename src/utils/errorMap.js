const errorTypes = [
    { type: 400, message: '"displayName" length must be at least 8 characters long' },
    { type: 400, message: '"email" must be a valid email' },
    { type: 400, message: '"password" length must be at least 6 characters long' },
    { type: 409, message: '"User" already registered' },
  ];
  
  const getError = (message) => errorTypes.find((err) => err.message === message);
  
  module.exports = getError;
