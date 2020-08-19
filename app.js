const express = require('express');
const app = express();
const exhbs = require('express-handlebars');

app.use('/static', express.static(process.env.PWD + "/static"))

app.engine('handlebars', exhbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/display', (req, res) => {
    res.render('display');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started on ${port}`);
})