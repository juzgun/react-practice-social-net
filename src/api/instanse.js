import * as axios from "axios"

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "444b86ce-347b-4a1a-bba0-6d746929aa7c"
    }
});