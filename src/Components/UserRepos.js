import React from 'react';

class UserRepos extends React.Component {
    constructor(props) {
        super(props);
        this.repoDetail = this.repoDetail.bind(this);
        // this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.state = {
            reposCount: 0
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ reposCount: props.repos.length });
    }

    //função para mapear o repositorio, recebendo o objeto do repositorio [repo] e uma chave(indice) [key]
    repoDetail(repo, key) {
        return (
            <div key={key} className="thumbnail">
                <div className="caption">
                    <h3>{repo.name}
                        <span className="badge">{repo.stargazers_count} STARS</span>
                    </h3>
                    <p>{repo.description}</p>
                    <p>
                        <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
                        <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues}) </a>
                    </p>
                </div>
            </div>
        );
    }

    render() {
        //Mapeio todos os itens dentro de um array [props.repos] usando o 'map', que recebe uma função 'repoDetail'.
        //salvo todo o mapeamento em uma variavel [repos]
        var reposDetail = this.props.repos.map(
            this.repoDetail
        );

        //Retorno todo o conteudo da variavel repos
        return (
            <div><h2>{this.state.reposCount} repositories</h2>
                {reposDetail}</div>
        )
    }
}

export default UserRepos;