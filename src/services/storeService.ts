// import { IStore } from 'Models/types';
import requests from 'services/httpService';
class StoreService {
    getStores(): Promise<any> {
        return requests.get('/store');
    }

    getStoreByID(id: string): Promise<any> {
        return requests.get(`/store/${id}`);
    }

    addStore(body: {}): Promise<any> {
        return requests.post(`/store/`, body);
    }

    updateStore(id: string, body): Promise<any> {
        return requests.post(`/store/${id}`, body);
    }

    deleteStore(id: string): Promise<any> {
        return requests.delete(`/store/${id}`);
    }
}

export default new StoreService();
