import { Sequelize } from "sequelize";

const config =  {
    username: "kartheek",
    password: "321321",
    database: "edu",
    host: "localhost",
    port: 3306
};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: "mysql",
    }
);

export default sequelize;
