import {} from "dotenv/config.js";
import express from 'express';
import connectdatabase from './database/dbcnct.js';
import clientroutes from './routes/clientroutes.js';
import productroutes from './routes/productroutes.js';
import orderroutes from './routes/orderroute.js';
import adminroutes from './controlers/admincontroler.js'
import cors from 'cors';
const app = express();
const port = process.env.PORT;
const db_URl = process.env.database_URl ;


connectdatabase(db_URl);
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static('./uploads'))

app.use('/client', clientroutes)
app.use('/product', productroutes)
app.use('/orders', orderroutes)
app.use('/adminportal', adminroutes)


app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})