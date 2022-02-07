import express from 'express';
import cors from 'cors';
import { envConstants } from 'core/constants';

export const createApp = () => {
  const app = express();
  // app.use(cors());
  return app;
};
