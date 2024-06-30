import axios from "axios";

export const processRequest = async(method, url, data = {}, headers = {}) => {
    try {
        const config = {
            method,
            url,
            headers,
            data
        };

        console.log(headers);

        // For GET requests, data should not be included in the config
        if (method.toLowerCase() === 'get') {
            const response = await axios.get(url, headers);
            return response.data;
        }
        else {
            const response = await axios(config);
            return response.data;
        }
    } 
    catch (error) {
        if (error.response) {
            throw new Error(`API responded with status code ${error.response.status}`);
        } 
        else if (error.request) {
            throw new Error('No response received from API');
        } 
        else {
            throw new Error('Error setting up request');
        }
    }
}