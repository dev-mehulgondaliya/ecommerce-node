const jwt = require('jsonwebtoken')
const protect = (req, res, next) => {
   try {
    const authHeader = req.headers.Authorization ?? req.headers.authorization;
    if(!authHeader){
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
    const token = authHeader.split('JWT ')[1]
    if(!token){
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
    const jsonSecret = JSON.stringify(process.env.JWT_SECRET)
    const verify = jwt.verify(token, jsonSecret)
    if(!verify){
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
    
    next()
   } catch (error) {
    res.status(401).json({
        message: error.message
    })
   }
}
module.exports = {protect}