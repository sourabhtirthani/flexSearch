import  express  from "express";
import cityRoutes from './routes/cityRoutes';

const app=express();

const PORT=3000;

app.use('/api',cityRoutes)

app.listen(PORT,()=>{
    console.log(`server is listing on ${PORT}`);
})