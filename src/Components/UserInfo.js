import React from 'react';

class UserInfo extends React.Component{
    render(){
        var userInfo = this.props.user;
        if(userInfo){
            return (
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-circle" src={userInfo.avatar_url} alt="avatar" width="140" heigh="140"/>
                        <h2>{userInfo.login}</h2>
                        <p>{userInfo.name}</p>
                        <p>Followers: {userInfo.followers} / Following: {userInfo.following}</p>
                        <p><a className="btn btn-default" href={userInfo.html_url} role="button">View details</a></p>
                    </div>
                </div>
            );
        }
        return (null);
    }
}

export default UserInfo;