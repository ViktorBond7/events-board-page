import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
// import errorMiddlware from './middlewares/errorMiddleware.js';
// import notFoundtMiddleware from './middlewares/notFoundMiddleware.js';
import { env } from './utils/env.js';
import { getAllBorder } from './services/bords.js';
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

  app.get('/bords', async (req, res, next) => {
    try {
      const bords = await getAllBorder();
      res.status(200).json({
        status: 200,
        message: 'Successfully found events board!',
        data: bords,
      });
    } catch (error) {
      next(error);
    }
  });

  // app.use(notFoundtMiddleware);
  // app.use(errorMiddlware);

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};

export default setupServer;
