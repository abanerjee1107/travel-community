const jwt = require('jsonwebtoken');
const csrf = require('csurf');

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ message: 'Access Denied' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    req.user = user;
    next();
  });
};

// CSRF Protection Middleware
const csrfProtection = csrf({ cookie: true });

module.exports = {
  authenticateToken,
  csrfProtection,
};
