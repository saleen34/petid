import axios from 'axios';

export const fetchPerson = personId => {
  return axios.get(`/api/people/${personId}`)
    .then(resp => resp.data);
};

export const fetchAnimal = animalId => {
  return axios.get(`api/animals/${animalId}`)
    .then(resp => resp.data);
};
