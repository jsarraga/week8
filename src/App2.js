import React, { useState } from 'react';
import userContext from './components/userContext'
import User from './components/User';


function App () {
    const [user, setUser] = useState("");

    return (
        <div className="App">
            <input id="user" name="user" type="text" 
            onChange={event => {setUser(event.target.value)}} />
            <userContext.Provider value={user}>   {/*  anything bw these two userContext tags now has access to this value. 
            basically like an export/importing a variable. keeps track of changes in state.  */}
                <User />
            </userContext.Provider>
        </div>
    )
}


export default App;