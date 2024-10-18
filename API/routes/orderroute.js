import express from "express";
const router = express.Router();
import OrderControllers from "../controlers/ordercontroller.js";
import fetchid from "../midleware/fetchid.js";


router.get('/getorder/:id', OrderControllers.getOrderById)

router.get('/getallorders', OrderControllers.getAllOrders)

router.post('/placeneworder', fetchid, OrderControllers.placeNewOrder)

router.put('/updateorder/:id', OrderControllers.updateOrder)

router.delete('/delorder/:id', OrderControllers.deleteOrder)

export default router;