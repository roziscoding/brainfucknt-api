import type { Express } from 'express';
import run from './routes/run';
import transpile from './routes/transpile';

module.exports = (app: Express) => {
  app.post('/', run);
  app.post('/transpile', transpile);
};
