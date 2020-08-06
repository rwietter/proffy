import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsClassesController from './controllers/ConnectionsClassesController';

const CreateClasses = new ClassesController();
const createConnections = new ConnectionsClassesController();

const routes = express.Router();

routes.get('/classes', CreateClasses.index);
routes.post('/classes', CreateClasses.create);

routes.get('/connections', createConnections.index);
routes.post('/connections', createConnections.create);

export default routes;
