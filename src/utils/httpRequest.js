import axios from 'axios';


const request = axios.create({
    baseURL: process.env.BASE_URL,
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