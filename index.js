const app = require('express')();
const ejs = require('ejs');
const path = require('path');
const port=5000;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// app.set('/css', express.static(path.join(__dirname, './public/style')))

app.get("/", (req, res) => {
    // res.send("Bonjour le monde...");
    res.render("index");
  });



app.listen(port, () =>{
    console.log(`Le serveur écoute sur le port : ${port}`);
})