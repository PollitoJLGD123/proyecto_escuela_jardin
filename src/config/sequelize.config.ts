import { Sequelize } from 'sequelize-typescript';
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } from '../config/database.config';
import { modelsList } from '../common/models';

const sequelize = new Sequelize({
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    dialect: 'mysql',
    logging: false,
    models: modelsList,
});

export default sequelize;