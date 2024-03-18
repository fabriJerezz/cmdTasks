import express from 'express';
import {
  getProjectsList,
  getProject,
  updateProject,
  newProject,
  deleteProject,
} from '../controllers/projectsControllers.mjs';

const router = express.Router();

router.get('/', getProjectsList);

router.get('/:projectId', getProject);

router.put('/:projectId', updateProject);

router.post('/newProject', newProject);

router.delete('/:projectId', deleteProject);

export default router;
