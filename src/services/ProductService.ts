import { IProduct } from 'Models/types';
import requests from 'services/httpService';
class ProductService {
    getProducts(): Promise<IProduct[]> {
        return requests.get('/product');
    }

    getProductByID(id: string): Promise<IProduct> {
        return requests.get(`/product/${id}`);
    }

    addProduct(body: {}): Promise<IProduct> {
        return requests.post(`/product/`, body);
    }

    updateProduct(id: string, body): Promise<IProduct> {
        return requests.post(`/product/${id}`, body);
    }

    deleteProduct(id: string): Promise<IProduct> {
        return requests.delete(`/product/${id}`);
    }
}

export default new ProductService();
