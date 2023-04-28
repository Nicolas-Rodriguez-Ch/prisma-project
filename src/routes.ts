import { Application } from "express";
import healthcheck from './api/healthcheck';
import products from './api/products/';
import reviews from './api/review';
import users from './api/users';
import authLocal from './auth/local';

const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/products', products);
  app.use('/api/reviews', reviews);
  app.use('/api/users', users);

  // auth routes
  app.use('/auth/local', authLocal);
}

export default routes;