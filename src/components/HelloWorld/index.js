import React from 'react';

const HelloWorld = props => {
    return (
        <div>
            <div>Hello world, again!</div>
            <div>We are passing through {props.property}</div>
        </div>
    )
}

export default HelloWorld;