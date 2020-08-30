import React from 'react';
import './App.css';
import {decrementAction, incrementAction} from './actions';
import {useDispatch, useSelector} from 'react-redux';

export const App = () => {
    const counterValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button type='button' onClick={() => dispatch(incrementAction())}>+</button>
            <button type='button' onClick={() => dispatch(decrementAction())}>-</button>
            <label>{counterValue}</label>
        </div>
    );
};
