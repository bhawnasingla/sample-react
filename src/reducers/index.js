const initialState = {products: [], cart: []};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_PRODUCTS':
            return {...state, products: action.payload};

        case 'ADD_TO_CART':
            return {
                ...state,
                products: state.products.map(product => {
                    if (product.name === action.payload.name && product.availableQty > 0)
                        return {
                            ...product,
                            availableQty: --product.availableQty
                        };
                    return product;
                })
            };

        default:
            return state;
    }
};