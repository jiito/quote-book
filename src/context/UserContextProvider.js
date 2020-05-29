import React, { Component } from 'react';

const UserContext = React.createContext({});

class UserContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAuthenticated: false,
            user: null,
         }
    }
    
    render() { 
        return (  );
    }
}
 
export default UserContextProvider;