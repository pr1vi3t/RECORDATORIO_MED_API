import 'dotenv/config';
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT as any || 3306,   
    username: process.env.DB_USERNAME || 'mysql',
    password: process.env.DB_PASSWORD || 'mysql',
    database: process.env.DB_DATABASE || 'name',
    entities: [
    ]
});

export default AppDataSource;