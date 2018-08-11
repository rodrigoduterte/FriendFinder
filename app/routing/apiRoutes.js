var friendly = require('../data/friends');
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({ extended: true });

module.exports = function(app){
    // ROUTES
    app.get('/api/friends',function(req,res){
        res.json(friendly.friends);
    });
    app.post('/api/friends',urlencodedParser,function(req,res){
        friendly.addPerson(personFormat(req.body));
        res.json(friendly.yourfriend);
    });
}

function personFormat (body) {
    var scores = [];
    for (key in body) {
        if(key.includes('radio')) {
            scores.push(body[key]);
        }
        if (scores.length === 10) {
            return {
                "name" : body.name,
                "photo" : body.name1,
                "scores" : scores
            }
        }
    } 
}