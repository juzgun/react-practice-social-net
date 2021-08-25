import { instance } from "./instanse";

export const headerAPI = {
    getLogin() {
        return instance.get(`auth/me`)
            .then(response => { return response.data });
    }
}

