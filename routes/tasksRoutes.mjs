import express from 'express';
const router = express.Router();
import {
    getTasksList,
    getTask,
    newTask,
    updateTask,
    deleteTask
} from '../controllers/tasksControllers.mjs'


router.get('/', getTasksList);


router.get('/:taskId', getTask);

router.post('/newTask', newTask);

router.put('/:taskId', updateTask);

router.delete('/:taskId', deleteTask);

export default router;