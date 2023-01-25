const jwt = require('jsonwebtoken')

const Auth = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        let verifiedAdmin = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!verifiedAdmin) return res.status(401).send('Unauthorized request')

        req.admin = verifiedUser; // id, role, 
        next();

    } else {
        return res.sendStatus(401);
    }
}

module.exports = Auth;