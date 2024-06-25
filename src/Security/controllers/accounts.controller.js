import { 
    createAccountService,
    getAccountService,
    updateAccountService,
    deleteAccountService
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
        if (req.file) {
            const whereConditions = {
                where: {
                    id: req.body.id
                }
            }
            delete req.body.id;

            const payload = {
                ...req.body,
                brand_image: `uploads/${req.file.originalname}`
            }

            const updateAccountServiceResult = await updateAccountService(payload, whereConditions);

            return res.status(200).json({
                message: updateAccountServiceResult.message
            })
        }
        else {
            const whereConditions = {
                where: {
                    id: req.body.id
                }
            }
            delete req.body.id;

            const payload = req.body;

            const updateAccountServiceResult = await updateAccountService(payload, whereConditions);

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