import React from 'react';
import './App.css';
import {addAction} from './actions';
import {useDispatch, useSelector} from 'react-redux';
import List from "./List";

export const App = () => {
    const items = useSelector(state => state);
    const dispatch = useDispatch();
    let input;
    return (
        <div>
            <label>My List</label>
            <List items={items}/>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addAction(input.value));
                input.value = ''
            }}>
                <input ref={e => (input = e)}/>
                <button type="submit">
                    Add me!
                </button>
            </form>
        </div>
    );
};
// const mapStateToProps = (state) => {
//     return {
//         items: state
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItem: text => dispatch(addAction(text))
//     }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
