import { 
    placeOrderService, 
    getOrdersService,
    getOrderService,
    updateOrderService,
    deleteOrderService
} from "../services/orders.services.js";

export const placeOrderController = async (req, res) => {
    try {
        const placeOrderServiceResult = await placeOrderService(req.body);

        return res.status(200).json({
            message: placeOrderServiceResult.message
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const getOrdersController = async (req, res) => {
    try {  
        const whereConditions = {
            where: {
                account_id: req.params.account_id
            }
        }

        const getOrdersServiceResult = await getOrdersService(whereConditions);
        return res.status(200).json({
            data: getOrdersServiceResult.data 
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const getOrderController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                id: req.params.id,
                account_id: req.params.account_id
            }
        }

        const getOrderServiceResult =  await getOrderService(whereConditions);
        return res.status(200).json({
            data: getOrderServiceResult.data
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const updateOrderController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                id: req.body.id,
                account_id: req.body.account_id
            }
        }

        delete req.body.id;
        delete req.body.account_id;

        const payload = {
            ...req.body
        }

        const updateOrderServiceResult = await updateOrderService(payload, whereConditions);

        return res.status(200).json({
            message: updateOrderServiceResult.message
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const deleteOrderController = async (req, res) => {
    try {
        const whereConditions = {
            where: {
                id: req.params.id,
                account_id: req.params.account_id
            }
        }

        const deleteOrderServiceResult = await deleteOrderService(whereConditions);

        return res.status(200).json({
            message: deleteOrderServiceResult.message
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error
        })
    }
}