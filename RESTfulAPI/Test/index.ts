import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import {AppDataSource} from "./src/data-source";

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect Database Success')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('', router)
app.listen(3000, () => {
    console.log('Server is running')
})
