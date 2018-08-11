var dir =  __dirname.split('\\');
dir[dir.length-1] = 'public';
dir = dir.join('\\');

module.exports = function(app){
    // ROUTES
    app.get('/survey',function(req,res){
        console.log(dir+'\\survey.html');
        res.sendFile(dir+'\\survey.html');
    });
    app.get('/',function(req,res){
        res.sendFile(dir+'\\home.html');
    });
}