import { 
    createAccountQueryHandler 
} from "../queries.js";

export const createAccountService = async (payload) => {
    try {
        const createAccountQueryResult = await createAccountQueryHandler(payload);
        console.log(createAccountQueryResult);
    }
    catch (error) {
        return {
            error: error
        }
    }
}