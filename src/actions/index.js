export const incrementAction = () => ({
    type: 'INCREMENT'
});
export const decrementAction = () => ({
    type: 'DECREMENT'
});
export const addByAmountAction = (amount) => ({
    type: 'ADD_BY_AMOUNT',
    payload: amount
});