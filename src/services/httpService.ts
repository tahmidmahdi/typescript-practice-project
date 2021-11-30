import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000,
});

// 1st approach
// const getProduct = instance
//     .get('/product')
//     .then((response) => response.data.data);

const responseBody = (response: AxiosResponse) => response.data.data;

// 2nd approach with dynamic url
// const get = (url: string) => {
//     return instance
//         .get(url)
//         .then(responseBody);
// };

// 3rd approach wirh short form
// const get = (url: string) => {
//     return instance.get(url).then(responseBody);
// };
// const post = (url: string, body: object) => {
//     return instance.post(url, body).then(responseBody);
// };
// const patch = (url: string, body: object) => {
//     return instance.patch(url, body).then(responseBody);
// };
// const _delete = (url: string) => {
//     return instance.patch(url).then(responseBody);
// };

// 4th approach
const requests = {
    get: (url: string) => instance.get(url).then(responseBody),

    post: (url: string, body: object) =>
        instance.post(url, body).then(responseBody),

    patch: (url: string, body: object) =>
        instance.patch(url, body).then(responseBody),

    delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
