import React from "react";
import {connect} from 'react-redux';

class List extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state
    }
};

export default connect(mapStateToProps)(List);