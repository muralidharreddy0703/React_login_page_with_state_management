import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p>Name: {props.userName}</p>
            <p>Welcome to the Login page</p>
        </div>
    );
};

export default userOutput;