import { instance } from "./instanse";

export const loginAPI = {
    async postLogin(formData) {
        return await instance.post(`auth/login`, { email: formData.email, password: formData.password, rememberMe: formData.checkbox });
    },
    async deleteLogin() {
        return await instance.delete(`auth/login`);
    },
    async me() {
        return await instance.get(`auth/me`);
    }
}