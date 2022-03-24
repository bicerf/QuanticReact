import { BaseHttpClientService } from "./base-service";

export const AccountService = {
    getAllUsers: async () => {
        try {
            let response = await BaseHttpClientService.get(
                'https://localhost:5001/api/Account/getallusers'
            );
            console.log('UserService', response);
            return response;
        } catch (error) {
            console.log('getAllUsers Error', error);
        }
    },
    createAccount: async (param) => {
        try {
            let response1 = await BaseHttpClientService.post(
                'https://localhost:5001/api/Account/createuser',param

            );
            console.log("CreateAccount", response1);
            return response1;
        } catch (error) {
            console.log('createUser Error', error);
        }
    },
    loginAccount: async (param) => {
        try {
            let response2 = await BaseHttpClientService.post(
                'https://localhost:5001/api/Account/login',param

            );
            console.log("Login", response2);
            return response2;
        } catch (error) {
            console.log('login Error', error);
        }

    },
};