import axios from 'axios';

export function registerUser(user) {
  return axios.post('http://localhost:8081/users/', user);
}
export function updateUser(user) {
  return axios.patch(`http://localhost:8081/users/${user.userId}`, { user });
}