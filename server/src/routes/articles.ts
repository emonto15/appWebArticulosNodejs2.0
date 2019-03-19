import * as express from 'express';
import articleController  from '../controllers/articleController';
const router = express.Router();
router.get('/articles', articleController.index);
export { router };
