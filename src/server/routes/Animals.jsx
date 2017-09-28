import express from 'express';
import AnimalController from '../controllers/AnimalController';

class Animals {
  constructor () {
    this.routes = express.Router();

    this.routes.get('/', (req, res) => {
      AnimalController.list(req, res);
    });
  }
}

export default Animals;
