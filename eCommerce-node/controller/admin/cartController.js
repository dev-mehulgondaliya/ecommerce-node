const CartModel = require("../../models/CartModel")


const list = async (req, res) => {

    try {

        const query = {
        }
        if(req.body.userId){
            query.userId = req.body.userId
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
        const productId = req.body.productId;
        const userId = req?.body?.userId
        const product = await CartModel.findOne({userId,"products.productId": productId});

        if(product){
            if(req.body.type === 'add'){
                updateCart =  await CartModel.updateOne({
                    userId,
                    "products.productId": productId
                }, {
                    $inc: {
                        "products.$.quantity": 1
                    }
                },{new: true, upsert: true})
            }
            else if(req.body.type === 'remove'){
                updateCart = await CartModel.updateOne({
                    userId,
                    "products.productId": productId
                }, {
                    $inc: {
                        "products.$.quantity": -1
                    }
                },{new: true, upsert: true})
            }
        }else{
            const query = {
                userId,
                products: [
                    {
                        productId,
                        quantity: 1
                    }
                ]
            }
            updateCart =  await CartModel.create(query)
        }
        console.log("🚀 ~ update ~ updateCart:", updateCart)


        res.status(200).json({
            message: 'update cart success',
            data: updateCart
        })
    } catch (error) {
        res.status(500).json({
            message: 'update cart failed' + error?.message,
        })
    }
}



module.exports = {
    list,
    update,
}