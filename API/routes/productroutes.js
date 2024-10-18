import express from "express";
const router = express.Router();
import productController from "../controlers/productcontrollers.js";
import upload from "../schema/multer.js";
import productmodel from "../schema/productmodal.js";



router.get('/getallprods', productController.getAllProducts)

router.get('/totalprods', async(req, res)=>{
    const totalrec = await productmodel.count();
    const data = {
        totalrecords: totalrec
    }
    const final = JSON.stringify(data)
    res.send(`${final}`)
})

router.get('/singleprod/:id', productController.getProductById)

router.get('/prodbycat/:category', productController.getProductByCat)

router.post('/addprod', upload.array('image') , productController.createProduct )

router.put('/updateprod/:id', productController.updateProduct)

router.delete('/delprod/:id', productController.deleteProduct)

export default router;
// productController.createProduct