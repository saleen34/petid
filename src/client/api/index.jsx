import axios from 'axios';

export const fetchAnimals = () =>
  axios.get('api/animals/')
    .then(resp => resp.data);

export const fetchAnimal = animalId =>
  axios.get('api/animals/'.concat(animalId))
    .then(resp => resp.data);

export const fetchUsers = () =>
  axios.get('/api/user/')
    .then(resp => resp.data);

export const fetchUser = userId =>
  axios.get('/api/user/'.concat(userId))
    .then(resp => resp.data);

export const createUser = user =>
  axios.post('api/user/', user)
    .then(resp => resp.data);

