import React from 'react';

class UserProfile extends React.Component {
    render() {
        var userProfile = this.props.user; //Atribuo o props a uma variavel
        return (
            <div>
                <img className="img-circle" src={userProfile.avatar_url} alt="avatar" width="140" heigh="140" />
                <h2>{userProfile.login}</h2>
                <h4>{userProfile.name}</h4>
                <p>{userProfile.bio}</p>
                <p>Followers: {userProfile.followers} / Following: {userProfile.following}</p>
                <p><a className="btn btn-default" 
                    href={userProfile.html_url} 
                    role="button">View details</a></p>
            </div>
        );
    }
}

export default UserProfile;