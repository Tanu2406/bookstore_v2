import express from 'express';
import { createOrder, getOrderDetails } from '../controller/order.controller.js';

const router = express.Router();

// POST new order
router.post('/', createOrder);

// GET order details by orderId
router.get('/:id', getOrderDetails);

export default router;
