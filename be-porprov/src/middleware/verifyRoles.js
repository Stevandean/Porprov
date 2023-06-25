const verifyRoles = (...allowedRoles) =>{
    return (req, res, next) =>{
        console.log(req.user);
        if(!req.user?.role) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const userRoles = req.user.role
        const result = rolesArray.includes(userRoles)
        // console.log(result)
        if(!result) return res.status(403).send("Forbidden! You don't have permission");
        next();
    }   
}

module.exports = verifyRoles