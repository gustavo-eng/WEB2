
module.exports = function(req, res, next) {
    // precisa colocar um html que identifica o (req.body.lembrar)

    if(req.body.lembrar) {
        console.log(' ************* req.body.lembrar ************ valor ===> ')
        console.log(req.body.lembrar)
        res.cookie("nome", req.body.username, {maxAge: 7 * 24 * 60 * 60 * 1000})
    } else {
        console.log(' ************* req.body.lembrar ************ valor ===> ')
        res.clearCookie("nome");
    }

    return next(); 
}

 