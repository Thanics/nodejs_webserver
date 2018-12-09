const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('date',() => {
    return new Date().getFullYear();
})
hbs.registerHelper('screamIT',(text) => {
    return text.toUpperCase();
})

// Middleware to log the applications logs 
app.use((req,res,next) => {
    var now = new Date().toString();
    console.log("I am in app use " + now +  " Req URL " + req.url + "\n" );
    next();
})

app.get('/',(req,res) => {
    res.render('home.hbs',{
        pagetitle : "Some Web site",
        msg : "Hi Suganthi .... How are you "
    })
    // res.send({
    //     name : 'Thani',
    //     school : ['Oxford', 'SVHSS']        
    // });
});

app.get('/about' ,(req,res) => {
    //res.send("About page");
    res.render('about.hbs',{
        pagetitle : "About page title"
    });    
})
app.listen(3000, () => {
    console.log("Server started on port 3000");
});