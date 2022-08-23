import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getsingleStudent, updateStudent } from '../controllers/studentControllers.js';


// init router
const router = express.Router();

// route
router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getsingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent);

// export router
export default router;