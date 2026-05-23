class UserService {

    static async createUser(apiContext, payload) {

        return await apiContext.post(
            '/api/users',
            {
                data: payload
            }
        );
    }

    static async getUser(apiContext, userId) {

        return await apiContext.get(
            `/api/users/${userId}`
        );
    }

    static async updateUser(apiContext, userId, payload) {

        return await apiContext.put(
            `/api/users/${userId}`,
            {
                data: payload
            }
        );
    }
}

module.exports = UserService;
