import express from 'express';
import asyncMiddleware from '../../utils/asyncMiddleware';
import UserController from '../controllers/UserController';

class Users {
  constructor () {
    this.routes = express.Router();

    this.routes.get('/', asyncMiddleware(async(req, res, next) => {
      const users = await UserController.getAll();
      res.json(users);
    }));

    this.routes.get('/:id', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.getOne(req.params.id);
      res.json(user);
    }));

    this.routes.delete('/:id', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.remove(req.params.id);
      res.json(user);
    }));

    this.routes.put('/:id', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.update(req);
      res.json(user);
    }));

    this.routes.post('/', asyncMiddleware(async(req, res, next) => {
      const user = await UserController.create(req.body);
      res.json(user);
    }));
  }
}

export default Users;
