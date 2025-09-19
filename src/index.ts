import { PORT } from './config/config';
import dotenv from 'dotenv';
import { connectDB } from './db/connection';
import app from "./main";

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
