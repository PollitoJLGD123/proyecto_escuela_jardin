import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config/config';
import dotenv from 'dotenv';
import router from './modules';
import { connectDB } from './db/connection';
import { generalErrorHandler, generalError } from './common/middlewares/general.middleware';
//usar helmet para cabeceras seguras por si se requiere

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use("/api/v2", router);

app.use(generalError);

app.use(generalErrorHandler);

(async () => {
    try {
        
        dotenv.config();

        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
        
    } catch (error) {
        console.log("Server is not running: ", error);
        process.exit(1);
    }
})();
