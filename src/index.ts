import express from "express";
import "dotenv/config";
import router from "./routes/routes";
import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize";
import { User } from "./models/users";

const app = express();
app.use(express.json());
app.use('/api', router);


const PORT = Number(process.env.PORT_EXPRESS);
const dbPort = Number(process.env.PORT_POSTGRES);
const dialect= process.env.DB_DIALECT as Dialect;

const sequelize= new Sequelize({
    port: dbPort,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: dialect,
    models:[User]
});

sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listening on port ${PORT}`)
    })
}).catch((e)=> { console.log(e) })



