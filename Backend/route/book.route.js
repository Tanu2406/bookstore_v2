import express from 'express';
import {getBook} from '../controller/book.controller.js';

const router = express.Router();

router.get('/',getBook);
router.get("/:id", getBookById);

export default router;