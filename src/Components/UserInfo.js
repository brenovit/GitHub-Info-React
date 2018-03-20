import React from 'react';
import PropTypes from 'prop-types';
import UserRepos from './UserRepos';
import UserProfile from './UserProfile';

//criada uma arrow function
//usada quando se tem apenas uma linha na function
var sum = (x,y) => x+y;

//criação de função para tratar o componente
function UserInfo({user, repos}){
    var userProfile = user; //Atribuo o props a uma variavel
    var userRepos = repos;
    //se o props estiver preenchido, monto componente HTML, se não salvo null
    var userInfoComponent = userProfile ? 
    (
        <div className="row">
            <div className="col-lg-4">
                <UserProfile user={userProfile}/>
            </div>
            <div className="col-lg-8">
                <UserRepos repos={userRepos}/> 
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