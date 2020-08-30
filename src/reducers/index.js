const initialState = {counter: {value: 0}};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: {value: state.counter.value + 1}};
        case 'DECREMENT':
            return {...state, counter: {value: state.counter.value - 1}};
        default:
            return state;
    }
};