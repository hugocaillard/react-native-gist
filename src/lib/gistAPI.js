import { token } from './configGitHub.js';
const t = token ? `access_token=${token}` : '';

const c = {
  url: 'https://api.github.com/',
};

export function getUsers(str) {
  if (str.length >= 2) {
    return fetch(`${c.url}search/users?${t}&q=${str}`);
  }
  return false;
}

export function getUser(user) {
  return fetch(`${c.url}users/${user}?${t}`);
}

export function getGists(user) {
  return fetch(`${c.url}users/${user}/gists?${t}`);
}
