import { 
    addProductsService, 
    getProductsService,
    getProductService,
    updateProductService,
    deleteProductService
} from "../services/products.services.js";

export const addProductsController = async (req, res) => {
    try {
        const addProductsServiceResult = await addProductsService(req.body, req.file);

        return res.status(200).json({
            message: addProductsServiceResult.message
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const getProductsController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                account_id: req.params.account_id
            }
        }

        const getProductsServiceResult = await getProductsService(whereConditions);

        return res.status(200).json({
            data: getProductsServiceResult.data
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const getProductController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                id: req.params.id,
                account_id: req.params.account_id
            }
        }

        const getProductServiceResult = await getProductService(whereConditions);

        return res.status(200).json({
            data: getProductServiceResult.data
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const updateProductController = async (req, res) => {
    try {
        if (req.file) {
            console.log("Code reached here. File present.")
            const whereConditions = {
                where: {
                    id: req.body.id,
                    account_id: req.body.account_id
                }
            }

            delete req.body.id;
            delete req.body.account_id;

            const payload = {
                ...req.body,
                product_image: `uploads/${req.file.originalname}`
            }

            const updateProductServiceResult = await updateProductService(payload, whereConditions);

            return res.status(200).json({
                message: updateProductServiceResult.message
            })
        }
        else {
            console.log("File not present.");
            const whereConditions = {
                where: {
                    id: req.body.id,
                    account_id: req.body.account_id
                }
            }
    
            delete req.body.id;
            delete req.body.account_id;
            
            const payload = req.body;
    
            const updateProductServiceResult = await updateProductService(payload, whereConditions);
    
            return res.status(200).json({
                message: updateProductServiceResult.message
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const deleteProductController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                id: req.params.id
            }
        }

        const deleteProductServiceResult = await deleteProductService(whereConditions);

        return res.status(200).json({
            message: deleteProductServiceResult.message
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}