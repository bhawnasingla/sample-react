const initialState = {counter: {value: 0}};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: {value: state.counter.value + 1}};
        case 'DECREMENT':
            return {...state, counter: {value: state.counter.value - 1}};
        case 'ADD_BY_AMOUNT':
            return {...state, counter: {value: state.counter.value + action.payload}};
        default:
            return state;
    }
};