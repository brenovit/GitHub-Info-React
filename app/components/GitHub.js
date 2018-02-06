import React from 'react';
import SearchUser from './SearchUser';

class GitHub extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (            
            <div className="container">
            <SearchUser />
            </div>
        );
    }
}

export default GitHub;