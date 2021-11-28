import { instance } from "./instanse";

export const securityAPI = {
    async getCaptchaUrl() {
        return await instance.get(`security/get-captcha-url`)
            .then(response => {return response.data });
    }
}