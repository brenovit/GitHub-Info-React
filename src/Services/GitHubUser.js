import Axios from 'axios';

const GitHubApi = 'https://api.github.com/users/';

var GitHubUser = {
    getByUsername (username){
        return Axios.get(GitHubApi + username);
    },
    getReposByUsername(username){
        return Axios.get(GitHubApi + username + '/repos');
    }
};

export default GitHubUser;