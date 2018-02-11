import React from 'react';
import SearchUser from './SearchUser';

class GitHub extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            user: null,
            repos: []
        }
        this.updateRepos = this.updateRepos.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(searchUser){
        this.setState({user: searchUser});
    }

    updateRepos(repositories){
        this.setState({repos: repositories});
    }

    //Inserindo um componente como tag dentro do HTML
    render() {
        var updateRepos = this.updateRepos.bind(this);
        var updateUser = this.updateUser.bind(this);

        return (            
            <div className="container">
                <SearchUser 
                    updateUser={updateUser}
                    updateRepos={updateRepos}
                />
            </div>
        );
    }
}

export default GitHub;