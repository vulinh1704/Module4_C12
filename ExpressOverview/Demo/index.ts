import express from 'express';
import bodyParser from "body-parser";

const app = express();
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, () => {
    console.log('Server is running')
})

app.get('/hello', (req, res) => {
    res.render('index', {name : 'mono sang'})
})

app.get('/student/:id', (req, res) => {
    res.send('Đây là student thứ ' + req.params.id)
})

app.post('/hello', (req, res) => {
    console.log(req.body);
})