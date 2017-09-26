import axios from 'axios';

export const fetchPerson = personId =>
  axios.get(`/api/people/${personId}`)
    .then(resp => resp.data);

export const fetchAnimal = animalId =>
  axios.get(`api/animals/${animalId}`)
    .then(resp => resp.data);
