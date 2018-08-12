var dir =  __dirname.split('\\');
dir[dir.length-1] = 'public';
dir = dir.join('\\');
var path = require('path');

module.exports = function(app){
    // ROUTES
    app.get('/survey',function(req,res){
        // console.log(path.join(dir,'survey.html'));
        res.sendFile(path.join(dir,'survey.html'));
    });
    app.get('/',function(req,res){
        // console.log(path.join(dir,'home.html'));
        res.sendFile(path.join(dir,'home.html'));
    });
}