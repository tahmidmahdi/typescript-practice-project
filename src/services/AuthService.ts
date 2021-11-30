import { IAuthData } from 'Models/types';
import requests from 'services/httpService';
class AuthService {
    login(body: { email: string; password: string }): Promise<IAuthData> {
        return requests.post(`/auth/login`, body);
    }

    logout(): Promise<any> {
        return requests.get(`/store/logout`);
    }
}

export default new AuthService();
