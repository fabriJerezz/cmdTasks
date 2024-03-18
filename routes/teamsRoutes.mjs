import express from 'express';
const router = express.Router();
import {
    newTeam,
    updateTeam,
    deleteTeam,
    getTeam,
    getTeamsList,
    getTeamMember,
} from '../controllers/teamsControllers.mjs';

router.post('/newTeam', newTeam);

router.put('/:teamId', updateTeam);
 
router.delete('/:teamId', deleteTeam);

router.get('/:teamId', getTeam);

router.get('/', getTeamsList)

router.get('/:teamId/:teamMemberId', getTeamMember)

export default router;