import * as request from '@/utils/httpRequest.js';

export const search = async (value) => {
    try {
        const res = await request.post('home/search', value);
        return res.data;
    } catch (error) {
        return error.response.data
    }
}