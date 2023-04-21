import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import session from 'express-session';
import {AppDataSource} from "./src/data-source";

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect database success')
})
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Ning',
    cookie: { maxAge: 60000 }}));

app.use('', router)
app.listen(3000, () => {
    console.log('Server is running')
})
