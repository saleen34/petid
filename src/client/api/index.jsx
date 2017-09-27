import axios from 'axios';

export const fetchPerson = personId =>
  axios.get('/api/people/'.concat(personId))
    .then(resp => resp.data);

export const fetchAnimal = animalId =>
  axios.get('api/animals/'.concat(animalId))
    .then(resp => resp.data);

export const createUser = (user) => {
  return axios.post('api/user/create/', user)
    .then(resp => resp.data);
};
