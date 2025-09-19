import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../modules';
import { generalErrorHandler, generalError } from '../common/middlewares/general.middleware';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use("/api/v2", router);

app.use(generalError);

app.use(generalErrorHandler);

export default app;