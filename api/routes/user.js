import express from 'express';
import { createUser, deleteUser, getAllUser, getsingleUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';


// init router
const router = express.Router();

// route Rest Api
router.route('/').get(authMiddleware, getAllUser).post(authMiddleware, createUser);
router.route('/:id').get(authMiddleware, getsingleUser).put(authMiddleware, updateUser).patch(authMiddleware, updateUser).delete(authMiddleware, deleteUser);

//User Auth Api
router.post('/login', userLogin);
router.post('/register', userRegister);

// export router
export default router;