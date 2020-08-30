const initialState = {products: [], cart: []};

export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SHOW_PRODUCTS':
                return {...state, products: action.payload};

            case 'ADD_TO_CART':
                const productToAdd = state.products.filter(product => product.name === action.payload)[0];
                if (productToAdd.availableQty <= 0)
                    return state;

                const products =
                    state.products.map(product =>
                        product.name === productToAdd.name ?
                            {...product, availableQty: --product.availableQty} :
                            product
                    );

                let cart = state.cart.map(product =>
                    product.name === productToAdd.name ?
                        {...product, availableQty: ++product.availableQty} :
                        product
                );
                if (state.cart.filter(product => product.name === action.payload).length === 0)
                    cart = [...cart, {...productToAdd, availableQty: 1}];

                return {
                    ...state,
                    products: products,
                    cart: cart
                };

            default:
                return state;
        }
    }
;