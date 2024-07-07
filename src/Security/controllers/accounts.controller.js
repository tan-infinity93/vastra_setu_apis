import { 
    createAccountService,
    getAccountService,
    getAccountImageService,
    getAccountsByCityService,
    updateAccountService,
    deleteAccountService
} from "../services/accounts.service.js";

export const createAccountController = async (req, res) => {
    try {
        const createAccountServiceResult = await createAccountService(req.body, req.file);

        if (createAccountServiceResult.status !== 200) {
            return res.status(createAccountServiceResult.status).json({
                error: createAccountServiceResult.error
            })
        }
        else {
            return res.status(createAccountServiceResult.status).json({
                message: createAccountServiceResult.message
            })
        }
    }
    catch (error) {
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

        if (getAccountServiceResult.status !== 200) {
            return res.status(getAccountServiceResult.status).json({
                error: getAccountServiceResult.error
            })
        }
        else {
            return res.status(getAccountServiceResult.status).json({
                data: getAccountServiceResult.data
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const getAccountImageController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                id: req.params.id
            }
        }

        const getAccountImageServiceResult = await getAccountImageService(whereConditions);

        if (getAccountImageServiceResult.status !== 200) {
            return res.status(getAccountImageServiceResult.status).json({
                error: getAccountImageServiceResult.error
            })
        }
        else {
            const file = getAccountImageServiceResult?.file?.split("/");

            return res.status(getAccountImageServiceResult.status).sendFile(file[1], { root: file[0] });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error
        })
    }
}

export const getAccountsByCityController = async (req, res) => {
    try {
        const city = req.params.city;

        const whereConditions = {
            where: {
                city: city
            }
        }

        const getAccountsByCityServiceResult = await getAccountsByCityService(whereConditions);

        if (getAccountsByCityServiceResult.status !== 200) {
            return res.status(getAccountsByCityServiceResult.status).json({
                error: getAccountsByCityServiceResult.error
            })
        }
        else {
            return res.status(getAccountsByCityServiceResult.status).json({
                data: getAccountsByCityServiceResult.data
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            error: error
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

            if (updateAccountServiceResult.status !== 200) {
                return res.status(updateAccountServiceResult.status).json({
                    error: updateAccountServiceResult.error
                })
            }
            else {
                return res.status(updateAccountServiceResult.status).json({
                    message: updateAccountServiceResult.message
                })
            }
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

            if (updateAccountServiceResult.status !== 200) {
                return res.status(updateAccountServiceResult.status).json({
                    error: updateAccountServiceResult.error
                })
            }
            else {
                return res.status(updateAccountServiceResult.status).json({
                    message: updateAccountServiceResult.message
                })
            }
        }
    }
    catch (error) {
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

        if (deleteAccountServiceResult.status !== 200) {
            return res.status(deleteAccountServiceResult.status).json({
                error: deleteAccountServiceResult.error
            })
        }
        else {
            return res.status(deleteAccountServiceResult.status).json({
                message: deleteAccountServiceResult.message
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}