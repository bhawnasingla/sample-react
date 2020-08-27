import React from 'react';
import './App.css';
import List from "./List";
import {addAction} from './actions';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        let input;
        return (
            <div>
                <label>My List</label>
                <List/>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.addItem(input.value);
                    input.value = ''
                }}>
                    <input ref={e => (input=e)}/>
                    <button type="submit">
                        Add me!
                    </button>
                </form>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: text => dispatch(addAction(text))
    }
};
export default connect(null, mapDispatchToProps)(App);
