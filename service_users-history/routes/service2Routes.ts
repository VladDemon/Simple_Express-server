import { Router } from 'express';
import { createHistory } from '../controllers/historyCreateController';
import { getHistory } from '../controllers/getHistoryController';

const router = Router();

router.post('/historyCreate', createHistory);
router.get('/history', getHistory);

export default router;