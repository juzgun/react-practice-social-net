import { instance } from "./instanse";

export const loginAPI = {
    postLogin(formData) {
        return instance.post(`auth/login`, { email: formData.email, password: formData.password, rememberMe: formData.checkbox });
    },
    deleteLogin() {
        return instance.delete(`auth/login`);
    },
    me() {
        return instance.get(`auth/me`);
    }
}