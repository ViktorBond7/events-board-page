import { Router } from 'express';
import {
  getAllBordersController,
  getAllRegisteredUsersController,
} from '../controllers/boards.js';
import { registerForEvent } from '../controllers/auth.js';

const boardsRouter = Router();

boardsRouter.get('/bords', getAllBordersController);

boardsRouter.post('/register', registerForEvent);

boardsRouter.get('/users', getAllRegisteredUsersController);

export default boardsRouter;
