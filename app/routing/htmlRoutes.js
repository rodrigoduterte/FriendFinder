var path = require('path');

var dir =  __dirname.split(path.sep);
dir[dir.length-1] = 'public';
dir = path.join(...dir);


module.exports = function(app){
    // ROUTES
    app.get('/survey',function(req,res){
        console.log(path.join(dir,'survey.html'));
        res.sendFile(path.join(dir,'survey.html'));
    });
    app.get('/',function(req,res){
        console.log(path.join(dir,'home.html'));
        res.sendFile(path.join(dir,'home.html'));
    });
}