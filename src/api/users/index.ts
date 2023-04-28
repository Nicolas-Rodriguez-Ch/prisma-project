import { Router } from 'express';
import { 
  deleteUserController,
  getAllUsersController, 
  getUserByIdController,
  updateUserController,
 } from './user.controller';

import { auth } from '../../middlewares/auth';

const router = Router();

router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);
router.put('/', auth, updateUserController);
router.delete('/:id', auth, deleteUserController);

export default router;