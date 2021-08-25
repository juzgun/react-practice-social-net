import { instance } from "./instanse";

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => { return response.data });
    }
}

