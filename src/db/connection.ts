import sequelize from "../config/sequelize.config";

export async function connectDB(): Promise<void> {
    try{
        await sequelize.authenticate();
        await sequelize.sync({force: true}); // si queremos borrar y sincronizar sequelize.sync({ force: true })
        console.log('Connection has been established successfully.');
    }catch(error){
        console.log('Unable to connect to the database:', error);
    }
}