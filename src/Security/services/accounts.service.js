import fs from "fs/promises";
import { 
    createAccountQueryHandler,
    getAccountQueryHandler,
    getAccountsByCityQueryHandler,
    updateAccountQueryHandler,
    deleteAccountQueryHandler
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
                
                if (createAccountQueryResult.errors) {
                    return {
                        status: 400,
                        error: createAccountQueryResult.errors ? createAccountQueryResult.errors[0].message : `Error. Try later.`
                    }
                }
                else {
                    return {
                        status: 200,
                        message: "Successful."
                    }
                }
            }
            else {
                return {
                    status: 400,
                    error: "GSTIN number incorrect."
                }
            }
        }
    }
    catch (error) {
        return {
            error: error
        }
    }
}

export const getAccountService = async (whereConditions) => {
    try {
        const getAccountQueryResult = await getAccountQueryHandler(whereConditions);
        console.log(53, getAccountQueryResult);

        if (getAccountQueryResult === null || getAccountQueryResult === undefined) {
            return {
                status: 400,
                error: `No record. ID: ${whereConditions.where.id}.`
            }
        }
        else {
            return {
                status: 200,
                data: getAccountQueryResult
            }
        }
    }
    catch (error) {
        return {
            error: error
        }
    }
}

export const getAccountImageService = async (whereConditions) => {
    try {
        const getAccountQueryHandlerResult = await getAccountQueryHandler(whereConditions);

        if (getAccountQueryHandlerResult === null || getAccountQueryHandlerResult === undefined) {
            return {
                status: 400,
                error: `Record for id ${whereConditions.where.id} absent.`
            };
        }
        else {
            const fileName = getAccountQueryHandlerResult.brand_img;

            try {
                await fs.access(fileName, fs.constants.F_OK);
                return {
                    status: 200,
                    file: fileName
                };
            } 
            catch (error) {
                return {
                    status: 400,
                    error: error
                };
            }
        }
    }
    catch (error) {
        console.log(error);
        return {
            error: error
        }
    }
}

export const getAccountsByCityService = async (whereConditions) => {
    try {
        const getAccountsByCityQueryResult = await getAccountsByCityQueryHandler(whereConditions);
        console.log(114, getAccountsByCityQueryResult);

        if (getAccountsByCityQueryResult.length === 0 || getAccountsByCityQueryResult === undefined || getAccountsByCityQueryResult === null) {
            return {
                status: 400,
                error: `No data for city ${whereConditions.where.city}.`
            }
        }
        else {
            return {
                status: 200,
                data: getAccountsByCityQueryResult
            }
        }
    }
    catch (error) {
        return {
            error: error
        }
    }
}

export const updateAccountService = async (payload, whereConditions) => {
    try {
        const updateAccountQueryResult = await updateAccountQueryHandler(payload, whereConditions);
        console.log(updateAccountQueryResult[0]);

        if (updateAccountQueryResult[0] === 0 || updateAccountQueryResult === null || updateAccountQueryResult === undefined) {
            return {
                status: 400,
                error: updateAccountQueryResult.errors ? updateAccountQueryResult.errors[0].message : `Error. Try later.`
            }
        }
        else {
            return {
                status: 200,
                message: "Successful."
            }
        }
    }
    catch (error) {
        return {
            message: error
        }
    }
}

export const deleteAccountService = async (whereConditions) => {
    try {
        const deleteAccountQueryResult = await deleteAccountQueryHandler(whereConditions);
        
        if (!deleteAccountQueryResult || deleteAccountQueryResult.errors || deleteAccountQueryResult === null || deleteAccountQueryResult === undefined) {
            return {
                status: 400,
                error: `No record. ID ${whereConditions.where.id}`
            }
        }
        else {
            return {
                status: 200,
                message: "Successful."
            }
        }
    }
    catch (error) {
        return {
            message: error
        }
    }
}