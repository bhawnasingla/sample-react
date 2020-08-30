import React from 'react';
import './App.css';
import {addByAmountAction, decrementAction, incrementAction} from './actions';
import {useDispatch, useSelector} from 'react-redux';

export const App = () => {
    let input;
    const counterValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button type='button' onClick={() => dispatch(incrementAction())}>+</button>
            <button type='button' onClick={() => dispatch(decrementAction())}>-</button>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    dispatch(addByAmountAction(Number(input.value)))
                }}>
                <input ref={e => input = e}/>
                <button type="submit">Add</button>
            </form>
            <label>{counterValue}</label>
        </div>
    );
};