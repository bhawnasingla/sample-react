import React from 'react';
import './App.css';
import {addAction} from './actions';
import {connect} from 'react-redux';
import List from "./List";

class App extends React.Component {
    render() {
        let input;
        return (
            <div>
                <label>My List</label>
                <List items={this.props.items}/>
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
const mapStateToProps = (state) => {
    return {
        items: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: text => dispatch(addAction(text))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
