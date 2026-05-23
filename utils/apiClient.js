const { request } = require('@playwright/test');
const env = require('../config/env');

class APIClient {

    static async createContext() {

        return await request.newContext({
            baseURL: env.baseURL,

            extraHTTPHeaders: {
                'Content-Type': 'application/json',
                'x-api-key': 'free_user_3E5qUNZ56CMZch746B8crLMlCxO'
            }
        });
    }
}

module.exports = APIClient;