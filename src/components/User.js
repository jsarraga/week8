import React from 'react';
import userContext from './userContext';


const user = () => {
    return(
    <div>
        <span> This is new HTML</span>
        <userContext.Consumer>
            {user => {
                return (<h1>{user}</h1>)
            }}
        </userContext.Consumer>

    </div>
    )
}

export default user;