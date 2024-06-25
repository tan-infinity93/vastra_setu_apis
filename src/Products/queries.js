import { Products } from "./models/products.model.js";

export const addProductsQueryHandler = async (payload) => {
    try {
        const result = await Products.create(payload);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const getProductsQueryHandler = async (whereConditions) => {
    try {
        const result =  await Products.findAll(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const getProductQueryHandler = async (whereConditions) => {
    try {
        const result = await Products.findOne(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const updateProductQueryHandler = async (payload, whereConditions) => {
    try {
        const result = await Products.update(payload, whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteProductQueryHandler = async (whereConditions) => {
    try {
        const result = await Products.destroy(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}