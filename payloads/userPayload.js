const testData = require('../testData/data.json');

class UserPayload {

    static createUserPayload() {

        return {
            name: testData.createUser.name,
            email: testData.createUser.email,
            job: testData.createUser.job
        };
    }

    static updateUserPayload() {

        return {
            name: testData.updateUser.name,
            email: testData.updateUser.email,
            job: testData.updateUser.job
        };
    }
}

module.exports = UserPayload;