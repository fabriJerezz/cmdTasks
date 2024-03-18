import express from 'express';
import {
    getTagsList,
    getTag,
} from '../controllers/tagsControllers.mjs';

const router = express.Router();

router.get('/', getTagsList);

router.get('/:tagId', getTag);

export default router;
