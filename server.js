var bodyparser = require('body-parser');
var express = require('express');
var urlencodedParser = bodyparser.urlencoded({ extended: true });
var path = require('path');
var app = express();
var PORT = 3000;

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(urlencodedParser);


app.listen(PORT,function () {
    console.log("App listening on PORT " + PORT);
});