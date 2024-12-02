const CartModel = require("../../models/CartModel")


const list = async (req, res) => {

    try {

        const query = {
            userId: req.body.userId
        }

        const result = await CartModel.find(query).populate('products.productId')

        res.status(200).json({
            message: 'cart list obtained success',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: 'cart list failed',
        })
    }
}



const update = async (req, res) => {

    try {
        let updateCart;
        if(req.body.type === 'add'){
            updateCart =  CartModel.updateOne({
                userId: req.body.userId
            }, {
                $push: {
                    products: {
                        productId: req.body.productId,
                        quantity: req.body.quantity
                    }
                }
            })
        }
        else if(req.body.type === 'remove'){
            updateCart =  CartModel.updateOne({
                userId: req.body.userId
            }, {
                $pull: {
                    products: {
                        productId: req.body.productId,
                    }
                }
            })
        }else{
            res.status(400).json({
                message: 'invalid type',
            })
        }


        res.status(200).json({
            message: 'update cart success',
            data: updateCart
        })
    } catch (error) {
        res.status(500).json({
            message: 'update cart failed',
        })
    }
}



module.exports = {
    list,
    update,
}