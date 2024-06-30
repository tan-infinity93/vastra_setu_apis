import { Orders } from "./models/orders.model.js";

export const placeOrderQueryHandler = async (payload) => {
    try {
        const result =  await Orders.create(payload);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const getOrdersQueryHandler = async (whereConditions) => {
    try {
        const result = await Orders.findAll(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const getOrderQueryHandler = async (whereConditions) => {
    try {
        const result = await Orders.findAll(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const updateOrderQueryHandler = async (payload, whereConditions) => {
    try {
        const result = await Orders.update(payload, whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteOrderQueryHandler = async (whereConditions) => {
    try {
        const result = await Orders.destroy(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}