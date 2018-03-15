import React from 'react';

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
        </div>
    ) : null;

    return userInfoComponent; // retorno o component do user
}

export default UserInfo;