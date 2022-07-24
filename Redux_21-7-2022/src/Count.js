import React from 'react';
import { connect } from 'react-redux';


function Count(props) {
    return (
        <div>
            <p>The Counter : {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
            <button onClick={props.onDecrementClick}>Decrement</button>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action);
        },


        onDecrementClick: () => {
            const action = { type: 'DECREMENT' };
            dispatch(action);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);