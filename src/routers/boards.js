import { Router } from 'express';
import { getAllBordersController } from '../controllers/boards.js';

const boardsRouter = Router();

boardsRouter.get('/bords', getAllBordersController);

export default boardsRouter;
