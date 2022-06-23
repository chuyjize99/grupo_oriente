const helpers ={};

helpers.isAuthenticated =(req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/usuarios/inscrito');
}

module.exports = helpers;