import { 
    createAccountService,
    getAccountService,
    addProductsService,
    updateAccountService,
    deleteAccountService,
    getProductsService,
    getProductService,
    updateProductService, 
    deleteProductService
} from "../services/accounts.service.js";

export const createAccountController = async (req, res) => {
    try {
        const createAccountServiceResult = await createAccountService(req.body, req.file);

        return res.status(200).json({
            message: createAccountServiceResult.message
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const getAccountController = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        const whereConditions = {
            where: {
                id: id
            }
        }

        const getAccountServiceResult = await getAccountService(whereConditions);

        return res.status(200).json({
            message: getAccountServiceResult.message
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const updateAccountController = async (req, res) => {
    try {
        if (req.body.file) {
            const whereConditions = {
                where: {
                    id: req.body.id
                }
            }
            delete req.body.id;

            const payload = {
                ...req.body,
                brand_image: req.body.file
            }

            const updateAccountServiceResult = await updateAccountService(payload, whereConditions);

            return res.status(200).json({
                message: updateAccountServiceResult.message
            })
        }
        else if (!req.body.file) {
            const whereConditions = {
                where: {
                    id: req.body.id
                }
            }
            delete req.body.id;

            const payload = req.body;

            const updateAccountServiceResult = await updateAccountService(payload, whereConditions);
            console.log(updateAccountServiceResult);

            return res.status(200).json({
                message: updateAccountServiceResult.message
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

export const deleteAccountController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                id: req.params.id
            }
        }

        const deleteAccountServiceResult = await deleteAccountService(whereConditions);

        return res.status(200).json({
            message: deleteAccountServiceResult.message
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

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