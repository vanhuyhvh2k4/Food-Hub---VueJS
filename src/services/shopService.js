import * as request from '@/utils/httpRequest.js';

export const getInfo = async (value) => {
    try {
        const res = await request.get('shop/getInfo', value);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}