import express from 'express';
import * as userController from './controller/user.controller';

const router = express.Router();

router.get('/', userController.getUser);

router.post('/addUser', userController.addUser);

router.post('/addTestUser', userController.addTestUser);

export default router;
