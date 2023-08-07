import Environment, { baseUrl } from "./Environment";

class HttpsService {
    async get(endPoint) {
        const response = await Environment.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async getById(endPoint, id) {
        const response = await Environment.get(`${baseUrl}/${endPoint}/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async create(endPoint, payload) {
        const response = await Environment.post(`${baseUrl}/${endPoint}`, payload)
            .then((response) => {
                return response.data;
            }).catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async update(endPoint, id, payload) {
        const response = await Environment.put(`${baseUrl}/${endPoint}/${id}`, payload)
            .then((response) => {
                return response.data;
            }).catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async delete(endPoint, id) {
        const response = await Environment.delete(`${baseUrl}/${endPoint}/${id}`)
            .then((response) => {
                return response.data;
            }).catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }
}

export default new HttpsService();