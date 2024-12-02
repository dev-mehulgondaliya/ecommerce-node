const ProductModel = require("../../models/ProductModel")


const list = async (req, res) => {

    try {

        const query = {}
        if(req?.body?.search !== ''){
            query.title = {
                $regex: req.body.search,
                $options: 'i'
            }
        }

        const result = await ProductModel.find(query)

        const page = req.body.page || 1
        const limit = req.body.limit || 10
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const finalResult = result.slice(startIndex, endIndex);


        res.status(200).json({
            message: 'product list obtained success',
            data: finalResult
        })
    } catch (error) {
        res.status(500).json({
            message: 'product list failed' + error,
        })
    }
}

const getItem = async (req, res) => {

    try {
        const findProduct = await ProductModel.findById(req.params.id)
        if(!findProduct){
            res.status(404).json({
                message: 'product not exist',
            })
        }

        res.status(200).json({
            message: 'product get success',
            data: findProduct
        })
    } catch (error) {
        res.status(500).json({
            message: 'product failed failed',
        })
    }
}


module.exports = {
    list,
    getItem
}