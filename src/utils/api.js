import axios from 'axios';

class StadiumApiClient {
  constructor(base, version) {
    this.base = base;
    this.version = version;
    this.url = `${base}/${version}`;
  }

  config() {
    return axios.get(`${this.url}/app_config/`);
  }

  login(code) {
    return axios.post(`${this.url}/users/${code}/github_oauth/`);
  }

  logout(clientId) {
    return axios.post(`${this.url}/users/logout/`);
  }

  refreshToken(token) {
    return axios.post(`${this.url}/users/${token}/refresh_token/`);
  }

  me() {
    return axios.get(`${this.url}/users/me/`);
  }

  status() {
    return axios.get(`${this.base}/watchman/`);
  }

  environments(params) {
    return axios.get(`${this.url}/environments/`);
  }

  createEnvironment(name, description, repositoryId, tags) {
    return axios.post(`${this.url}/environments/`, {
      name: name,
      description: description,
      repository: repositoryId,
      tags: tags,
    });
  }

  editEnvironment(environment) {
    return axios.put(`${this.url}/environments/${environment.id}/`, environment);
  }

  deleteEnvironment(environment) {
    return axios.delete(`${this.url}/environments/${environment.id}/`);
  }

  searchEnvironments(searchPhrases) {
    return axios.get(`${this.url}/environments/filter/?search=${searchPhrases}`);
  }

  repositories() {
    return axios.get(`${this.url}/repositories/`);
  }

  myRepositories() {
    return axios.get(`${this.url}/repositories/mine/`);
  }

  findGymRepos() {
    return axios.post(`${this.url}/repositories/find_gym_repos/`);
  }
}

export default new StadiumApiClient('http://localhost:8000/api', 'v1');
