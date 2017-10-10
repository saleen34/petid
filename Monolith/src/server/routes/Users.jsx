import express from 'express';
import asyncMiddleware from '../../utils/asyncMiddleware';
import UserController from '../controllers/UserController';

class Users {
  constructor () {
    this.routes = express.Router();

    this.routes.get('/', asyncMiddleware(async(req, res, next) => {
      const users = await UserController.getAll();
      if (!users) {
        res.status(404);
      }
      res.json(users);
    }));

    this.routes.get('/:id', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.getOne(req.params.id);
      if (!user) {
        res.status(404);
      }
      res.json(user);
    }));

    this.routes.delete('/:id', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.remove(req.params.id);
      if (!user) {
        res.status(404);
      }
      res.json(user);
    }));

    this.routes.put('/:id', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.update(req.params.id, req.body);
      if (!user) {
        res.status(404);
      }
      res.json(user);
    }));

    this.routes.post('/', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.create(req.body);
      res.json(user);
    }));
  }
}

export default Users;
