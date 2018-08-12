var path = require('path');

var dir =  __dirname.split(path.sep);
dir[dir.length-1] = 'public';
dir = path.join(...dir);


module.exports = function(app){
    // ROUTES
    app.get('/survey',function(req,res){
        res.sendFile(path.join(__dirname, '../public', 'survey.html'));
    });
    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
    });
}