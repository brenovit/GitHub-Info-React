import React from 'react';
import PropTypes from 'prop-types';
import UserRepos from './UserRepos';

//criação de função para tratar o componente
function UserInfo(props){
    var userInfo = props.user; //Atribuo o props a uma variavel
    //se o props estiver preenchido, monto componente HTML, se não salvo null
    var userInfoComponent = userInfo ? 
    (
        <div className="row">
            <div className="col-lg-4">
                <img className="img-circle" src={userInfo.avatar_url} alt="avatar" width="140" heigh="140"/>
                <h2>{userInfo.login}</h2>
                <p>{userInfo.name}</p>
                <p>Followers: {userInfo.followers} / Following: {userInfo.following}</p>
                <p><a className="btn btn-default" href={userInfo.html_url} role="button">View details</a></p>
            </div>
            <div className="col-lg-8">
                <UserRepos repos={props.repos}/> 
            </div>
        </div>
    ) : null;

    return userInfoComponent; // retorno o component do user
}

//uso de propTypes, validador do tipo de um objeto ou função
UserInfo.propTypes = {
    user : PropTypes.object,
    repos : PropTypes.array
}

export default UserInfo;