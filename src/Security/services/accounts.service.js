import { 
    createAccountQueryHandler,
    getAccountQueryHandler,
    updateAccountQueryHandler,
    deleteAccountQueryHandler,
    addProductsQueryHandler,
    getProductsQueryHandler,
    getProductQueryHandler,
    updateProductQueryHandler,
    deleteProductQueryHandler,
} from "../queries.js";

export const createAccountService = async (payload, file) => {
    try {
        if ("ref_code" in payload) {
            const gstinRegEx = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
            if (gstinRegEx.test(payload["gst"])) {
                payload["original_amount"] = (payload["business_type"] === "Wholesaler") ? 1500 : 3000; 
                payload["ref_amount"] = payload["ref_code"] ? payload["original_amount"] - 1500 : payload["original_amount"];
                payload["is_ref"] = payload["ref_code"] ? true : false;
                payload["brand_img"] = `uploads/${file.originalname}`;

                const createAccountQueryResult = await createAccountQueryHandler(payload);
                console.log(createAccountQueryResult);
            
                if (createAccountQueryResult.errors) {
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
                    message: "GSTIN number incorrect."
                }
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

export const getAccountService = async (whereConditions) => {
    try {
        const getAccountQueryResult = await getAccountQueryHandler(whereConditions);

        if (getAccountQueryResult.errors) {
            return {
                message: "Error. Try later."
            }
        }
        else {
            return {
                message: getAccountQueryResult
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

export const updateAccountService = async (payload, whereConditions) => {
    try {
        const updateAccountQueryResult = await updateAccountQueryHandler(payload, whereConditions);
        console.log(updateAccountQueryResult);

        if (updateAccountQueryResult.errors) {
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

export const deleteAccountService = async (whereConditions) => {
    try {
        const deleteAccountQueryResult = await deleteAccountQueryHandler(whereConditions);
        
        if (deleteAccountQueryResult.errors) {
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