import axios from 'axios';

export const fetchAnimals = () =>
  axios.get('api/animals/')
    .then(resp => resp.data);

export const fetchAnimal = animalId =>
  axios.get('api/animals/'.concat(animalId))
    .then(resp => resp.data);

export const fetchUsers = () =>
  axios.get('/api/users/')
    .then(resp => resp.data);

export const fetchUser = userId =>
  axios.get('/api/users/'.concat(userId))
    .then(resp => resp.data);

export const createUser = user =>
  axios.post('api/users/', user)
    .then(resp => resp.data);
