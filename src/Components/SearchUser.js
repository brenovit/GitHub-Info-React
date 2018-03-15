import React from 'react';
import PropTypes from 'prop-types';
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
                //chamando funcao de um component pai
                this.props.updateUser(response.data);
            }.bind(this)
        );

        GitHubUser.getReposByUsername(username).then(
            function(response){
                //chamando funcao de uma componente pai
                this.props.updateRepos(response.data);
            }.bind(this) //usa o bind para associar o componente pai a este
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
                            defaultValue="brenovit"
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

//uso de propTypes, para validar a estrutura do componente a partir de regras em seu escopo,
//validando o tipo de um objeto ou função
SearchUser.propTypes = {
    updateUser : PropTypes.func.isRequired,
    updateRepos : PropTypes.func.isRequired
}

export default SearchUser;