
module.exports = function(req, res, next) {
    // precisa colocar um html que identifica o (req.body.lembrar)

    if(req.body.lembrar) {
        res.cookie("nome", req.body.username, {maxAge: 1 * 60 * 1000})
    } else {
        res.clearCookie("nome");
    }

    return next(); 
}

 
