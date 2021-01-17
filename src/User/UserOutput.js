import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hi my username is {props.name}</p>
            <p>I lived on {props.address}</p>
        </div>
    )
}

export default userOutput;