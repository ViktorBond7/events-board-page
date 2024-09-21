import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
// import errorMiddlware from './middlewares/errorMiddleware.js';
// import notFoundtMiddleware from './middlewares/notFoundMiddleware.js';
import { env } from './utils/env.js';
import { getAllBorder } from './services/bords.js';
import boardsRouter from './routers/boards.js';
// import { getAllContacts, getContact } from './services/contacts.js';
// import mongoose from 'mongoose';

const PORT = Number(env('PORT', '3000'));

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(boardsRouter);
  // app.use(notFoundtMiddleware);
  // app.use(errorMiddlware);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};

export default setupServer;
