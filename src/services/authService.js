import * as request from '@/utils/httpRequest.js';

export const loginUser = async (payload) => {
    try {
        const res = await request.post('auth/login', payload);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}

export const signupUser = async (payload) => {
    try {
        const res = await request.post('auth/register', payload);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}