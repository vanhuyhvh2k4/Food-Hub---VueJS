import * as request from '@/utils/httpRequest.js';

export const resetPassword = async (email, token, value ={}) => {
    try {
        const res = await request.patch(`auth/password/${email}/?token=${token}`, value);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}