// routes/mainRouter.ts

import express from 'express';
import tasksRouter from './tasks';
import usersRouter from './users';

const router = express.Router();

// Use the tasksRouter for the '/tasks' route
router.use('', tasksRouter);

// Use the usersRouter for the '/users' route
router.use('', usersRouter);

export default router;
