import axios from "../../config/axios";

export const logInService = async (email: string, password: string): Promise<any> => {
    const res = await axios().post('/login', { email, password });
    return res.data.data;
}
