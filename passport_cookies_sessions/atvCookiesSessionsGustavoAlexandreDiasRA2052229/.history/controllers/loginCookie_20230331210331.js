
module.exports = function(req, res, next) {
    // precisa colocar um html que identifica o (req.body.lembrar)

    if(req.body.lembrar) {
        console.log('valor de username dentro de controler ==> ' + req.body.username)
        console.log(' ************* req.body.lembrar ************ valor ===> ')
        console.log(req.body.lembrar)
        res.cookie("nome", req.body.username, {maxAge: 1 * 60 * 1000})
    } else {
        console.log(' ************* req.body.lembrar ************ valor ===> ')
        res.clearCookie("nome");
    }

    return next(); 
}

 