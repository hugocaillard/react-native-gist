const c = {
  url: 'https://api.github.com/',
};

export function getUsers(str) {
  if (str.length >= 2) {
    return fetch(`${c.url}search/users?q=${str}`);
  }
  return false;
}

export function getUser(user) {
  return fetch(`${c.url}users/${user}`);
}

export function getGists(user) {
  return fetch(`${c.url}users/${user}/gists`);
}
