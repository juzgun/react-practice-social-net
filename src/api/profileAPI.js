import { instance } from "./instanse";

export const profileAPI = {
    async getProfile(userId) {
        return await instance.get(`profile/${userId}`)
            .then(response => { return response.data });
    },
    async getStatus(userId) {
        return await instance.get(`profile/status/${userId}`)
    },
    async updateStatus(status) {
        return await instance.put(`profile/status`, { status: status })
    }
}

