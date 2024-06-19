import { Accounts } from "./models/accounts.model.js";

export const createAccountQueryHandler = async (payload) => {
    try {
        const result = await Accounts.create(payload);
        return result;
    }
    catch (error) {
        return error;
    }
}