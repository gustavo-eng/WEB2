
module.exports = function(req, res, next) {
    // precisa colocar um html que identifica o (req.body.lembrar)

    if(req.body.remember) {
        res.cookie("nome", req.body.username, {maxAge: 7 * 24 * 60 * 60 * 1000})
    } else {
        res.clearCookie("nome");
    }

    return next(); 
}

 