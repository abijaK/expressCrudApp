const ejs = require('ejs')
const app = require('express')
const port=5000;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.set('/css', express)

app.listen(port, () =>{
    console.log(`Le serveur écoute sur le port : ${port}`);
})