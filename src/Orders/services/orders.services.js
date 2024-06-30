import { 
    placeOrderQueryHandler,
    getOrdersQueryHandler,
    getOrderQueryHandler,
    updateOrderQueryHandler,
    deleteOrderQueryHandler
} from "../queries.js";
import { processRequest } from "../../config/processRequest.js";

export const placeOrderService = async (payload) => {
    try {
        // const getProduct = await processRequest("GET", "http://localhost:8000/api/products/getProduct/", {}, {
        //     params: {
        //         id: payload.product_id,
        //         account_id: payload.account_id
        //     }
        // });
        const getProduct = await processRequest("GET", `http://localhost:8000/api/products/getProduct/${payload.product_id}/${payload.account_id}`);
        console.log(16, getProduct);

        const placeOrderQueryResult = await placeOrderQueryHandler(payload);

        if (placeOrderQueryResult.errors) {
            return {
                message: "Error. Try later."
            }
        }
        else {
            return {
                message: "Successful."
            }
        }
    }
    catch (error) {
        console.log(error);
        return {
            message: error
        }
    }
}

export const getOrdersService = async (whereConditions) => {
    try {
        const getOrdersQueryResult = await getOrdersQueryHandler(whereConditions);

        if (getOrdersQueryResult.errors) {
            return {
                data: "Error. Try later."
            }
        }
        else {
            return {
                data: getOrdersQueryResult
            }
        }
    }
    catch (error) {
        console.log(error);
        return {
            data: error
        }
    }
}

export const getOrderService = async (whereConditions) => {
    try {
        const getOrderQueryResult = await getOrderQueryHandler(whereConditions);
        return {
            data: getOrderQueryResult
        }
    }
    catch (error) {
        console.log(error);
        return {
            data: error
        }
    }
}

export const updateOrderService = async (payload, whereConditions) => {
    try {
        const updateOrderQueryResult = await updateOrderQueryHandler(payload, whereConditions);

        if (updateOrderQueryResult.errors) {
            return {
                message: "Error. Try later."
            }
        }
        else {
            return {
                message: "Successful."
            }
        }
    }
    catch (error) {
        console.log(error);
        return {
            message: error
        }
    }
} 

export const deleteOrderService = async (whereConditions) => {
    try {
        const deleteOrderQueryResult = await deleteOrderQueryHandler(whereConditions);
        
        if (deleteOrderQueryResult.errors) {
            return {
                message: "Error. Try later."
            }
        }
        else {
            return {
                message: "Successful."
            }
        }
    }
    catch (error) {
        console.log(error);
        return {
            message: error
        }
    }
}