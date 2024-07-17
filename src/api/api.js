const { default: axios } = require("axios");

const instance = axios.create({
    baseURL : 'https://fakestoreapi.com/'
})

export const getProductsApi = async() => instance.get('/products')