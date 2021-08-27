import { instance } from "./instanse";

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 3) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => { return response.data });
    }
}

