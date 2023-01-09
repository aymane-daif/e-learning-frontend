import axios from 'axios';

export function registerUser(user) {
  return axios.post('http://localhost:8081/users/', user);
}
<<<<<<< HEAD
export function updateUser(user) {
  return axios.patch(`http://localhost:8081/users/${user.userId}`, { user });
}
=======

>>>>>>> 4597386f09fc1976eb23f8782e22c848ddec08ca
