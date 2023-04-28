import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import {AppDataSource} from "./src/data-source";
import cors from 'cors';

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect Database Success')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/home/:id', function (req: any, res: any, next) {
        if (req.params.id === '1') {
            req.name = 'Hùng';
            return next();
        } else {
            res.status(403).json('Bạn không có quyền')
        }
    },
    function (req: any, res: any, next) {
        res.json('Hello ' + req.name);
    })

app.use('/home2', function (req: any, res: any) {
    console.log(req.name)
    res.json(req.name)
})


app.use('', router)
app.listen(3000, () => {
    console.log('Server is running')
})
