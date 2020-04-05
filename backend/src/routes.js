import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AddressController from './app/controllers/AddressController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

export default routes;
