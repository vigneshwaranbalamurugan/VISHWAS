import express from 'express'
import cookieParser from 'cookie-parser';
import farmerRouter from './routes/farmerRoute.js';
import requirementRouter from './routes/requirementRoute.js';
import cors from 'cors';
import buyerRouter from './routes/buyerRoute.js';

const app = express();

app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/farmer',farmerRouter);
app.use('/api/v1/contractor',buyerRouter);
app.use('/api/v1/requirement',requirementRouter);

app.get('/',(req,res)=>{
    res.send("Welcome to Vishwas")
})


export default app;
