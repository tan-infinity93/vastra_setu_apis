import { 
    addProductsQueryHandler,
    getProductsQueryHandler,
    getProductQueryHandler,
    updateProductQueryHandler,
    deleteProductQueryHandler
} from "../queries.js";

export const addProductsService = async (payload, file) => {
    try {
        if ("price" in payload) {
            payload["commission"] = 0.025 * payload["price"];
            payload["gst"] = 0.12 * payload["price"];
            payload["price"] = payload["price"] + payload["commission"] + payload["gst"];
            payload["product_image"] = `uploads/${file.originalname}`;
            
            const addProductsQueryResult = await addProductsQueryHandler(payload);
            console.log(addProductsQueryResult);

            if (addProductsQueryResult.errors) {
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
        else {
            return {
                message: "Price not mentioned."
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

export const getProductsService = async (whereConditions) => {
    try {
        const getProductsQueryResult = await getProductsQueryHandler(whereConditions);

        if (getProductsQueryResult.errors) {
            return {
                data: "Error. Try later."
            }
        }
        else {
            return {
                data: getProductsQueryResult
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

export const getProductService = async (whereConditions) => {
    try {
        const getProductQueryResult = await getProductQueryHandler(whereConditions);

        if (getProductQueryResult.errors) {
            return {
                data: "Error. Try later."
            }
        }
        else {
            return {
                data: getProductQueryResult
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

export const updateProductService = async (payload, whereConditions) => {
    try {
        const updateProductQueryResult = await updateProductQueryHandler(payload, whereConditions);

        if (updateProductQueryResult.errors) {
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

export const deleteProductService = async (whereConditions) => {
    try {
        const deleteProductQueryResult = await deleteProductQueryHandler(whereConditions);

        if (deleteProductQueryResult.errors) {
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