export const showProductsAction = (products) => ({
    type: 'SHOW_PRODUCTS',
    payload: products
});
export const addToCartAction = (productName) => ({
    type: 'ADD_TO_CART',
    payload: productName
});