export const showProductsAction = (products) => ({
    type: 'SHOW_PRODUCTS',
    payload: products
});
export const addToCartAction = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});