import express from 'express'
import cookieParser from 'cookie-parser';
import farmerRouter from './routes/farmerRoute.js';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/farmer',farmerRouter);

app.get('/',(req,res)=>{
    res.send("Welcome to QuickPick")
})


export default app;
