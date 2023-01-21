var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

let cors = require("cors"); //use this
app.use(cors()); //and this

var port = process.env.PORT | 8080;


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}
mongoose.connect('mongodb://localhost:27017/Assignment', options);

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./api/routes/routes')(app);

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port);

console.log('App started at port: ' + port);

exports = module.exports = app;
