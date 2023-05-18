import axios from 'axios';
const BASE_URL = 'http://localhost:3000/v1/api/';

const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res
}

export const post = async (path, options = {}, config = {}) => {
    const res = await request.post(path, options, config);
    return res;
}

export const patch = async (path, options = {}, config = {}) => {
    const res = await request.patch(path, options, config);
    return res;
}