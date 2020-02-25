const jwt = require('jsonwebtoken');

const middlewares = {
    validateToken: (req, res, next) => {
        let token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ error: 'No token' });
        }
    
        token = token.replace('Bearer ', '')
        return jwt.verify(token, 'project-paula', function (err, user) {
            if (err) {
                return res.status(401).json({ error: 'Invalid token' });
            } else {
                return next();
            }
        });
    }
}

module.exports = middlewares;
