const express = require('express');
const app     = express();

const path = require('path');
const fs   = require('fs');
const bodyParser = require('body-parser');

const DATACONTROLLER = require('./controllers/data-controller.js');


var routes = require('./routes/signin');

// set env port
const PORT = process.env.PORT || 8000;

// set up template engine
app.set('view engine', 'ejs');

// middleware
app.use('/public', express.static(path.join(__dirname + '/public')));
app.use('/client', express.static(path.join(__dirname + '/client')));
app.use('/views', express.static(path.join(__dirname + '/views')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// render main file
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './views')});
});

app.get(/^(.+)$/, function(req, res) {
    console.log(req.params);
    try {
        if ( fs.statSync(path.join(__dirname, './views', req.params[0] + '.html')).isFile() ) {

            res.sendFile(req.params[0] + '.html', {root: path.join(__dirname, './views')});

        }
    } catch(err) {
        console.log(err);
        res.sendFile('404.html', {root: path.join(__dirname, './views')});
    }
});



DATACONTROLLER(app);

app.use('/', routes);

// listen to port
app.listen(PORT, function() {
    console.log('app running on port %s', PORT);
});
