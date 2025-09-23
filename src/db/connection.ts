import sequelize from "../config/sequelize.config";

export async function connectDB(): Promise<void> {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(error){
        console.log('Unable to connect to the database:', error);
    }
}