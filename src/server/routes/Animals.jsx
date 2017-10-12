import express from 'express';
import asyncMiddleware from '../../utils/asyncMiddleware';
import AnimalController from '../controllers/AnimalController';

class Animals {
  constructor () {
    this.routes = express.Router();

    this.routes.get('/', asyncMiddleware(async(req, res, next) => {
      const animals = await AnimalController.getAll();
      if (!animals) {
        res.status(404);
      }
      res.json(animals);
    }));

    this.routes.get('/:id', asyncMiddleware(async(req, res, next) => {
      const animal = await AnimalController.getOne(req.params.id);
      if (!animal) {
        res.status(404);
      }
      res.json(animal);
    }));

    this.routes.delete('/:id', asyncMiddleware(async(req, res, next) => {
      const animal = await AnimalController.remove(req.params.id);
      if (!animal) {
        res.status(404);
      }
      res.json(animal);
    }));

    this.routes.put('/:id', asyncMiddleware(async(req, res, next) => {
      const animal = await AnimalController.update(req.params.id, req.body);
      if (!animal) {
        res.status(404);
      }
      res.json(animal);
    }));

    this.routes.post('/', asyncMiddleware(async(req, res, next) => {
      const animal = await AnimalController.create(req.body);
      res.json(animal);
    }));
  }
}

export default Animals;
