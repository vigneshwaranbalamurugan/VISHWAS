import app  from "./app.js";
import { config } from 'dotenv';
import connectDB from "./lib/database.js";

config();
connectDB();


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
