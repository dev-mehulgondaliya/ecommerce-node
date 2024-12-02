const UserModel = require("../../models/UserModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {

    try {
        const findUser = await UserModel.findOne({
            email: req.body.email,
        })
        if(!findUser){
            res.status(404).json({
                message: 'email wrong',
            })
            return
        }

        const checkPassword = await bcrypt.compare( req.body.password, findUser.password)

        if(!checkPassword){
            res.status(404).json({
                message: 'password wrong',
            })
            return
        }
        const jsonSecret = JSON.stringify(process.env.JWT_SECRET)
        
        const token = jwt.sign({
            email: findUser.email,
            role: findUser.role,
        }, jsonSecret, {
            expiresIn: '1d'
        })
        

        res.status(200).json({
            message: 'Login success',
            data: {token, user: findUser}
        })

    } catch (error) {
        res.status(500).json({
            message: 'Login failed' + error,
        })
    }
}

const signup = async (req, res) => {

    try {
        const findUser = await UserModel.findOne({
            email: req.body.email,
        })
        if(findUser){
            res.status(404).json({
                message: 'email already exist',
            })
            return
        }

        const encryptedPassword = await bcrypt.hash(req.body.password, 10)
        
        const result = await UserModel.create({
            name: req.body.name,
            role: 'admin',
            email: req.body.email,
            password: encryptedPassword
        })

        res.status(200).json({
            message: 'signup success',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: 'signup failed' + error,
        })
    }
}

module.exports = {
    login,
    signup
}