import { Accounts } from "./models/accounts.model.js";

export const createAccountQueryHandler = async (payload) => {
    try {
        const result = await Accounts.create(payload);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const getAccountQueryHandler = async (whereConditions) => {
    try {
        const result = await Accounts.findOne(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const getAccountsByCityQueryHandler = async (whereConditions) => {
    try {
        const result = await Accounts.findAll(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const updateAccountQueryHandler = async (payload, whereConditions) => {
    try {
        const result = await Accounts.update(payload, whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteAccountQueryHandler = async (whereConditions) => {
    try {
        const result = await Accounts.destroy(whereConditions);
        return result;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}