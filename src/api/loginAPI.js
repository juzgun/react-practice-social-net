import { instance } from "./instanse";

export const loginAPI = {
    postLogin(formData) {
        debugger;
        return instance.post(`auth/login`, { email: formData.login, password: formData.pass, rememberMe: formData.checkbox });
    },
    deleteLogin() {
        return instance.delete(`auth/login`);
    }
}