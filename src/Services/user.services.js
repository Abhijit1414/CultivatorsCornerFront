import httpClient from '../http-common';

const addToCart = async (id, form) => {
    try {
        const response = await httpClient.post(`/user/addtocart/${id}`, form);
        return response.data;  // Return the data if the request is successful.
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;  // You can throw the error to handle it higher up if needed.
    }
};


const checkOut = () => {
    return httpClient.get('/user/checkout')
}

const removeItem = (id) => {
    return httpClient.post(`/user/removefromcart/${id}`)
}

const placeOrder = () => {
    return httpClient.post(`/user/placeorder`)
}

const orders = (form) => {
    return httpClient.post(`/user/orders`, form)
}

export default { addToCart, checkOut, removeItem, placeOrder, orders }