import React from 'react';
import GitHubUser from '../Services/GitHubUser';

class SearchUser extends React.Component{
    //Componentizando a area de busca
    constructor(props){
        super(props);
        //Associo a função a classe dando um bind
        this.seguraSubmit = this.seguraSubmit.bind(this);       
    }

    seguraSubmit(event){
        event.preventDefault();//impede a pagine de reiniciar
        var username = this.refs.userGit.value;
    
        console.log(username); //pega o valor do uma ref do form igual a 'userGit'
        
        GitHubUser.getByUsername(username).then(
            function(response){
                this.props.updateUser(response.data);
            }.bind(this)
        );

        GitHubUser.getReposByUsername(username).then(
            function(response){
                this.props.updateRepos(response.data);
            }.bind(this)
        );
    }

    render(){
        return(
            <div className="jumbotron">                
                <div className="row">
                    <h1>GitHub Info</h1>
                    <form onSubmit={this.seguraSubmit}>
                        <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            ref="userGit" //defini uma referencia para o input
                            className="form-control"
                            placeholder="Ex: matheusml"
                            value="brenovit"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">Buscar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchUser;