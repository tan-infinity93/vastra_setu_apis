import { Sequelize } from "sequelize";

export const connection = new Sequelize(process.env.DATABASE_URL, {
    logging: false
});

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} 
catch (error) {
    console.error('Unable to connect to the database:', error);
}