import express from 'express';
import router from "./src/router/router";
import bodyParser from "body-parser";

const app = express();
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router)
app.listen(8080, () => {
    console.log('Server is running')
})
