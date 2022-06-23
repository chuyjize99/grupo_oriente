const helpers ={};
<<<<<<< HEAD

=======
//helpers usa el metodo isAuthenticated para validar los usuarios
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
helpers.isAuthenticated =(req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/usuarios/inscrito');
}

module.exports = helpers;