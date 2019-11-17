const express = require('express');
const app = express();
//const html = require('./index.html');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(3000, () => console.log('Port:3000'));