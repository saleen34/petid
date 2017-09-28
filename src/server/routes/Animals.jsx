import express from 'express';
import AnimalController from '../controllers/AnimalController';

class Animals {
  constructor () {
    this.routes = express.Router();

    this.routes.get('/', (req, res) => {
      AnimalController.getAll(req, res);
    });

    this.routes.get('/:id', (req, res) => {
      AnimalController.getOne(req, res);
    });

    this.routes.delete('/:id', (req, res) => {
      AnimalController.remove(req, res);
    });
  }
}

export default Animals;
