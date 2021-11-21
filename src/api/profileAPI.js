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
    },
    async savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile, )
        return await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}