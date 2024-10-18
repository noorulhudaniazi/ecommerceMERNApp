import express from "express";
const router = express.Router();
import clientcontroller from "../controlers/clientcontroler.js";
import fetchid from "../midleware/fetchid.js";


router.post('/createUser', clientcontroller.createClient)

router.get('/getclients', clientcontroller.getAllClient)

router.post('/getclient', fetchid, clientcontroller.getClientById)

// router.post('/pushproduct/:id', fetchid, clientcontroller.pushProductCart)

router.post('/pushproduct/:pid', fetchid, clientcontroller.pushProductCart)

router.post('/delProduct/:pid', fetchid, clientcontroller.delFromCart)

router.get('/productcart', fetchid, clientcontroller.getCartObjs)

router.post('/login', clientcontroller.loginhandler)

router.put('/updateclient', clientcontroller.updateClient)

router.delete('/delclient', clientcontroller.deleteClient)

export default router