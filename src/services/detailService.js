import * as request from '@/utils/httpRequest.js';

export const getFood = async (value) => {
    try {
        const res = await request.get('food/info', value);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}